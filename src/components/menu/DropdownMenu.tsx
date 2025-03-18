
import React from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronRight } from 'lucide-react';
import type { MenuSection, MenuItem } from '@/types/maintenance';
import { PartsMenu } from './PartsMenu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface DropdownMenuProps {
  item: MenuSection;
  onSubItemClick: (mainLabel: string, subLabel: string) => void;
  setOpenSheet: (open: boolean) => void;
  menuItems: MenuItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  item, 
  onSubItemClick, 
  setOpenSheet,
  menuItems 
}) => {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = menuItems.filter(menuItem => 
    menuItem.label.toLowerCase().includes(filterText.toLowerCase()) || 
    (menuItem.description && menuItem.description.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          className="hidden" // Hidden because we're using other elements as triggers
        >
          <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </motion.button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl">{item.label}</SheetTitle>
        </SheetHeader>
        
        <div className="mt-4">
          <Input
            type="search"
            placeholder="Rechercher dans les options..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="mb-4"
          />
          <Separator className="mb-4" />
        </div>
        
        <div className="mt-2 space-y-2 max-h-[75vh] overflow-y-auto pr-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((menuItem, menuIndex) => (
              <React.Fragment key={menuItem.label}>
                {menuItem.label === 'Pièces' ? (
                  <PartsMenu
                    menuItem={menuItem}
                    onSubItemClick={onSubItemClick}
                    setOpenSheet={setOpenSheet}
                    menuIndex={menuIndex}
                  />
                ) : (
                  <motion.button
                    onClick={() => {
                      onSubItemClick(item.label, menuItem.label);
                      setOpenSheet(false);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * (menuIndex + 1) }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <menuItem.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <div className="text-left flex-1">
                      <div className="text-sm font-medium group-hover:text-primary transition-colors">{menuItem.label}</div>
                      {menuItem.description && (
                        <div className="text-xs text-muted-foreground">{menuItem.description}</div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                )}
              </React.Fragment>
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
