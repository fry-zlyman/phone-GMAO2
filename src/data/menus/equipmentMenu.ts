
import { 
  FileSpreadsheet,
  Gauge,
  Plus,
  AlertCircle,
  Hammer,
  Package,
  ChartLine,
  ChartBar,
  History,
  Timer,
  Settings,
  FileWarning,
  Target,
  LineChart,
  FilePlus,
  Wrench,
  Server,
  Printer,
  Cpu,
  List
} from 'lucide-react';
import type { MenuItem } from '@/types/maintenance';

// Sous-menu pour l'ajout de nouveaux équipements
const newEquipmentItems: MenuItem[] = [
  {
    icon: Wrench,
    label: 'Machine de production',
    description: 'Ajouter une nouvelle machine'
  },
  {
    icon: Server,
    label: 'Équipement informatique',
    description: 'Ajouter un nouvel équipement IT'
  },
  {
    icon: Printer,
    label: 'Périphérique',
    description: 'Ajouter un périphérique'
  },
  {
    icon: Cpu,
    label: 'Automate',
    description: 'Ajouter un automate'
  }
];

// Sous-menu pour les compteurs machine
const counterItems: MenuItem[] = [
  {
    icon: Gauge,
    label: 'Relevés',
    description: 'Saisie des relevés de compteurs'
  },
  {
    icon: ChartLine,
    label: 'Tendances',
    description: 'Analyse des tendances'
  },
  {
    icon: ChartBar,
    label: 'Statistiques',
    description: "Statistiques d'utilisation"
  },
  {
    icon: History,
    label: 'Historique',
    description: 'Historique des relevés'
  },
  {
    icon: Timer,
    label: 'Seuils',
    description: "Configuration des seuils d'alerte"
  },
  {
    icon: Settings,
    label: 'Configuration',
    description: 'Paramètres des compteurs'
  },
  {
    icon: FileWarning,
    label: 'Alertes',
    description: 'Gestion des alertes'
  },
  {
    icon: Target,
    label: 'Objectifs',
    description: 'Définition des objectifs'
  },
  {
    icon: LineChart,
    label: 'Prédictions',
    description: 'Analyses prédictives'
  }
];

// Sous-menu pour la maintenance préventive
const preventiveItems: MenuItem[] = [
  {
    icon: List,
    label: 'Plans de maintenance',
    description: 'Gestion des plans de maintenance'
  },
  {
    icon: Timer,
    label: 'Échéancier',
    description: 'Planning des maintenances'
  },
  {
    icon: History,
    label: 'Historique',
    description: 'Historique des maintenances'
  },
  {
    icon: Settings,
    label: 'Configuration',
    description: 'Paramètres de maintenance'
  }
];

export const equipmentItems: MenuItem[] = [
  {
    icon: FilePlus,
    label: 'Nouvel équipement',
    description: 'Ajouter un nouvel équipement',
    items: newEquipmentItems
  },
  {
    icon: FileSpreadsheet,
    label: 'Inventaire',
    description: 'Liste complète des équipements'
  },
  {
    icon: Gauge,
    label: 'Compteurs machine',
    description: 'Suivi des compteurs et maintenance préventive',
    items: counterItems
  },
  {
    icon: Plus,
    label: 'Nouvelle maintenance',
    description: 'Ajouter une tâche périodique'
  },
  {
    icon: AlertCircle,
    label: 'Maintenance',
    description: 'Entretiens préventifs',
    items: preventiveItems
  },
  {
    icon: Hammer,
    label: 'Réparations',
    description: 'Interventions correctives'
  },
  {
    icon: Package,
    label: 'Pièces',
    description: 'Gestion des pièces détachées'
  }
];
