
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
import type { WorkOrder } from '@/types/maintenance';

interface ActiveWorkOrdersProps {
  workOrders: WorkOrder[];
  onClose: () => void;
}

export const ActiveWorkOrders: React.FC<ActiveWorkOrdersProps> = ({ workOrders, onClose }) => {
  const getPriorityColor = (priorite: string) => {
    switch (priorite.toLowerCase()) {
      case "urgente":
        return "text-red-600 font-bold";
      case "haute":
        return "text-orange-600";
      case "moyenne":
        return "text-yellow-600";
      default:
        return "text-green-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Ordres de travail en cours</h1>
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Retour
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm">
        <Table>
          <TableCaption>Liste des ordres de travail actifs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Titre</TableHead>
              <TableHead>Équipement</TableHead>
              <TableHead>Priorité</TableHead>
              <TableHead>Date planifiée</TableHead>
              <TableHead>Technicien</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workOrders.map((workOrder) => (
              <TableRow 
                key={workOrder.id}
                className="cursor-pointer hover:bg-muted/50"
              >
                <TableCell>{workOrder.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{workOrder.titre}</div>
                    <div className="text-sm text-muted-foreground">{workOrder.description}</div>
                  </div>
                </TableCell>
                <TableCell>{workOrder.equipement}</TableCell>
                <TableCell className={getPriorityColor(workOrder.priorite)}>
                  {workOrder.priorite}
                </TableCell>
                <TableCell>{new Date(workOrder.date_planification).toLocaleDateString()}</TableCell>
                <TableCell>{workOrder.technicien}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};
