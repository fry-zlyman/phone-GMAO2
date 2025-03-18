
import React from 'react';
import { motion } from 'framer-motion';
import type { MenuSection } from '@/types/maintenance';

interface SimpleButtonProps {
  item: MenuSection;
  onMenuClick: (label: string) => void;
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({ item, onMenuClick }) => {
  return (
    <motion.button
      onClick={() => onMenuClick(item.label)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${item.color} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer w-full border-2 border-transparent hover:border-primary/20`}
    >
      <div className="flex flex-col items-center space-y-2">
        <item.icon className="w-6 h-6" />
        <span className="text-sm font-medium text-foreground text-center">
          {item.label}
        </span>
      </div>
    </motion.button>
  );
};
