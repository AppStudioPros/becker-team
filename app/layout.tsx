import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import AnimationProvider from "@/components/AnimationProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: false,
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Jamie Becker | Colorado Mortgage Broker | The Becker Team",
    template: "%s | The Becker Team",
  },
  description:
    "Compare home loans in Colorado with Jamie Becker, NMLS #794730. Explore VA, FHA, conventional and jumbo loans, plus options for self-employed borrowers.",
  metadataBase: new URL("https://www.thebeckerteam.com"),
  openGraph: {
    type: "website",
    url: "./",
    siteName: "The Becker Team",
    locale: "en_US",
    images: [
      {
        url: "https://www.thebeckerteam.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Becker Team, Colorado mortgage broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebeckerteam",
    images: ["https://www.thebeckerteam.com/opengraph-image"],
  },
  alternates: {
    canonical: "./",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AnimationProvider />
        <ConditionalLayout footer={<Footer />}>
          <main id="main-content" tabIndex={-1}>{children}</main>
        </ConditionalLayout>
        <AccessibilityWidget />
        <ChatWidget />
        <Analytics />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J1L8L67WJT');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J1L8L67WJT" strategy="lazyOnload" />
      </body>
    </html>
  );
}
