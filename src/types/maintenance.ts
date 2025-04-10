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
export interface ComplianceChecklist {
  id: string;
  title: string;
  description: string;
  items: ChecklistItem[];
  equipment_type: string;
  created_at: string;
  updated_at: string;
  status: 'active' | 'archived';
}

export interface ChecklistItem {
  id: string;
  description: string;
  required: boolean;
  completed: boolean;
  completed_at?: string;
  completed_by?: string;
  evidence_required: boolean;
  evidence_url?: string;
}

export interface SafetyProtocol {
  id: string;
  title: string;
  description: string;
  equipment_types: string[];
  procedures: string[];
  last_review: string;
  next_review: string;
  status: 'active' | 'under_review' | 'archived';
}

export interface Certification {
  id: string;
  title: string;
  holder: string;
  issuer: string;
  issue_date: string;
  expiry_date: string;
  status: 'valid' | 'expired' | 'pending';
  renewal_required: boolean;
  documents: string[];
}
