
import { 
  Package,
  FileSpreadsheet,
  History,
  AlertCircle,
  Settings,
  Users,
  Server,
  List,
  Timer
} from 'lucide-react';
import type { MenuItem } from '@/types/maintenance';

// Sous-menu pour la gestion du stock
const stockItems: MenuItem[] = [
  {
    icon: FileSpreadsheet,
    label: 'Inventaire',
    description: 'État du stock'
  },
  {
    icon: AlertCircle,
    label: 'Alertes',
    description: 'Seuils critiques'
  },
  {
    icon: History,
    label: 'Mouvements',
    description: 'Historique des mouvements'
  },
  {
    icon: Timer,
    label: 'Réapprovisionnement',
    description: 'Commandes automatiques'
  }
];

export const partsSubItems: MenuItem[] = [
  {
    icon: Package,
    label: 'Stock',
    description: 'Gestion du stock',
    items: stockItems
  },
  {
    icon: List,
    label: 'Commandes',
    description: 'Suivi des commandes'
  },
  {
    icon: FileSpreadsheet,
    label: 'Catalogue',
    description: 'Catalogue des pièces'
  },
  {
    icon: Server,
    label: 'Emplacements',
    description: 'Gestion des emplacements'
  },
  {
    icon: Users,
    label: 'Fournisseurs',
    description: 'Gestion des fournisseurs'
  },
  {
    icon: Settings,
    label: 'Paramètres',
    description: 'Configuration du stock'
  }
];
