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
  openGraph: {
    title: 'Tejaswi Gawai — Software Developer',
    description: 'Portfolio website of Tejaswi Gawai',
    url: 'https://tejaswigawai.space',
    siteName: 'Tejaswi Gawai Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Tejaswi Gawai Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejaswi Gawai — Software Developer',
    description: 'Portfolio website of Tejaswi Gawai',
    images: ['/opengraph-image.png'],
  },
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
