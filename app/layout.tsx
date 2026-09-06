import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jamie Becker | Colorado Mortgage Broker | The Becker Team",
    template: "%s | The Becker Team",
  },
  description:
    "Jamie Becker is a Colorado mortgage broker with 21+ years of experience. VA, FHA, Jumbo, Self-Employed, and specialty loan programs. Fast closings. NMLS #794730.",
  metadataBase: new URL("https://www.thebeckerteam.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
