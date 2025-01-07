import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/dashboard/Header";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Luxury NFT Marketplace",
  description: "Created by 0xsid0703",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="mcjs"
          async
          src="https://chimpstatic.com/mcjs-connected/js/users/9ae7f4c2cd8fb05a3073a6f81/418afc31df317a39db97f2028.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-auto`}
      >
        <div className="relative">
          <Header />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
