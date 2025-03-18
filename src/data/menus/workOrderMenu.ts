
import { 
  ClipboardPlus,
  ListCheck,
  History,
  ClipboardList,
  AlertCircle,
  Timer,
  Calendar,
  Users,
  Settings
} from 'lucide-react';
import type { MenuItem } from '@/types/maintenance';

export const workOrderItems: MenuItem[] = [
  {
    icon: ClipboardPlus,
    label: 'Nouveau',
    description: 'Créer un ordre de travail'
  },
  {
    icon: ListCheck,
    label: 'En cours',
    description: 'Ordres de travail actifs'
  },
  {
    icon: History,
    label: 'Historique',
    description: 'Historique des interventions'
  },
  {
    icon: ClipboardList,
    label: 'Tous',
    description: 'Vue complète des OT'
  },
  {
    icon: AlertCircle,
    label: 'Urgents',
    description: 'Ordres de travail prioritaires'
  },
  {
    icon: Timer,
    label: 'Planifiés',
    description: 'OT planifiés'
  },
  {
    icon: Calendar,
    label: 'Calendrier',
    description: 'Vue calendrier des OT'
  },
  {
    icon: Users,
    label: 'Par équipe',
    description: 'Répartition par équipe'
  },
  {
    icon: Settings,
    label: 'Configuration',
    description: 'Paramètres des OT'
  }
];
