import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const montserratRegular = localFont({
  src: "../public/fonts/Montserrat-Regular.ttf",
  weight: "400",
  variable: "--font-montserrat",
  display: "swap",
});

const montserratMedium = localFont({
  src: "../public/fonts/Gontserrat-Medium.ttf",
  weight: "500",
  variable: "--font-montserrat-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "URBAN STAYS | Luxury Serviced Apartments – Sandton",
  description:
    "Experience luxury serviced apartments in the heart of Sandton. URBAN STAYS offers premium accommodation, private shuttle and chauffeur services.",
  keywords:
    "URBAN STAYS, serviced apartments, Sandton, luxury accommodation, Masingita Hotel, chauffeur, shuttle",
  openGraph: {
    title: "URBAN STAYS | Luxury Serviced Apartments – Sandton",
    description:
      "Premium serviced apartments in Sandton with private shuttle and chauffeur services.",
    type: "website",
    url: "https://urbanstays.co.za",
    siteName: "URBAN STAYS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "URBAN STAYS Luxury Apartments Sandton",
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "URBAN STAYS | Luxury Serviced Apartments – Sandton",
    description:
      "Premium serviced apartments in Sandton with private shuttle and chauffeur services.",
    images: ["https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserratRegular.variable} ${montserratMedium.variable}`}
    >
      <body suppressHydrationWarning>
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
