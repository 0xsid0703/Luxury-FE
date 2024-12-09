"use client";

import { useState } from "react";
import QRScannerModal from "./components/modal/QRScannerModal";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const [qrValue, setQRValue] = useState("");
  const closeModal = (): void => setIsModal(false);
  const handleQRValue = (qr: string): void => setQRValue(qr);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        className="text-2xl font-bold mb-4 bg-blue-500 py-1 px-5 rounded-md text-white"
        onClick={() => setIsModal(true)}
      >
        QR Code Scanner
      </button>
      {/* <div className="w-full max-w-sm mx-5">
        <QRScanner />
      </div> */}
      <div className="text-xl font-bold text-center">QR Code: {qrValue}</div>
      {isModal && (
        <QRScannerModal
          onClose={closeModal}
          isModal={isModal}
          setQRValue={handleQRValue}
        />
      )}
    </div>
  );
}
