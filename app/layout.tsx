import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/dashboard/Header";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ModalProvider } from "@/components/modal-provider";
import { getCurrentUser } from "@/lib/auth";


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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-auto`}
      >
        <GoogleOAuthProvider clientId={process.env.REACT_APP_DFNS_GOOGLE_OAUTH_CLIENT_ID!}>
          <div className="relative">
            <Header user={user}/>
            <ModalProvider />
            {children}
            <Toaster />
          </div>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
