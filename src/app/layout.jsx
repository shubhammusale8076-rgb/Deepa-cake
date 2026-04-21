import { Geist, Geist_Mono, Manrope, Noto_Serif } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: 'swap',
});

export const metadata = {
  title: "The Deepa's Chocotales | Luxury Cake Shop",
  description:
    "Order premium custom cakes, cookies, and desserts from Deepa's Chocotales. Perfect for birthdays, weddings, and special occasions. Freshly baked with love.",

  keywords: [
    "custom cakes",
    "home bakery",
    "birthday cakes",
    "wedding cakes",
    "cake shop near me",
    "custom cake order",
    "designer cakes",
    "Deepa's Chocotales",
  ],
  authors: [{ name: "Deepa's Chocotales" }],
  creator: "Deepa's Chocotales",

  openGraph: {
    title: "Deepa's Chocotales | Custom Cakes & Desserts",
    description: "Premium custom cakes, cookies, and desserts made with love. Order now for your special occasions.",
    url: "https://yourdomain.com", // update this
    siteName: "Deepa's Chocotales",
    images: [
      {
        url: "/images/product_truffle_box.webp", // add a good cake image here
        width: 1200,
        height: 630,
        alt: "Deepa's Chocotales Cakes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${notoSerif.variable}`}
    >

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
