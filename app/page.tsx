"use client";

import QRScanner from "./components/QRScanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>
      <div className="w-full max-w-md">
        <QRScanner />
      </div>
    </div>
  );
}
