
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Download, Upload, Search, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SparePart } from '@/types/maintenance';

interface SparePartsInventoryProps {
  onClose: () => void;
}

export const SparePartsInventory: React.FC<SparePartsInventoryProps> = ({ onClose }) => {
  // Données de démonstration
  const spareParts: SparePart[] = [
    {
      id: "SP001",
      reference: "FLT-101",
      designation: "Filtre hydraulique",
      quantite: 5,
      seuil_alerte: 3,
      localisation: "Magasin A-12",
      prix_unitaire: 45.99,
      fournisseur: "HydraParts",
      equipements_compatibles: ["Pompe P-101", "Pompe P-102"],
      derniere_mise_a_jour: "2024-03-15",
      statut: "En stock"
    },
    {
      id: "SP002",
      reference: "ROL-202",
      designation: "Roulement à billes",
      quantite: 2,
      seuil_alerte: 5,
      localisation: "Magasin B-03",
      prix_unitaire: 28.50,
      fournisseur: "BearingTech",
      equipements_compatibles: ["Moteur M-301", "Ventilateur V-101"],
      derniere_mise_a_jour: "2024-03-14",
      statut: "Stock faible"
    },
    {
      id: "SP003",
      reference: "JNT-303",
      designation: "Joint torique",
      quantite: 0,
      seuil_alerte: 10,
      localisation: "Magasin A-05",
      prix_unitaire: 3.99,
      fournisseur: "SealMaster",
      equipements_compatibles: ["Pompe P-101", "Vanne V-201", "Compresseur C-101"],
      derniere_mise_a_jour: "2024-03-13",
      statut: "Rupture"
    }
  ];

  const getStatusStyle = (statut: SparePart['statut']) => {
    switch (statut) {
      case 'En stock':
        return 'text-green-600';
      case 'Stock faible':
        return 'text-orange-600';
      case 'Rupture':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getQuantityStyle = (quantite: number, seuil_alerte: number) => {
    if (quantite === 0) return 'text-red-600 font-bold';
    if (quantite <= seuil_alerte) return 'text-orange-600 font-medium';
    return 'text-green-600';
  };

  const handleKeyPress = (event: React.KeyboardEvent, partId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      console.log(`Détails de la pièce ${partId}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-4"
      role="region"
      aria-label="Inventaire des pièces détachées"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" tabIndex={0}>Inventaire des pièces détachées</h1>
          <p className="text-muted-foreground" tabIndex={0}>Gestion du stock et des approvisionnements</p>
        </div>
        <Button 
          variant="outline"
          onClick={onClose}
          aria-label="Retourner à la page précédente"
        >
          Retour
        </Button>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        role="region"
        aria-label="Résumé des stocks"
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" tabIndex={0}>Total pièces</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" tabIndex={0} aria-label={`${spareParts.length} références en stock`}>
              {spareParts.length}
            </div>
            <p className="text-xs text-muted-foreground">références en stock</p>
          </CardContent>
        </Card>
        
        <Card className="bg-orange-50 dark:bg-orange-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2" tabIndex={0}>
              <AlertTriangle className="h-5 w-5 text-orange-600" aria-hidden="true" />
              Stock faible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="text-2xl font-bold text-orange-600" 
              tabIndex={0}
              aria-label={`${spareParts.filter(part => part.quantite <= part.seuil_alerte && part.quantite > 0).length} pièces sous le seuil d'alerte`}
            >
              {spareParts.filter(part => part.quantite <= part.seuil_alerte && part.quantite > 0).length}
            </div>
            <p className="text-xs text-muted-foreground">pièces sous le seuil d'alerte</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 dark:bg-red-950">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" tabIndex={0}>Rupture de stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="text-2xl font-bold text-red-600" 
              tabIndex={0}
              aria-label={`${spareParts.filter(part => part.quantite === 0).length} pièces en rupture de stock`}
            >
              {spareParts.filter(part => part.quantite === 0).length}
            </div>
            <p className="text-xs text-muted-foreground">pièces en rupture</p>
          </CardContent>
        </Card>
      </div>

      <div 
        className="flex flex-wrap gap-4 mb-6"
        role="toolbar"
        aria-label="Actions sur l'inventaire"
      >
        <Button 
          className="flex items-center gap-2"
          aria-label="Ajouter une nouvelle pièce"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Nouvelle pièce
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          aria-label="Exporter l'inventaire"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Exporter
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          aria-label="Importer des données"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          Importer
        </Button>
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="text"
              placeholder="Rechercher une pièce..."
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-[300px] focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Rechercher une pièce"
            />
          </div>
        </div>
      </div>

      <div 
        className="bg-card rounded-lg shadow-sm overflow-hidden"
        role="region"
        aria-label="Liste des pièces détachées"
      >
        <Table>
          <TableCaption>Inventaire complet des pièces détachées</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Référence</TableHead>
              <TableHead scope="col">Désignation</TableHead>
              <TableHead scope="col">Quantité</TableHead>
              <TableHead scope="col">Localisation</TableHead>
              <TableHead scope="col">Prix unitaire</TableHead>
              <TableHead scope="col">Fournisseur</TableHead>
              <TableHead scope="col">Statut</TableHead>
              <TableHead scope="col">Dernière MAJ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {spareParts.map((part) => (
              <TableRow 
                key={part.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => console.log(`Détails de la pièce ${part.id}`)}
                onKeyDown={(e) => handleKeyPress(e, part.id)}
                tabIndex={0}
                role="button"
                aria-label={`${part.designation}, ${part.quantite} en stock, ${part.statut}`}
              >
                <TableCell className="font-medium">{part.reference}</TableCell>
                <TableCell>
                  <div>
                    <div>{part.designation}</div>
                    <div 
                      className="text-xs text-muted-foreground"
                      aria-label={`Compatible avec : ${part.equipements_compatibles.join(', ')}`}
                    >
                      Compatible: {part.equipements_compatibles.join(', ')}
                    </div>
                  </div>
                </TableCell>
                <TableCell 
                  className={getQuantityStyle(part.quantite, part.seuil_alerte)}
                  aria-label={`Quantité : ${part.quantite} sur un seuil de ${part.seuil_alerte}`}
                >
                  {part.quantite} / {part.seuil_alerte}
                </TableCell>
                <TableCell>{part.localisation}</TableCell>
                <TableCell aria-label={`Prix : ${part.prix_unitaire.toFixed(2)} euros`}>
                  {part.prix_unitaire.toFixed(2)} €
                </TableCell>
                <TableCell>{part.fournisseur}</TableCell>
                <TableCell 
                  className={getStatusStyle(part.statut)}
                  aria-label={`Statut : ${part.statut}`}
                >
                  {part.statut}
                </TableCell>
                <TableCell aria-label={`Dernière mise à jour : ${new Date(part.derniere_mise_a_jour).toLocaleDateString()}`}>
                  {new Date(part.derniere_mise_a_jour).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};
