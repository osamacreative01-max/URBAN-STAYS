import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | URBAN STAYS – Sandton",
  description:
    "Browse our gallery of luxury serviced apartments, interiors, chauffeur vehicles, and Sandton lifestyle imagery.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
