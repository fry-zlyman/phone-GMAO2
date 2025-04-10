
import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

export const QRCodeScanner: React.FC = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      const equipmentPath = new URL(data.text).pathname;
      navigate(equipmentPath);
    }
  };

  const handleError = (err: any) => {
    setError('Erreur de lecture du QR code');
    console.error(err);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scanner QR Code</CardTitle>
      </CardHeader>
      <CardContent>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </CardContent>
    </Card>
  );
};
