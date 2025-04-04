import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => isActive ? "active" : ""}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/equipment" 
            className={({isActive}) => isActive ? "active" : ""}
          >
            Equipment
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/work-orders" 
            className={({isActive}) => isActive ? "active" : ""}
          >
            Work Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/maintenance" 
            className={({isActive}) => isActive ? "active" : ""}
          >
            Maintenance
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;