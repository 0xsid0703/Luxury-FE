import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Transition Today",
  description: "Created by 0xsid0703",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        <div className="flex flex-row">
          <SideBar />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
