import React, { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

interface QRScannerModalProps {
  onClose: () => void;
  isModal: boolean;
  setQRValue: (qr: string) => void;
}

const QRScannerModal = ({
  onClose,
  isModal,
  setQRValue,
}: QRScannerModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReaderRef.current = codeReader;

    const startScanning = async () => {
      try {
        // Get video stream and start scanning
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          mediaStreamRef.current = stream;

          // Check if the video is already playing before calling play()
          if (videoRef.current.paused) {
            videoRef.current.onloadedmetadata = () => {
              videoRef.current?.play();
            };
          }
        }

        codeReader.decodeFromVideoDevice(
          undefined,
          videoRef.current!,
          (result, error) => {
            if (result) {
              console.log("QR Code:", result.getText());
              setQRValue(result.getText());
              onClose(); // Close modal after scanning
              stopScanning(); // Stop scanning once QR code is found
            }
            if (error) {
              // Ignore decoding errors or handle if necessary
            }
          }
        );
      } catch (err) {
        console.error("Error accessing video stream", err);
      }
    };

    if (isModal) {
      startScanning();
    }

    return () => {
      if (!isModal) {
        stopScanning();
      }
    };
  }, [isModal, setQRValue, onClose]);

  // Function to stop video and scanning
  const stopScanning = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all tracks of the stream
    }
    // @ts-ignore : cannot find reset function
    codeReaderRef.current?.reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background rounded-lg p-6 md:w-1/3 w-full mx-5 shadow-lg border border-border">
        <div className="text-center text-2xl mb-3">QR Code Scanner</div>
        <div className="relative">
          <video ref={videoRef} className="w-full" />

          {/* Custom animated scanning line */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="scanning-line"></div>
          </div>

          <style jsx>{`
            .scanning-line {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: rgba(255, 255, 255, 0.8);
              animation: scan 2s infinite ease-in-out;
            }

            @keyframes scan {
              0% {
                top: 0%;
              }
              50% {
                top: 50%;
              }
              100% {
                top: 100%;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default QRScannerModal;
