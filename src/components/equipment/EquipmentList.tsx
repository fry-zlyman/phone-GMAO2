
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Equipment } from '@/types/maintenance';

interface EquipmentListProps {
  equipment: Equipment[];
  onClose: () => void;
}

export const EquipmentList: React.FC<EquipmentListProps> = ({ equipment, onClose }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "En service":
        return "text-green-600";
      case "En maintenance":
        return "text-yellow-600";
      case "Hors service":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Liste des équipements</h1>
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Retour
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm">
        <Table>
          <TableCaption>Liste complète des équipements</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Localisation</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière maintenance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {equipment.map((item) => (
              <TableRow 
                key={item.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => console.log(`Équipement sélectionné: ${item.name}`)}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell className={getStatusColor(item.status)}>
                  {item.status}
                </TableCell>
                <TableCell>{new Date(item.lastMaintenance).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};
