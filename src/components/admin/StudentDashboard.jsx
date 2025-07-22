import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/student/dashboard', label: 'Dashboard' },
  { to: '/student/profile', label: 'My Profile' },
  { to: '/student/marks', label: 'My Marks' },
  { to: '/student/fees', label: 'Fee Payment' },
  { to: '/student/attendance', label: 'Attendance' },
  { to: '/student/schedule', label: 'Schedule' },
];

export default function StudentDashboard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await fetch('/api/activity/recent?limit=6');
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
      <div className="bg-blue-700 text-white flex items-center px-8 py-3 justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl mr-2">🎓</span>
          <span className="font-bold text-lg tracking-wide">Student Portal</span>
          <nav className="ml-8 flex gap-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-yellow-300 transition font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button onClick={handleLogout} className="border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-700 transition">Logout</button>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
        <p className="mb-8 text-gray-600">Welcome back! Here's your academic overview.</p>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-blue-600 mb-2">👤</span>
            <div className="font-bold text-lg mb-1">My Profile</div>
            <div className="text-gray-500 text-sm mb-4 text-center">View and update your personal information</div>
            <Link to="/student/profile" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Profile</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-green-700 mb-2">📈</span>
            <div className="font-bold text-lg mb-1">My Marks</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Check your academic performance and grades</div>
            <Link to="/student/marks" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">View Marks</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-yellow-500 mb-2">💳</span>
            <div className="font-bold text-lg mb-1">Fee Payment</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Pay fees and view payment history</div>
            <Link to="/student/fees" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Pay Fees</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-cyan-600 mb-2">📅</span>
            <div className="font-bold text-lg mb-1">Attendance</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Check your attendance records</div>
            <Link to="/student/attendance" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">View Attendance</Link>
          </div>
        </div>
        {/* Academic Summary & Recent Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Academic Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Academic Summary</h3>
            <table className="min-w-full border">
              <tbody>
                <tr><td className="border px-2 py-1">Current Semester</td><td className="border px-2 py-1">Semester 4</td></tr>
                <tr><td className="border px-2 py-1">CGPA</td><td className="border px-2 py-1">3.75</td></tr>
                <tr><td className="border px-2 py-1">Attendance</td><td className="border px-2 py-1">85%</td></tr>
                <tr><td className="border px-2 py-1">Courses Enrolled</td><td className="border px-2 py-1">6</td></tr>
              </tbody>
            </table>
          </div>
          {/* Recent Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
            {activities.length === 0 ? (
              <div>No recent activities.</div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {activities.map((act) => (
                  <li key={act.id} className="py-2">
                    <div className="text-sm text-gray-700"><b>{act.user}</b> {act.action}</div>
                    <div className="text-xs text-gray-500">{act.details}</div>
                    <div className="text-xs text-gray-400">{new Date(act.timestamp).toLocaleString()}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 