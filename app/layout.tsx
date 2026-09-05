import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getClinicData } from "@/lib/sanity/getContent";
import { ClientAppShell } from "@/components/ClientAppShell";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://perfecthealthcenter.in"
  ),
  title: {
    default:
      "Perfect Health Center — Dr. Pragati Khobragade | Homeopathy & General Practice Diva East",
    template: "%s | Perfect Health Center Diva East",
  },
  description:
    "Dr. Pragati Khobragade offers gentle, personalized constitutional homeopathy and general medical care for chronic ailments, women's health, and pediatric wellness in Diva East, Thane.",
  keywords: [
    "Perfect Health Center",
    "Dr. Pragati Khobragade",
    "Homeopathy Diva East",
    "Homeopath in Thane",
    "Skin Care Specialist Diva",
    "Asthma Treatment Homeopathy",
    "Pediatric Homeopathy Thane",
    "Women's Health PCOS Diva",
    "General Physician Diva East",
  ],
  authors: [{ name: "Dr. Pragati Khobragade" }],
  creator: "Perfect Health Center",
  publisher: "Perfect Health Center",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "Perfect Health Center — Dr. Pragati Khobragade | Homeopathy & General Practice",
    description:
      "Compassionate, evidence-guided homeopathic remedies & general practice in Diva East, Thane. Over 20 years of healing excellence.",
    url: "https://perfecthealthcenter.in",
    siteName: "Perfect Health Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_doctor.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Pragati Khobragade - Perfect Health Center Diva East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Health Center — Dr. Pragati Khobragade",
    description:
      "Holistic homeopathy & primary general healthcare in Diva East, Thane. Over 20 years clinical experience.",
    images: ["/images/hero_doctor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clinicData = await getClinicData();

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-white text-text-body selection:bg-primary-subtle selection:text-primary-dark">
        <SchemaMarkup clinicData={clinicData} />
        <ClientAppShell clinicData={clinicData}>{children}</ClientAppShell>
      </body>
    </html>
  );
}
