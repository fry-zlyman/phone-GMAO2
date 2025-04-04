import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import Equipment from './pages/Equipment';
import WorkOrders from './pages/WorkOrders';
import Maintenance from './pages/Maintenance';
import Login from './pages/Login';
import AuthProvider from './contexts/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="work-orders" element={<WorkOrders />} />
            <Route path="maintenance" element={<Maintenance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);