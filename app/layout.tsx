"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Haj from "@/components/Haj";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";

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
        <meta name="description" content="Bizerte Tcodi — Bizerte's student coding and algorithmic problem-solving competition." />
      </head>
      <body className="antialiased bg-dark">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Haj />
        </ThemeProvider>
      </body>
    </html>
  );
}
