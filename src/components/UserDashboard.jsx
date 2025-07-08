import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // if you use JWT or auth token
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h1>👋 Welcome to Your Dashboard</h1>
      <p>You are logged in successfully.</p>

      <div className="dashboard-actions">
        <button onClick={() => navigate('/')}>🏠 Go to Home</button>
        <button onClick={handleLogout}>🚪 Logout</button>
      </div>
    </div>
  );
};

export default UserDashboard;
