export interface WorkOrder {
  id: number;
  titre: string;
  description: string;
  equipement: string;
  priorite: string;
  date_planification: string;
  technicien: string;
}

export interface Equipment {
  id: number;
  name: string;
  type: string;
  location: string;
  status: string;
  lastMaintenance: string;
}

export interface PreventiveMaintenance {
  id: number;
  equipement: string;
  frequence: string;
  derniere_maintenance: string;
  prochaine_maintenance: string;
  taches: string[];
  duree_estimee: string;
  technicien_assigne: string;
  priorite: string;
}

export interface Intervention {
  id: string;
  date: string;
  equipement: string;
  type: string;
  description: string;
  technicien: string;
  duree: string;
  statut: string;
  pieces: string[];
  commentaires: string;
}

export interface CorrectiveIntervention {
  id: string;
  date_signalement: string;
  equipement: string;
  type_panne: string;
  description: string;
  priorite: string;
  statut: string;
  impact: string;
  technicien_assigne: string;
  materiel_necessaire: string[];
  temps_estime: string;
}

export interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  description?: string;
  items?: MenuItem[];
}

export interface MenuSection {
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  items: MenuItem[];
}

export interface SparePart {
  id: string;
  reference: string;
  designation: string;
  quantite: number;
  seuil_alerte: number;
  localisation: string;
  prix_unitaire: number;
  fournisseur: string;
  equipements_compatibles: string[];
  derniere_mise_a_jour: string;
  statut: 'En stock' | 'Stock faible' | 'Rupture';
}
