
import React from 'react';
import QRCode from 'qrcode';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Equipment } from '@/types/maintenance';

interface QRCodeGeneratorProps {
  equipment: Equipment;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ equipment }) => {
  const [qrDataUrl, setQrDataUrl] = React.useState<string>('');

  React.useEffect(() => {
    generateQR();
  }, [equipment]);

  const generateQR = async () => {
    try {
      const equipmentData = {
        id: equipment.id,
        name: equipment.name,
        type: equipment.type,
        location: equipment.location
      };
      
      const url = `${window.location.origin}/equipment/${equipment.id}`;
      const qrCode = await QRCode.toDataURL(url);
      setQrDataUrl(qrCode);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `equipment-${equipment.id}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code pour {equipment.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {qrDataUrl && (
          <img src={qrDataUrl} alt="Equipment QR Code" className="w-64 h-64" />
        )}
        <Button onClick={downloadQR}>Télécharger QR Code</Button>
      </CardContent>
    </Card>
  );
};
