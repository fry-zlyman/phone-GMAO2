
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ClipboardList } from 'lucide-react';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import type { WorkOrder, Intervention } from '@/types/maintenance';

interface AllWorkOrdersProps {
  activeWorkOrders: WorkOrder[];
  interventionHistory: Intervention[];
  onClose: () => void;
}

export const AllWorkOrders: React.FC<AllWorkOrdersProps> = ({ 
  activeWorkOrders, 
  interventionHistory, 
  onClose 
}) => {
  const allWorkOrdersData = [
    ...activeWorkOrders,
    ...interventionHistory.map(intervention => ({
      id: parseInt(intervention.id.replace('INT-', '')),
      titre: intervention.type,
      description: intervention.description,
      equipement: intervention.equipement,
      priorite: 'Terminé',
      date_planification: intervention.date,
      technicien: intervention.technicien
    }))
  ];

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
        <div>
          <h1 className="text-2xl font-bold">Vue complète des ordres de travail</h1>
          <p className="text-muted-foreground">Tous les ordres de travail actifs et historiques</p>
        </div>
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Retour
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Titre</TableHead>
              <TableHead>Équipement</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Technicien</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allWorkOrdersData.sort((a, b) => {
              const dateA = new Date(a.date_planification).getTime();
              const dateB = new Date(b.date_planification).getTime();
              return dateB - dateA;
            }).map((workOrder) => (
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
                <TableCell>
                  {new Date(workOrder.date_planification).toLocaleDateString()}
                </TableCell>
                <TableCell>{workOrder.technicien}</TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-accent"
                  >
                    <ClipboardList className="h-4 w-4 mr-2" />
                    Détails
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};
