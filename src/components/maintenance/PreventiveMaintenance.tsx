
import React from 'react';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PreventiveMaintenance } from '@/types/maintenance';

interface PreventiveMaintenanceProps {
  tasks: PreventiveMaintenance[];
  onClose: () => void;
}

export const PreventiveMaintenanceList: React.FC<PreventiveMaintenanceProps> = ({ tasks, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Entretiens préventifs</h1>
          <p className="text-muted-foreground">Planification et suivi des maintenances préventives</p>
        </div>
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Retour
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{task.equipement}</CardTitle>
                  <History className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>Fréquence : {task.frequence}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Prochaine maintenance</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(task.prochaine_maintenance).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tâches à effectuer</p>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 mt-1">
                      {task.taches.map((tache, index) => (
                        <li key={index}>{tache}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div>
                      <p className="text-sm font-medium">{task.technicien_assigne}</p>
                      <p className="text-xs text-muted-foreground">Durée : {task.duree_estimee}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      Planifier
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
