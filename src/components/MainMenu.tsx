
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { MenuSection } from '@/types/maintenance';
import { menuItems, workOrderItems, equipmentItems, settingsItems, planningItems } from '@/data/menuItems';
import { DropdownMenu } from './menu/DropdownMenu';
import { SimpleButton } from './menu/SimpleButton';
import { ChevronRight, Search, Bell, Menu } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface MainMenuProps {
  onMenuClick: (mainLabel: string) => void;
  onSubItemClick: (mainLabel: string, subLabel: string) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onMenuClick, onSubItemClick }) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  // Définition des couleurs de fond violettes pour les menus
  const purpleBackgrounds = {
    'Ordres de travail': '#9b87f5',
    'Équipements': '#7E69AB',
    'Planification': '#6E59A5', 
    'Paramètres': '#8B5CF6'
  };

  // Fonctionnalités supplémentaires
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Recherche lancée",
        description: `Recherche de "${searchQuery}" en cours...`,
      });
      // Logique de recherche à implémenter
      console.log("Recherche:", searchQuery);
    }
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "3 notifications non lues",
    });
  };

  const handleMobileMenu = () => {
    toast({
      title: "Menu mobile",
      description: "Ouverture du menu mobile",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col px-4 py-2 bg-card shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                background: '#8B5CF6',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <svg
                className="w-8 h-8 text-white relative z-10 drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">GMAO Mobile</span>
              <span className="text-sm text-muted-foreground">Gestion de maintenance</span>
            </div>
          </div>
          
          {/* Actions rapides */}
          <div className="flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-[200px] h-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </button>
            </form>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleNotifications}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <Badge 
                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-white"
              >
                3
              </Badge>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={handleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Card
                className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${purpleBackgrounds[item.label]} 0%, transparent 100%)`
                  }}
                />
                
                <div className="p-4">
                  <div 
                    className="flex items-center gap-4 mb-3"
                    onClick={() => {
                      if (item.label === 'Planification') {
                        onMenuClick(item.label);
                      }
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 overflow-hidden flex-shrink-0"
                      style={{
                        background: purpleBackgrounds[item.label],
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg">{item.label}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.label === 'Ordres de travail' && "Gestion et suivi des interventions"}
                        {item.label === 'Équipements' && "Inventaire et maintenance"}
                        {item.label === 'Planification' && "Calendrier et planification"}
                        {item.label === 'Paramètres' && "Configuration du système"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Fonctionnalités spécifiques selon le menu */}
                  {item.label === 'Ordres de travail' && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Nouveau')}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Nouveau
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'En cours')}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        En cours
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Urgents')}
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Urgents
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Tous')}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Tous
                      </Button>
                    </div>
                  )}
                  
                  {item.label === 'Équipements' && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Inventaire')}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Inventaire
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Maintenance')}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Maintenance
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Réparations')}
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Réparations
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Stock')}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Stock
                      </Button>
                    </div>
                  )}
                  
                  {item.label === 'Planification' && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Planning')}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Planning
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Journalier')}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Journalier
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Hebdomadaire')}
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Hebdo.
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Mensuel')}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Mensuel
                      </Button>
                    </div>
                  )}
                  
                  {item.label === 'Paramètres' && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Utilisateurs')}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Utilisateurs
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Organisation')}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Organisation
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Notifications')}
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Alertes
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs justify-start"
                        onClick={() => onSubItemClick(item.label, 'Système')}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Système
                      </Button>
                    </div>
                  )}
                  
                  {/* Menu complet */}
                  <div className="flex justify-end mt-3">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-xs text-muted-foreground"
                      onClick={() => {
                        if (item.label === 'Ordres de travail' || item.label === 'Équipements' || item.label === 'Paramètres' || item.label === 'Planification') {
                          if (item.label === 'Planification') {
                            onMenuClick(item.label);
                          } else {
                            setOpenSheet(true);
                          }
                        }
                      }}
                    >
                      Menu complet <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                
                {(item.label === 'Ordres de travail' || item.label === 'Équipements' || item.label === 'Paramètres' || item.label === 'Planification') && (
                  <DropdownMenu
                    item={item}
                    onSubItemClick={onSubItemClick}
                    setOpenSheet={setOpenSheet}
                    menuItems={
                      item.label === 'Ordres de travail' 
                        ? workOrderItems 
                        : item.label === 'Équipements'
                          ? equipmentItems
                          : item.label === 'Planification'
                            ? planningItems
                            : settingsItems
                    }
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card p-4 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Tâches récentes</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSubItemClick('Ordres de travail', 'En cours')}
            >
              Voir toutes
            </Button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-3 bg-secondary rounded-lg hover:shadow-md transition-all cursor-pointer"
                onClick={() => console.log(`Ouverture de la tâche ${index + 1}`)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium">Maintenance préventive #{index + 1}</h3>
                    <p className="text-xs text-muted-foreground">Planifié pour aujourd'hui</p>
                  </div>
                </div>
                <Badge variant={index === 0 ? "destructive" : index === 1 ? "default" : "outline"}>
                  {index === 0 ? "Urgent" : index === 1 ? "En cours" : "Planifié"}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
