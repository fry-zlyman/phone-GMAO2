
import { 
  CalendarPlus,
  CalendarCheck,
  Clock,
  CalendarRange,
  Timer,
  Users,
  Calendar,
  History,
  AlertCircle,
  Settings,
  ListCheck,
  List,
  Package
} from 'lucide-react';
import type { MenuItem } from '@/types/maintenance';

// Sous-menu pour les tâches périodiques
const periodicTasks: MenuItem[] = [
  {
    icon: ListCheck,
    label: 'Quotidiennes',
    description: 'Tâches à effectuer chaque jour'
  },
  {
    icon: ListCheck,
    label: 'Hebdomadaires',
    description: 'Tâches de la semaine'
  },
  {
    icon: ListCheck,
    label: 'Mensuelles',
    description: 'Tâches du mois'
  },
  {
    icon: ListCheck,
    label: 'Trimestrielles',
    description: 'Tâches trimestrielles'
  },
  {
    icon: ListCheck,
    label: 'Annuelles',
    description: 'Tâches annuelles'
  }
];

// Sous-menu pour les ressources
const resourceItems: MenuItem[] = [
  {
    icon: Users,
    label: 'Personnel',
    description: 'Planning du personnel'
  },
  {
    icon: Package,
    label: 'Matériel',
    description: 'Planning du matériel'
  }
];

export const planningItems: MenuItem[] = [
  {
    icon: CalendarPlus,
    label: 'Nouvelle tâche',
    description: 'Planifier une nouvelle tâche'
  },
  {
    icon: CalendarCheck,
    label: 'Planning',
    description: 'Voir le planning en cours'
  },
  {
    icon: Clock,
    label: 'Journalier',
    description: 'Planning du jour'
  },
  {
    icon: CalendarRange,
    label: 'Hebdomadaire',
    description: 'Vue de la semaine'
  },
  {
    icon: Timer,
    label: 'Échéances',
    description: 'Tâches à venir'
  },
  {
    icon: Users,
    label: 'Ressources',
    description: 'Gestion des ressources',
    items: resourceItems
  },
  {
    icon: Calendar,
    label: 'Mensuel',
    description: 'Vue du mois'
  },
  {
    icon: List,
    label: 'Tâches périodiques',
    description: 'Gestion des tâches récurrentes',
    items: periodicTasks
  },
  {
    icon: History,
    label: 'Historique',
    description: 'Historique des planifications'
  },
  {
    icon: AlertCircle,
    label: 'Urgences',
    description: 'Gestion des tâches urgentes'
  },
  {
    icon: Settings,
    label: 'Préférences',
    description: 'Configuration du planning'
  }
];
