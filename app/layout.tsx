"use client";

import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Haj from "@/components/Haj";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Bizerte Tcodi</title>
        <link rel="icon" href="/logos/official-logo.png?v=2" />
        <link rel="apple-touch-icon" href="/logos/official-logo.png?v=2" />
        <meta name="description" content="Bizerte Tcodi — The hackathon where Bizerte's brightest minds turn ideas into impact." />
      </head>
      <body className={`${instrumentSans.variable} antialiased bg-dark`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Skiper19 />
          <FaqSection />
          <ContactSection />
          <Footer />
          <Haj />
        </ThemeProvider>
      </body>
    </html>
  );
}