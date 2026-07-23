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
  metadataBase: new URL("https://www.swasthahomoeo.com"),
  alternates: {
    canonical: "https://www.swasthahomoeo.com",
  },
  title: {
    default: "Swastha Homoeopathy | Best Homoeopathic Clinic in Hyderabad",
    template: "%s | Swastha Homoeopathy",
  },
  applicationName: "Swastha Homoeopathy",
  publisher: "Swastha Homoeopathy",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/favicon.ico",
  },
  description:
    "Swastha Homoeo — Top Homoeopathic Clinic in Hyderabad. Offering online & in-clinic consultations for chronic diseases, skin, respiratory & digestive care.",
  keywords: [
    "swastha homoeo",
    "swastha homeo",
    "swastha homoeopathy",
    "swastha homeopathy",
    "swastha homoeo hyderabad",
    "swastha homeopathy hyderabad",
    "homoeopathy hyderabad",
    "homeopathy hyderabad",
    "online homoeopathy consultation hyderabad",
    "online homeopathy consultation hyderabad",
    "homoeo clinic hyderabad",
    "homeo doctor hyderabad",
    "best homoeo doctor hyderabad",
    "homoeopathy clinic hyderabad",
    "natural healing hyderabad",
    "holistic clinic hyderabad",
  ],
  openGraph: {
    title: "Swastha Homoeopathy | Top Homoeopathic Clinic in Hyderabad",
    description:
      "Personalised homoeopathic care & online consultations in Hyderabad for chronic conditions.",
    url: "https://www.swasthahomoeo.com",
    siteName: "Swastha Homoeopathy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastha Homoeopathy Hyderabad",
    description: "Online & in-clinic homoeopathy consultations in Hyderabad",
  },
  robots: {
    index: true,
    follow: true,
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
    alternateName: [
      "Swastha Homoeo",
      "Swastha Homeo",
      "Swastha Homeopathy",
      "Swastha Homoeopathy Clinic",
    ],
    description:
      "Swastha Homoeo offers personalised homoeopathic and homeopathic treatments online and in-clinic at Hyderabad.",
    url: "https://www.swasthahomoeo.com",
    telephone: "+918328171337",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2189, Old MIG, BHEL",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4830569",
      longitude: "78.3068972",
    },
    openingHours: "Mo-Sa 10:30-13:00, Mo-Sa 17:00-20:00",
    priceRange: "₹₹",
    medicalSpecialty: "Homeopathic",
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
              name: "Swastha Homoeopathy",
              alternateName: "Swastha Homeopathy",
              url: "https://www.swasthahomoeo.com",
            }),
          }}
        />
        <WhatsAppButton />
      </body>
    </html>
  );
}