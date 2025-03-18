
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import type { MenuItem } from '@/types/maintenance';
import { partsSubItems } from '@/data/menuItems';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface PartsMenuProps {
  menuItem: MenuItem;
  onSubItemClick: (mainLabel: string, subLabel: string) => void;
  setOpenSheet: (open: boolean) => void;
  menuIndex: number;
}

export const PartsMenu: React.FC<PartsMenuProps> = ({ 
  menuItem, 
  onSubItemClick, 
  setOpenSheet, 
  menuIndex 
}) => {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = partsSubItems.filter(item => 
    item.label.toLowerCase().includes(filterText.toLowerCase()) || 
    (item.description && item.description.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 * menuIndex }}
          className="w-full flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <menuItem.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
            <div className="text-left">
              <div className="text-sm font-medium group-hover:text-primary transition-colors">{menuItem.label}</div>
              <div className="text-xs text-muted-foreground">{menuItem.description}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl">Gestion des pièces détachées</SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          <Input
            type="search"
            placeholder="Rechercher une pièce..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="mb-4"
          />
          <Separator className="mb-4" />
        </div>
        
        <div className="mt-2 space-y-2 max-h-[75vh] overflow-y-auto pr-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((partsItem, partsIndex) => (
              <motion.button
                key={partsItem.label}
                onClick={() => {
                  onSubItemClick('Pièces', partsItem.label);
                  setOpenSheet(false);
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (partsIndex + 1) }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
              >
                <partsItem.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                <div className="text-left flex-1">
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{partsItem.label}</div>
                  <div className="text-xs text-muted-foreground">{partsItem.description}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              Aucun résultat pour "{filterText}"
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
