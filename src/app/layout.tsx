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
    url: "https://pinventory-5hr5.vercel.app", // Updated to your live Vercel URL
    siteName: "Pinventory",
    images: [
      {
        url: "https://pinventory-5hr5.vercel.app/og-image.jpg", // Updated to your live Vercel URL
        width: 1200,
        height: 630,
        alt: "Pinventory Cover",
      },
    ],
  },
  verification: {
    other: {
      // Replaced the placeholder with your actual Pinterest code
      "p:domain_verify": "2b35d9cc56f50526ac82aa5aec6d6e44",
    },
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
      {/* Bulletproof manual head injection to guarantee Pinterest sees the tag */}
      <head>
        <meta name="p:domain_verify" content="2b35d9cc56f50526ac82aa5aec6d6e44" />
      </head>
      <body className="min-h-full flex flex-col font-ui text-ebony bg-site-bg">
        <header className="px-6 py-8 md:px-12 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-ebony">
          <Link href="/" className="font-brand font-[800] text-3xl tracking-tight uppercase">
            Pinventory
          </Link>
          <nav className="flex items-center gap-6 text-sm font-ui uppercase tracking-wider">
            <Link href="/category/men" className="hover:text-amber transition-colors">Men</Link>
            <Link href="/category/women" className="hover:text-amber transition-colors">Women</Link>
            <Link href="/category/accessories" className="hover:text-amber transition-colors">Accessories</Link>
          </nav>
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