import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    "Jamie Becker is a Colorado mortgage broker with 21+ years of experience. VA, FHA, Jumbo, Self-Employed, and specialty loan programs. Fast closings. NMLS #794730.",
  metadataBase: new URL("https://www.thebeckerteam.com"),
  openGraph: {
    type: "website",
    siteName: "The Becker Team",
    locale: "en_US",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Becker Team — Colorado Mortgage Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebeckerteam",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://www.thebeckerteam.com",
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
        <Navbar />
        <AnimationProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
