import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinventory | Minimalist Men's Fashion",
  description: "The premium gateway to minimalist men's fashion. Curated looks and essentials.",
  openGraph: {
    title: "Pinventory | Minimalist Men's Fashion",
    description: "The premium gateway to minimalist men's fashion. Curated looks and essentials.",
    type: "website",
    url: "https://pinventory.example.com",
    siteName: "Pinventory",
    images: [
      {
        url: "https://pinventory.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pinventory Cover",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-ui text-ebony bg-site-bg">
        <header className="px-6 py-8 md:px-12 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-ebony">
          <Link href="/" className="font-brand font-[800] text-3xl tracking-tight uppercase">
            Pinventory
          </Link>
          <nav className="flex items-center gap-6 text-sm font-ui uppercase tracking-wider">
            <Link href="/" className="hover:text-amber transition-colors">Shop</Link>
            <Link href="/category/men" className="hover:text-amber transition-colors">Men</Link>
            <Link href="/category/women" className="hover:text-amber transition-colors">Women</Link>
            <Link href="/category/accessories" className="hover:text-amber transition-colors">Accessories</Link>
            <Link href="#" className="hover:text-amber transition-colors">Journal</Link>
          </nav>
          <div className="font-mono text-xs uppercase tracking-widest text-ebony/60">
            ISSUE 01 &bull; 2026
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="px-6 py-12 md:px-12 mt-24 border-t border-ebony flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm font-ui text-ebony/80">
          <div>
            &copy; {new Date().getFullYear()} Pinventory. All rights reserved.
          </div>
          <div className="max-w-md text-xs leading-relaxed text-ebony/60">
            As an Amazon Associate we earn from qualifying purchases. This site serves as a premium gateway to curated minimalist fashion essentials.
          </div>
        </footer>
      </body>
    </html>
  );
}
