import React, { useEffect, useState } from 'react';

interface DashboardData {
  pendingWorkOrders: number;
  equipmentInMaintenance: number;
  totalEquipment: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        pendingWorkOrders: 12,
        equipmentInMaintenance: 5,
        totalEquipment: 48,
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Pending Work Orders</h3>
          <div className="card-value">{data?.pendingWorkOrders}</div>
        </div>
        
        <div className="summary-card">
          <h3>Equipment in Maintenance</h3>
          <div className="card-value">{data?.equipmentInMaintenance}</div>
        </div>
        
        <div className="summary-card">
          <h3>Total Equipment</h3>
          <div className="card-value">{data?.totalEquipment}</div>
        </div>
      </div>
      
      <div className="dashboard-charts">
        <div className="chart-container">
          <h2>Equipment Status</h2>
          <div className="chart-placeholder">
            [Equipment Status Chart]
          </div>
        </div>
      </div>
      
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul className="activity-list">
          <li className="activity-item">
            <div className="activity-time">Today, 10:30 AM</div>
            <div className="activity-description">
              Preventive maintenance completed on Machine #1234
            </div>
          </li>
          <li className="activity-item">
            <div className="activity-time">Yesterday, 2:15 PM</div>
            <div className="activity-description">
              New work order created for Equipment #5678
            </div>
          </li>
          <li className="activity-item">
            <div className="activity-time">Yesterday, 11:00 AM</div>
            <div className="activity-description">
              Parts ordered for scheduled maintenance
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;