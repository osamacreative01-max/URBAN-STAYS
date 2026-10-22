import { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  URBAN STAYS — contact form delivery
 * ─────────────────────────────────────────────────────────────────────────────
 *  Website enquiries are delivered through the first provider that is set up:
 *
 *    1. RESEND_API_KEY       → https://resend.com (recommended once the domain
 *                              is verified — best deliverability)
 *    2. CONTACT_WEBHOOK_URL  → your own endpoint (Make / Zapier / Formspree …)
 *    3. FormSubmit           → free relay, ON BY DEFAULT. Requires one one-time
 *                              "Activate Form" link to be clicked in the inbox
 *                              of FORMSUBMIT_TO (the Gmail address) — nothing
 *                              else to install, buy or configure.
 *
 *  A message is only ever reported as "sent" when the provider confirms it.
 *  Otherwise the visitor sees an honest error plus a WhatsApp fallback.
 *
 *  All variables are documented in .env.example and in HANDOVER.md.
 */

const EMAIL_TO = process.env.CONTACT_EMAIL_TO ?? "enquiries@urbanstaysandshuttles.co.za";
const EMAIL_CC = process.env.CONTACT_EMAIL_CC ?? "tirzahdlamini@gmail.com";
const EMAIL_FROM =
  process.env.CONTACT_EMAIL_FROM ?? "URBAN STAYS Website <onboarding@resend.dev>";

/* FormSubmit (free relay). Primary must be an address whose inbox we can open,
   because that is where the one-time activation link is sent. */
const FORMSUBMIT_ENDPOINT = process.env.FORMSUBMIT_ENDPOINT ?? "https://formsubmit.co/ajax/";
const FORMSUBMIT_ENABLED = process.env.FORMSUBMIT_ENABLED !== "false";

const ccList = EMAIL_CC.split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const MAX_MESSAGE = 5000;
const MAX_NAME = 120;

/* Best-effort in-memory rate limit (per server instance). */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendWithResend(payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY!;
  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#17233A">
      <p><strong>New enquiry from urbanstaysandshuttles.co.za</strong></p>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone || "—")}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${escapeHtml(payload.subject)}</td></tr>
      </table>
      <p style="margin-top:16px;white-space:pre-line">${escapeHtml(payload.message)}</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      ...(EMAIL_CC ? { cc: EMAIL_CC.split(",").map((s) => s.trim()).filter(Boolean) } : {}),
      reply_to: payload.email,
      subject: `[Website] ${payload.subject} — ${payload.name}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

async function sendWithWebhook(payload: Record<string, string>) {
  const url = process.env.CONTACT_WEBHOOK_URL!;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      to: EMAIL_TO,
      cc: EMAIL_CC,
      source: "urbanstaysandshuttles.co.za contact form",
      submittedAt: new Date().toISOString(),
    }),
  });
  if (!res.ok) throw new Error(`Webhook ${res.status}`);
}

/** Relay's one-time activation is still waiting to be clicked — retrying is pointless. */
class ActivationPendingError extends Error {}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Free relay through https://formsubmit.co — works with no account, no API key
 * and no DNS changes. FormSubmit requires the calling origin, so the site URL is
 * sent along with the request.
 *
 * The relay answers with a momentary 5xx every now and then, so a failed attempt
 * is retried a couple of times before the enquiry is reported as unsent. Nothing
 * is ever reported as "sent" without a positive confirmation.
 */
async function sendWithFormSubmit(payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const primary = process.env.FORMSUBMIT_TO?.trim() || ccList[0] || EMAIL_TO;
  const cc = [EMAIL_TO, ...ccList].filter((a) => a && a !== primary);

  const url = `${FORMSUBMIT_ENDPOINT}${encodeURIComponent(primary)}`;
  const body = JSON.stringify({
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
    _subject: `[Website] ${payload.subject} — ${payload.name}`,
    _captcha: "false",
    _honey: "",
    ...(cc.length ? { _cc: cc.join(",") } : {}),
  });

  const ATTEMPTS = 3;
  let lastError: unknown = "no attempt made";

  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: SITE_URL,
          Referer: `${SITE_URL}/contact`,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        },
        body,
      });

      const data: { success?: string; message?: string } | null = await res
        .json()
        .catch(() => null);
      const detail = data?.message ?? `HTTP ${res.status}`;

      if (res.ok && data && String(data.success).toLowerCase() === "true") return;

      // The one-time activation link has not been clicked yet — no point retrying.
      if (/activ/i.test(detail)) throw new ActivationPendingError(detail);

      lastError = new Error(`FormSubmit ${res.status}: ${detail}`);
    } catch (err) {
      if (err instanceof ActivationPendingError) throw err;
      lastError = err; // network hiccup or timeout — worth another try
    }

    if (attempt < ATTEMPTS) await sleep(attempt * 1500);
  }

  throw lastError;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return json(
      { ok: false, error: "Too many messages from this device. Please try again shortly." },
      429
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  /* Honeypot — real visitors never fill this hidden field. */
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "General Enquiry").trim() || "General Enquiry";
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return json({ ok: false, error: "Please complete your name, email and message." }, 400);
  }
  if (name.length > MAX_NAME || message.length > MAX_MESSAGE) {
    return json({ ok: false, error: "Please keep your message under 5,000 characters." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const payload = { name, email, phone, subject, message };

  try {
    if (process.env.RESEND_API_KEY) {
      await sendWithResend(payload);
    } else if (process.env.CONTACT_WEBHOOK_URL) {
      await sendWithWebhook(payload);
    } else if (FORMSUBMIT_ENABLED) {
      await sendWithFormSubmit(payload);
    } else {
      console.error(
        "[contact] No email provider configured. Set RESEND_API_KEY, CONTACT_WEBHOOK_URL or enable FormSubmit."
      );
      return json(
        {
          ok: false,
          error:
            "Our enquiry system is being set up. Please message us on WhatsApp instead — the number is on this page.",
        },
        503
      );
    }
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[contact] delivery failed:", detail);

    if (err instanceof ActivationPendingError) {
      console.error(
        "[contact] ACTION REQUIRED: open the inbox of " +
          (process.env.FORMSUBMIT_TO?.trim() || ccList[0] || EMAIL_TO) +
          " and click the 'Activate Form' link from FormSubmit. Until it is clicked, every enquiry is refused."
      );
    }

    /* Keep the enquiry so it can still be recovered from the Vercel logs. */
    console.error(
      "[contact] ENQUIRY NOT DELIVERED — recoverable copy:\n" +
        JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }, null, 2)
    );

    /* `code` is machine-readable so the problem can be identified from outside;
       the visitor-facing wording stays the same in every failure. */
    return json(
      {
        ok: false,
        code: err instanceof ActivationPendingError ? "activation_pending" : "relay_error",
        error:
          "We could not send your message just now. Please try again, or use WhatsApp for an instant reply.",
      },
      500
    );
  }

  return json({ ok: true });
}
