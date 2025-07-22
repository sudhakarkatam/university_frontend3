import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/hod/dashboard', label: 'Dashboard' },
  { to: '/hod/students', label: 'Department Students' },
  { to: '/hod/faculty', label: 'Department Faculty' },
  { to: '/hod/reports', label: 'Reports' },
  { to: '/hod/attendance', label: 'Attendance' },
  { to: '/hod/schedule', label: 'Schedule' },
];

export default function HODDashboard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/activity/recent?limit=6', {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      const data = await res.json();
      setActivities(data);
    } catch (err) {
      setError('Failed to fetch activities');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-cyan-600 text-white flex items-center px-8 py-3 justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl mr-2">🏢</span>
          <span className="font-bold text-lg tracking-wide">HOD Portal</span>
          <nav className="ml-8 flex gap-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-yellow-300 transition font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button onClick={handleLogout} className="border border-white px-4 py-1 rounded hover:bg-white hover:text-cyan-600 transition">Logout</button>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">HOD Dashboard</h1>
        <p className="mb-8 text-gray-600">Welcome to the Head of Department Portal. Manage your department effectively.</p>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-blue-600 mb-2">👥</span>
            <div className="font-bold text-lg mb-1">Department Students</div>
            <div className="text-gray-500 text-sm mb-4 text-center">View all students in your department</div>
            <Link to="/hod/students" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Students</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-green-700 mb-2">🧑‍🏫</span>
            <div className="font-bold text-lg mb-1">Department Faculty</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Manage faculty members in your department</div>
            <Link to="/hod/faculty" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">Manage Faculty</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-yellow-500 mb-2">📑</span>
            <div className="font-bold text-lg mb-1">Reports</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Generate department reports and analytics</div>
            <Link to="/hod/reports" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">View Reports</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-cyan-600 mb-2">📅</span>
            <div className="font-bold text-lg mb-1">Attendance</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Monitor department attendance</div>
            <Link to="/hod/attendance" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">View Attendance</Link>
          </div>
        </div>
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          {loading ? (
            <div>Loading...</div>
          ) : activities.length === 0 ? (
            <div>No recent activities.</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {activities.map((act) => (
                <li key={act.id} className="py-2">
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">{act.user}</span> {act.action}
                  </div>
                  <div className="text-xs text-gray-500">{new Date(act.timestamp).toLocaleString()}</div>
                  {act.details && <div className="text-xs text-gray-600 mt-1">{act.details}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 