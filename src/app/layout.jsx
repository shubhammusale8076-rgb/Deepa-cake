import { Geist, Geist_Mono, Manrope, Noto_Serif } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata = {
  title: "The Cinematic Pâtisserie",
  description: "A Cake Shop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${notoSerif.variable}`}
    > 

      <body>
        <Navbar/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
