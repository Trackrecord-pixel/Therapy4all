import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const viewport: Viewport = { themeColor: "#0f7b6e", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Physiotherapy Newcastle & Lake Macquarie | Therapy 4 All Physiotherapy",
    template: "%s | Therapy 4 All Physiotherapy",
  },
  description: site.description,
  authors: [{ name: site.name }], creator: site.name, publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_AU", url: site.url, siteName: "Therapy 4 All Physiotherapy",
    title: "Physiotherapy Newcastle & Lake Macquarie | Therapy 4 All Physiotherapy",
    description: site.description,
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Therapy 4 All Physiotherapy" }],
  },
  twitter: { card: "summary_large_image", title: "Therapy 4 All Physiotherapy", description: site.description, images: ["/images/og-default.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
