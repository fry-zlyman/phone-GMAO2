
import { 
  Users,
  Building2,
  Tags,
  Bell,
  Mail,
  Languages,
  PaintBucket,
  UserPlus,
  UserCog,
  Shield,
  UserCheck,
  History,
  UserX,
  UsersRound,
  Settings,
  AlertCircle,
  Package,
  List
} from 'lucide-react';
import type { MenuItem } from '@/types/maintenance';

// Sous-menu pour la gestion des notifications
const notificationItems: MenuItem[] = [
  {
    icon: Bell,
    label: 'Alertes système',
    description: 'Configuration des alertes système'
  },
  {
    icon: Mail,
    label: 'Emails',
    description: 'Paramètres des notifications email'
  },
  {
    icon: AlertCircle,
    label: 'Urgences',
    description: 'Notifications urgentes'
  }
];

// Sous-menu pour la gestion des utilisateurs
const userItems: MenuItem[] = [
  {
    icon: UserPlus,
    label: 'Ajouter',
    description: 'Créer un nouvel utilisateur'
  },
  {
    icon: UserCog,
    label: 'Gestion',
    description: 'Gérer les utilisateurs existants'
  },
  {
    icon: Shield,
    label: 'Rôles',
    description: 'Gestion des rôles et permissions'
  },
  {
    icon: UserCheck,
    label: 'Validation',
    description: 'Validation des nouveaux comptes'
  },
  {
    icon: History,
    label: 'Historique',
    description: 'Historique des connexions'
  },
  {
    icon: UserX,
    label: 'Blocage',
    description: 'Gestion des utilisateurs bloqués'
  },
  {
    icon: UsersRound,
    label: 'Équipes',
    description: 'Organisation des équipes'
  }
];

export const settingsItems: MenuItem[] = [
  {
    icon: Users,
    label: 'Utilisateurs',
    description: 'Gestion des utilisateurs et des rôles',
    items: userItems
  },
  {
    icon: Building2,
    label: 'Organisation',
    description: "Structure et sites de l'entreprise"
  },
  {
    icon: Tags,
    label: 'Catégories',
    description: "Types d'équipements et de maintenance"
  },
  {
    icon: Bell,
    label: 'Notifications',
    description: 'Configuration des alertes',
    items: notificationItems
  },
  {
    icon: Languages,
    label: 'Langue',
    description: 'Choix de la langue'
  },
  {
    icon: PaintBucket,
    label: 'Apparence',
    description: 'Thème et affichage'
  },
  {
    icon: Package,
    label: 'Modules',
    description: 'Gestion des modules'
  },
  {
    icon: List,
    label: 'Logs',
    description: 'Journaux système'
  },
  {
    icon: Settings,
    label: 'Système',
    description: 'Paramètres système'
  }
];
