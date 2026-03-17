import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Luigistates",
  description: "Don't forget to use my code!",
  // This is the magic section for link previews!
  openGraph: {
    title: "Luigistates",
    description: "Don't forget to use my code!",
    url: "https://luigistates-portfolio.vercel.app/",
    siteName: "Luigistates Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // Put this image in your 'public' folder
        width: 1200,
        height: 630,
        alt: "Luigistates Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter uses its own slightly different system
  twitter: {
    card: "summary_large_image",
    title: "Luigistates",
    description: "Don't forget to use my code!",
    images: ["/opengraph-image.png"], // Same image as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
