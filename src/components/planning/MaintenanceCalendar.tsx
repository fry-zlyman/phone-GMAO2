
import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarRange, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { motion } from 'framer-motion';

interface MaintenanceTask {
  id: string;
  title: string;
  date: Date;
  status: 'completed' | 'pending' | 'overdue';
  equipment: string;
  technician: string;
}

const demoTasks: MaintenanceTask[] = [
  {
    id: '1',
    title: 'Maintenance préventive Pompe P-101',
    date: new Date(2024, 2, 15),
    status: 'completed',
    equipment: 'Pompe P-101',
    technician: 'Jean Dupont'
  },
  {
    id: '2',
    title: 'Inspection Compresseur C-201',
    date: new Date(2024, 2, 20),
    status: 'pending',
    equipment: 'Compresseur C-201',
    technician: 'Marie Martin'
  },
  {
    id: '3',
    title: 'Remplacement filtres',
    date: new Date(2024, 2, 10),
    status: 'overdue',
    equipment: 'Système ventilation',
    technician: 'Pierre Durant'
  }
];

export const MaintenanceCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  
  const getTasksForDate = (date: Date | undefined) => {
    if (!date) return [];
    return demoTasks.filter(task => 
      task.date.getDate() === date.getDate() &&
      task.date.getMonth() === date.getMonth() &&
      task.date.getFullYear() === date.getFullYear()
    );
  };

  const getStatusColor = (status: MaintenanceTask['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-blue-500';
      case 'overdue':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: MaintenanceTask['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'overdue':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const selectedTasks = getTasksForDate(selectedDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarRange className="w-5 h-5" />
                Calendrier de maintenance
              </CardTitle>
              <CardDescription>
                Visualisez et gérez les tâches de maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>
                Tâches du {selectedDate?.toLocaleDateString()}
              </CardTitle>
              <CardDescription>
                {selectedTasks.length} tâche(s) prévue(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedTasks.length > 0 ? (
                  selectedTasks.map(task => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(task.status)}
                            <h3 className="font-medium">{task.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Équipement: {task.equipment}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Technicien: {task.technician}
                          </p>
                        </div>
                        <span className={`text-sm font-medium ${getStatusColor(task.status)}`}>
                          {task.status === 'completed' ? 'Terminé' : 
                           task.status === 'pending' ? 'En attente' : 
                           'En retard'}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucune tâche prévue pour cette date
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" className="w-full md:w-auto">
                  Ajouter une tâche
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
