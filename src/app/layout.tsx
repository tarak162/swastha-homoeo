import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://swasthahomoeo.vercel.app"
  ),
  title: {
    default: "Swastha Homoeopathy | Natural Healing",
    template: "%s | Swastha Homoeopathy"
  },
  applicationName: "Swastha Homoeopathy",
  publisher: "Swastha Homoeopathy",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", 
        sizes: "16x16", 
        type: "image/png" },
      { url: "/favicon-32x32.png", 
        sizes: "32x32", 
        type: "image/png" },
      { url: "/favicon.ico", 
        sizes: "any" }
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    shortcut: "/favicon.ico"
  },
  description:
    "Book online homoeopathy consultations with Dr. S. Dhanalakshmi, M.D. Personalised treatment for skin, digestion, respiratory and chronic conditions. BHEL, Hyderabad.",
  keywords: [
    "homoeopathy hyderabad",
    "online homoeopathy consultation",
    "swastha homoeopathy",
    "Dr Dhanalakshmi homoeopathy",
    "best homoeopathy doctor hyderabad",
    "homoeopathy clinic bhel hyderabad",
  ],
  openGraph: {
    title: "Swastha Homoeopathy | Natural Healing",
    description:
      "Personalised homoeopathic care with Dr. S. Dhanalakshmi, M.D. Book online via Google Meet.",
    url: "https://swasthahomoeo.vercel.app",
    siteName: "Swastha Homoeopathy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastha Homoeopathy Hyderabad",
    description: "Online homoeopathy consultations with Dr. Dhanalakshmi",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://swasthahomoeo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Swastha Homoeopathy",
    description:
      "Homoeopathy clinic offering personalised online consultations",
    url: "https://swasthahomoeo.vercel.app",
    telephone: "+918328171337",
    address: {
      "@type": "PostalAddress",
      streetAddress: "BHEL",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4830569",
      longitude: "78.3068972",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₹₹",
    medicalSpecialty: "Homoeopathy",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <TopBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Swastha Homoeopathy",
              "alternateName": "Swastha Homeopathy",
              "url": "https://swasthahomoeo.vercel.app"
            })
          }}
        />
        <WhatsAppButton />
      </body>
    </html>
  );
}
