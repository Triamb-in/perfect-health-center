import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { getClinicData } from "@/lib/sanity/getContent";
import { ClientAppShell } from "@/components/ClientAppShell";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { LayoutClinicData } from "@/types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://perfecthealthcenter.in"
  ),
  title: {
    default: "Homeopathy Clinic in Diva East | Perfect Health Center",
    template: "%s | Perfect Health Center",
  },
  description:
    "Dr. Pragati Khobragade & Dr. Vijay Uplekar offer gentle constitutional homeopathy and primary healthcare in Diva East, Thane. Over 20 years experience.",
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
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Health Center — Dr. Pragati Khobragade Diva East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Health Center — Dr. Pragati Khobragade, Diva East",
    description:
      "Holistic homeopathy & primary general healthcare in Diva East, Thane. Over 20 years clinical experience.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Reading headers() enables Next.js to inject the middleware x-nonce into all script tags
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? undefined;
  const clinicData = await getClinicData();
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

  const layoutClinicData: LayoutClinicData = {
    clinicName: clinicData.clinicName,
    address: clinicData.address,
    contact: clinicData.contact,
    developerCredit: clinicData.developerCredit,
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-white text-text-body selection:bg-primary-subtle selection:text-primary-dark">
        {/* Google Analytics (gtag.js) - Rendered only when real production NEXT_PUBLIC_GA_ID is configured */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              nonce={nonce}
            />
            <script
              id="google-analytics"
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        <SchemaMarkup clinicData={clinicData} />
        <ClientAppShell clinicData={layoutClinicData}>{children}</ClientAppShell>
      </body>
    </html>
  );
}
