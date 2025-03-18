import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { History } from 'lucide-react';
import CreateWorkOrder from '@/components/CreateWorkOrder';
import { MainMenu } from '@/components/MainMenu';
import { CorrectiveInterventions } from '@/components/CorrectiveInterventions';
import { MaintenanceCalendar } from '@/components/planning/MaintenanceCalendar';
import { InterventionHistory } from '@/components/interventions/InterventionHistory';
import { EquipmentList } from '@/components/equipment/EquipmentList';
import { ActiveWorkOrders } from '@/components/workorders/ActiveWorkOrders';
import { AllWorkOrders } from '@/components/workorders/AllWorkOrders';
import { PreventiveMaintenanceList } from '@/components/maintenance/PreventiveMaintenance';
import { SparePartsInventory } from '@/components/stock/SparePartsInventory';
import { useToast } from "@/components/ui/use-toast";
import type { CorrectiveIntervention, Intervention, PreventiveMaintenance, WorkOrder, Equipment } from '@/types/maintenance';

const Index = () => {
  const [isCreateWorkOrderOpen, setIsCreateWorkOrderOpen] = useState(false);
  const [showEquipmentList, setShowEquipmentList] = useState(false);
  const [showActiveWorkOrders, setShowActiveWorkOrders] = useState(false);
  const [showPreventiveMaintenance, setShowPreventiveMaintenance] = useState(false);
  const [showInterventionHistory, setShowInterventionHistory] = useState(false);
  const [showCorrectiveInterventions, setShowCorrectiveInterventions] = useState(false);
  const [showAllWorkOrders, setShowAllWorkOrders] = useState(false);
  const [showMaintenanceCalendar, setShowMaintenanceCalendar] = useState(false);
  const [showSparePartsInventory, setShowSparePartsInventory] = useState(false);
  const { toast } = useToast();

  const interventionHistory: Intervention[] = [];

  const preventiveMaintenanceTasks: PreventiveMaintenance[] = [
    {
      id: 1,
      equipement: "Pompe hydraulique P-101",
      frequence: "Mensuelle",
      derniere_maintenance: "2024-02-15",
      prochaine_maintenance: "2024-03-15",
      taches: [
        "Vérification des joints",
        "Mesure des vibrations",
        "Contrôle du débit",
        "Graissage des roulements"
      ],
      duree_estimee: "2h",
      technicien_assigne: "Jean Dupont",
      priorite: "Normal"
    },
    {
      id: 2,
      equipement: "Compresseur C-201",
      frequence: "Trimestrielle",
      derniere_maintenance: "2024-01-10",
      prochaine_maintenance: "2024-04-10",
      taches: [
        "Changement des filtres",
        "Test de pression",
        "Nettoyage du condenseur",
        "Vérification des courroies"
      ],
      duree_estimee: "4h",
      technicien_assigne: "Marie Martin",
      priorite: "Haute"
    },
    {
      id: 3,
      equipement: "Moteur électrique M-301",
      frequence: "Hebdomadaire",
      derniere_maintenance: "2024-03-08",
      prochaine_maintenance: "2024-03-15",
      taches: [
        "Mesure de température",
        "Contrôle du bruit",
        "Inspection visuelle",
        "Test de rotation"
      ],
      duree_estimee: "1h",
      technicien_assigne: "Pierre Durant",
      priorite: "Urgent"
    }
  ];

  const activeWorkOrders: WorkOrder[] = [
    {
      id: 1,
      titre: "Maintenance préventive pompe P-101",
      description: "Inspection et remplacement des joints",
      equipement: "Pompe hydraulique P-101",
      priorite: "Haute",
      date_planification: "2024-03-15",
      technicien: "Jean Dupont"
    },
    {
      id: 2,
      titre: "Calibration compresseur C-201",
      description: "Ajustement des paramètres de pression",
      equipement: "Compresseur C-201",
      priorite: "Moyenne",
      date_planification: "2024-03-16",
      technicien: "Marie Martin"
    },
    {
      id: 3,
      titre: "Réparation moteur M-301",
      description: "Remplacement des roulements",
      equipement: "Moteur électrique M-301",
      priorite: "Urgente",
      date_planification: "2024-03-14",
      technicien: "Pierre Durant"
    }
  ];

  const equipmentList: Equipment[] = [
    {
      id: 1,
      name: "Pompe hydraulique P-101",
      type: "Pompe",
      location: "Atelier principal",
      status: "En service",
      lastMaintenance: "2024-02-15"
    },
    {
      id: 2,
      name: "Compresseur C-201",
      type: "Compresseur",
      location: "Zone technique",
      status: "En maintenance",
      lastMaintenance: "2024-03-01"
    },
    {
      id: 3,
      name: "Moteur électrique M-301",
      type: "Moteur",
      location: "Ligne production 1",
      status: "En service",
      lastMaintenance: "2024-01-20"
    },
    {
      id: 4,
      name: "Convoyeur CV-401",
      type: "Convoyeur",
      location: "Zone expédition",
      status: "Hors service",
      lastMaintenance: "2024-02-28"
    }
  ];

  const correctiveInterventions: CorrectiveIntervention[] = [
    {
      id: "REP-001",
      date_signalement: "2024-03-10",
      equipement: "Pompe hydraulique P-101",
      type_panne: "Fuite hydraulique",
      description: "Fuite importante au niveau du joint principal",
      priorite: "Urgente",
      statut: "En attente",
      impact: "Production ralentie",
      technicien_assigne: "Jean Dupont",
      materiel_necessaire: [
        "Kit de joints complet HP-101",
        "Clé dynamométrique",
        "Pompe à vide",
        "Huile hydraulique (5L)",
        "Équipement de protection individuelle"
      ],
      temps_estime: "4h"
    },
    {
      id: "REP-002",
      date_signalement: "2024-03-11",
      equipement: "Compresseur C-201",
      type_panne: "Vibrations anormales",
      description: "Vibrations excessives et bruit inhabituel",
      priorite: "Haute",
      statut: "Planifié",
      impact: "Risque d'arrêt",
      technicien_assigne: "Marie Martin",
      materiel_necessaire: [
        "Kit de roulements complet",
        "Courroie de transmission",
        "Aligneur laser",
        "Graisse spéciale roulements",
        "Outils de démontage spécifiques"
      ],
      temps_estime: "6h"
    },
    {
      id: "REP-003",
      date_signalement: "2024-03-12",
      equipement: "Convoyeur CV-401",
      type_panne: "Moteur électrique",
      description: "Arrêts intermittents du moteur",
      priorite: "Normale",
      statut: "En cours",
      impact: "Productivité réduite",
      technicien_assigne: "Pierre Durant",
      materiel_necessaire: [
        "Multimètre",
        "Kit de balais moteur",
        "Condensateur de rechange",
        "Outils d'électricien",
        "Testeur d'isolement"
      ],
      temps_estime: "3h"
    }
  ];

  const handleMenuClick = (label: string) => {
    if (label === "Ordres de travail") {
      setShowActiveWorkOrders(true);
    } else if (label === "Équipements") {
      setShowEquipmentList(true);
    } else if (label === "Planification") {
      setShowMaintenanceCalendar(true);
    }
  };

  const handleSubItemClick = (mainLabel: string, subLabel: string) => {
    console.log(`Menu: ${mainLabel}, Sous-menu: ${subLabel}`);

    if (mainLabel === "Ordres de travail") {
      switch (subLabel) {
        case "Nouveau":
          setIsCreateWorkOrderOpen(true);
          break;
        case "En cours":
          setShowActiveWorkOrders(true);
          break;
        case "Historique":
          setShowInterventionHistory(true);
          break;
        case "Tous":
          setShowAllWorkOrders(true);
          break;
        case "Urgents":
          toast({
            title: "Ordres de travail urgents",
            description: "Affichage des ordres de travail prioritaires",
          });
          break;
        default:
          toast({
            title: "Fonctionnalité à venir",
            description: `La fonctionnalité "${subLabel}" sera bientôt disponible`,
          });
      }
    } else if (mainLabel === "Équipements") {
      switch (subLabel) {
        case "Inventaire":
          setShowEquipmentList(true);
          break;
        case "Maintenance":
          setShowPreventiveMaintenance(true);
          break;
        case "Réparations":
          setShowCorrectiveInterventions(true);
          break;
        case "Stock":
          setShowSparePartsInventory(true);
          break;
        case "Machine de production":
        case "Équipement informatique":
        case "Périphérique":
        case "Automate":
          toast({
            title: "Ajout d'équipement",
            description: `Formulaire d'ajout pour : ${subLabel}`,
          });
          break;
        default:
          toast({
            title: "Fonctionnalité à venir",
            description: `La fonctionnalité "${subLabel}" sera bientôt disponible`,
          });
      }
    } else if (mainLabel === "Planification") {
      switch (subLabel) {
        case "Planning":
          setShowMaintenanceCalendar(true);
          break;
        default:
          toast({
            title: "Fonctionnalité à venir",
            description: `La fonctionnalité "${subLabel}" sera bientôt disponible`,
          });
      }
    } else if (mainLabel === "Pièces") {
      switch (subLabel) {
        case "Stock":
          setShowSparePartsInventory(true);
          break;
        default:
          toast({
            title: "Fonctionnalité à venir",
            description: `La fonctionnalité "${subLabel}" sera bientôt disponible`,
          });
      }
    } else if (mainLabel === "Paramètres") {
      toast({
        title: "Paramètres",
        description: `Configuration de : ${subLabel}`,
      });
    }
  };

  if (showInterventionHistory) {
    return <InterventionHistory 
      interventions={interventionHistory} 
      onClose={() => setShowInterventionHistory(false)} 
    />;
  }

  if (showPreventiveMaintenance) {
    return <PreventiveMaintenanceList 
      tasks={preventiveMaintenanceTasks} 
      onClose={() => setShowPreventiveMaintenance(false)} 
    />;
  }

  if (showActiveWorkOrders) {
    return <ActiveWorkOrders 
      workOrders={activeWorkOrders} 
      onClose={() => setShowActiveWorkOrders(false)} 
    />;
  }

  if (showEquipmentList) {
    return <EquipmentList 
      equipment={equipmentList} 
      onClose={() => setShowEquipmentList(false)} 
    />;
  }

  if (showCorrectiveInterventions) {
    return <CorrectiveInterventions 
      interventions={correctiveInterventions}
      onClose={() => setShowCorrectiveInterventions(false)}
    />;
  }

  if (showAllWorkOrders) {
    return <AllWorkOrders 
      activeWorkOrders={activeWorkOrders}
      interventionHistory={interventionHistory}
      onClose={() => setShowAllWorkOrders(false)}
    />;
  }

  if (showMaintenanceCalendar) {
    return (
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Planning de maintenance</h1>
          <Button 
            variant="outline"
            onClick={() => setShowMaintenanceCalendar(false)}
          >
            Retour
          </Button>
        </div>
        <MaintenanceCalendar />
      </div>
    );
  }

  if (showSparePartsInventory) {
    return <SparePartsInventory onClose={() => setShowSparePartsInventory(false)} />;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          GMAO Mobile
        </motion.h1>
        <p className="text-muted-foreground">
          Gestion de maintenance simplifiée
        </p>
      </header>

      <MainMenu 
        onMenuClick={handleMenuClick}
        onSubItemClick={handleSubItemClick}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-card p-4 rounded-xl shadow-sm"
      >
        <h2 className="text-lg font-semibold mb-4">Tâches récentes</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center space-x-4 p-3 bg-secondary rounded-lg hover:shadow-md transition-all cursor-pointer"
              onClick={() => console.log(`Ouverture de la tâche ${index + 1}`)}
            >
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="text-left">
                <h3 className="text-sm font-medium">Maintenance préventive #{index + 1}</h3>
                <p className="text-xs text-muted-foreground">Planifié pour aujourd'hui</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <CreateWorkOrder 
        isOpen={isCreateWorkOrderOpen}
        onClose={() => setIsCreateWorkOrderOpen(false)}
      />
    </div>
  );
};

export default Index;
