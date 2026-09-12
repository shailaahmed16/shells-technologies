import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shells Technologies | Remote IT & Design Solutions",
    template: "%s | Shells Technologies",
  },
  description: siteConfig.description,
  applicationName: "Shells Technologies",
  authors: [{ name: "Shells Technologies" }],
  creator: "Shells Technologies",
  publisher: "Shells Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shells Technologies | Build Bold. Ship Fast.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Shells Technologies",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Shells Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shells Technologies | Build Bold. Ship Fast.",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
