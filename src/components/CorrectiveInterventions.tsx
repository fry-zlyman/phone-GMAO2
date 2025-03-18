
import React from 'react';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CorrectiveIntervention } from '@/types/maintenance';

interface CorrectiveInterventionsProps {
  interventions: CorrectiveIntervention[];
  onClose: () => void;
}

export const CorrectiveInterventions: React.FC<CorrectiveInterventionsProps> = ({ interventions, onClose }) => {
  const getStatusBadgeColor = (statut: string) => {
    switch (statut.toLowerCase()) {
      case "en attente":
        return "text-yellow-600 bg-yellow-100";
      case "planifié":
        return "text-blue-600 bg-blue-100";
      case "en cours":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
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
          <h1 className="text-2xl font-bold">Interventions correctives</h1>
          <p className="text-muted-foreground">Suivi des réparations et interventions urgentes</p>
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
                      <Hammer className="h-5 w-5" />
                      {intervention.equipement}
                    </CardTitle>
                    <CardDescription>
                      {intervention.id} - {intervention.type_panne}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(intervention.statut)}`}>
                      {intervention.statut}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Signalé le {new Date(intervention.date_signalement).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Description du problème</p>
                    <p className="text-sm text-muted-foreground">{intervention.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Impact</p>
                      <p className="text-sm text-red-600">{intervention.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Priorité</p>
                      <p className={`text-sm ${
                        intervention.priorite === "Urgente" ? "text-red-600" :
                        intervention.priorite === "Haute" ? "text-orange-600" :
                        "text-yellow-600"
                      }`}>{intervention.priorite}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Technicien assigné</p>
                      <p className="text-sm text-muted-foreground">{intervention.technicien_assigne}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Temps estimé</p>
                      <p className="text-sm text-muted-foreground">{intervention.temps_estime}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Matériel nécessaire</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      {intervention.materiel_necessaire.map((materiel, index) => (
                        <li key={index} className="flex items-start">
                          <span className="ml-2">{materiel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end items-center pt-4 border-t">
                    <Button variant="outline" size="sm">
                      Débuter l'intervention
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
