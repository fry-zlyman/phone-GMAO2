
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
import type { Intervention } from '@/types/maintenance';

interface InterventionHistoryProps {
  interventions: Intervention[];
  onClose: () => void;
}

export const InterventionHistory: React.FC<InterventionHistoryProps> = ({ interventions, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Historique des interventions</h1>
          <p className="text-muted-foreground">Journal complet des interventions réalisées</p>
        </div>
        <Button 
          variant="outline"
          onClick={onClose}
        >
          Retour
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {interventions.map((intervention) => (
          <motion.div
            key={intervention.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <History className="h-5 w-5" />
                      {intervention.type}
                    </CardTitle>
                    <CardDescription>
                      {intervention.equipement} - {intervention.id}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{new Date(intervention.date).toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">Durée : {intervention.duree}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Description</p>
                    <p className="text-sm text-muted-foreground">{intervention.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Technicien</p>
                      <p className="text-sm text-muted-foreground">{intervention.technicien}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Statut</p>
                      <p className="text-sm text-green-600">{intervention.statut}</p>
                    </div>
                  </div>
                  {intervention.pieces.length > 0 && (
                    <div>
                      <p className="text-sm font-medium">Pièces utilisées</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {intervention.pieces.map((piece, index) => (
                          <li key={index}>{piece}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">Commentaires</p>
                    <p className="text-sm text-muted-foreground">{intervention.commentaires}</p>
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
