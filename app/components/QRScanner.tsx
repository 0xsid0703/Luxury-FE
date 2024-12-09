// components/QRScanner.tsx
import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRScanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromVideoDevice(
      null,
      videoRef.current!,
      (result, error) => {
        if (result) {
          console.log("QR Code:", result.getText());
        }
        if (error) {
          //   console.error(error);
        }
      }
    );

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
};

export default QRScanner;
