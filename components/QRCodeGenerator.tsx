import { useEffect, useState } from "react";
import QRCode from "qrcode";
type QRCodeGeneratorProps = {
  text: string;
};
const QRCodeGenerator = ({ text }: QRCodeGeneratorProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text, { width: 300, margin: 2 }, (err, url) => {
        if (err) {
          console.error("Error generating QR code", err);
        } else {
          setQrCodeUrl(url);
        }
      });
    }
  }, [text]);

  return (
    <div className="w-full h-full flex justify-center">
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt="Generated QR Code" className="w-[150px]" />
      ) : (
        <p>Generating QR Code...</p>
      )}
    </div>
  );
};

export default QRCodeGenerator;
