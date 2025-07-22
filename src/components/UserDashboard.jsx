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
      {/* Removed welcome and action buttons as requested */}
    </div>
  );
};

export default UserDashboard;
