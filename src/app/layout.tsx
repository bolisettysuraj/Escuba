import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollReveal from "@/components/ScrollReveal";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Experience Scuba | Best Dive Centre in Andaman",
  description:
    "Experience Scuba - Your gateway to exploring the breathtaking underwater world of the Andaman Islands. PADI certified dive centre in Havelock Island.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Experience Scuba | Best Dive Centre in Andaman",
    description:
      "Your gateway to exploring the breathtaking underwater world of the Andaman Islands. PADI certified dive centre in Havelock Island.",
    url: "https://experiencescuba.com",
    siteName: "Experience Scuba",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Experience Scuba - Dive Centre in Andaman",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-deep-950 text-slate-200`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Bubbles />
        <ScrollReveal />
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
