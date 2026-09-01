import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | URBAN STAYS – Sandton",
  description:
    "Contact URBAN STAYS for apartment bookings, shuttle enquiries, and more. Based at Masingita Hotel, Sandton.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
