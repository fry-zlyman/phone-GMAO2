
import { 
  ClipboardList, 
  Wrench, 
  Calendar,
  Settings
} from 'lucide-react';
import type { MenuSection } from '@/types/maintenance';
import { workOrderItems } from './menus/workOrderMenu';
import { equipmentItems } from './menus/equipmentMenu';
import { planningItems } from './menus/planningMenu';
import { settingsItems } from './menus/settingsMenu';

export * from './menus/settingsMenu';
export * from './menus/partsMenu';
export * from './menus/workOrderMenu';
export * from './menus/equipmentMenu';
export * from './menus/planningMenu';

export const menuItems: MenuSection[] = [
  {
    icon: ClipboardList,
    label: 'Ordres de travail',
    color: 'bg-primary',
    items: workOrderItems
  },
  {
    icon: Wrench,
    label: 'Équipements',
    color: 'bg-accent',
    items: equipmentItems
  },
  {
    icon: Calendar,
    label: 'Planification',
    color: 'bg-secondary',
    items: planningItems
  },
  {
    icon: Settings,
    label: 'Paramètres',
    color: 'bg-muted',
    items: settingsItems
  },
  {
    icon: ClipboardCheck,
    label: 'Conformité',
    color: 'bg-orange-500',
    items: [
      {
        icon: CheckSquare,
        label: 'Listes de contrôle',
        description: 'Procédures de maintenance'
      },
      {
        icon: Shield,
        label: 'Protocoles',
        description: 'Protocoles de sécurité'
      },
      {
        icon: Award,
        label: 'Certifications',
        description: 'Gestion des certifications'
      }
    ]
  }
];
