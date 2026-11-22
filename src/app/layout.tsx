import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ClinicJsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    locale: "pt_BR",
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/dra-fabia.jpg",
        width: 800,
        height: 1000,
        alt: "Dra. Fábia Mattos — Clínica Mattos Leite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/images/dra-fabia.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-mattos.png",
    apple: "/favicon-mattos.png",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#002B45",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ClinicJsonLd />
        <SkipLink />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
