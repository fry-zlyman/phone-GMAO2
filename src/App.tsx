import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import { Maintenance } from './pages/Maintenance';
import { ComplianceManager } from './components/compliance/ComplianceManager';

const App = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== '/') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="app">
      {isAuthenticated && <Navbar />}
      <div className="content-container">
        {isAuthenticated && <Sidebar />}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;