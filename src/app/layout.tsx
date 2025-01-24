import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixel = Pixelify_Sans({
  weight: "400",
  // subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "frog pond",
  description: "what froggie are you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable} antialiased`}
      >
        <div className="animated-background" />
        {children}
      </body>
    </html>
  );
}
