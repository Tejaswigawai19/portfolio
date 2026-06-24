import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SvgDefs from "@/components/SvgDefs";
import CherryBlossom from "@/components/CherryBlossom";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['500', '600', '700', '800'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Tejaswi Gawai — Software Developer Portfolio",
  description: "Portfolio website of Tejaswi Gawai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-navy text-white font-body antialiased selection:bg-pink selection:text-white`}>
        <SmoothScroll />
        <CherryBlossom />
        <SvgDefs />
        {children}
      </body>
    </html>
  );
}
