import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const navLinks = [
  { to: '/admin/dashboard', label: 'Dashboard' },
  { to: '/admin/students', label: 'Students' },
  { to: '/admin/faculty', label: 'Faculty' },
  { to: '/admin/hods', label: 'HODs' },
  { to: '/admin/users', label: 'All Users' },
  { to: '/admin/departments', label: 'Departments' },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({ students: 0, faculty: 0, hods: 0, users: 0, departments: 0, courses: 0 });
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
    fetchActivities();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats/summary');
      const data = await res.json();
      setStats({
        students: data.students || 0,
        faculty: data.faculty || 0,
        hods: data.hods || 0,
        users: data.users || 0,
        departments: data.departments || 0,
        courses: data.courses || 0,
      });
    } catch (err) {
      setError('Failed to fetch stats');
    }
  };

  const fetchActivities = async () => {
    try {
      const res = await fetch('/api/activity/recent?limit=10');
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
      <div className="bg-black text-white flex items-center px-8 py-3 justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl mr-2">🏛️</span>
          <span className="font-bold text-lg tracking-wide">Admin Portal</span>
          <nav className="ml-8 flex gap-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-yellow-400 transition font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button onClick={handleLogout} className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">Logout</button>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="mb-8 text-gray-600">Welcome to the Administrative Portal. Manage the entire university system from here.</p>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-blue-600 mb-2">👥</span>
            <div className="font-bold text-lg mb-1">Students</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Manage student records, admissions, and profiles</div>
            <Link to="/admin/students" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Manage Students</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-green-600 mb-2">🧑‍🏫</span>
            <div className="font-bold text-lg mb-1">Faculty</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Manage faculty members and their assignments</div>
            <Link to="/admin/faculty" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Manage Faculty</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-cyan-600 mb-2">👤</span>
            <div className="font-bold text-lg mb-1">HODs</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Manage Heads of Department and their roles</div>
            <Link to="/admin/hods" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">Manage HODs</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-4xl text-yellow-500 mb-2">🧑‍💼</span>
            <div className="font-bold text-lg mb-1">All Users</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Manage all users, status, and passwords</div>
            <Link to="/admin/users" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Manage Users</Link>
          </div>
        </div>
        {/* Quick Stats & Recent Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Quick Statistics */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Statistics</h3>
            <table className="min-w-full border">
              <tbody>
                <tr><td className="border px-2 py-1">Total Students</td><td className="border px-2 py-1">{stats.students}</td></tr>
                <tr><td className="border px-2 py-1">Total Faculty</td><td className="border px-2 py-1">{stats.faculty}</td></tr>
                <tr><td className="border px-2 py-1">HODs</td><td className="border px-2 py-1">{stats.hods}</td></tr>
                <tr><td className="border px-2 py-1">Departments</td><td className="border px-2 py-1">{stats.departments}</td></tr>
                <tr><td className="border px-2 py-1">Courses</td><td className="border px-2 py-1">{stats.courses}</td></tr>
                <tr><td className="border px-2 py-1">All Users</td><td className="border px-2 py-1">{stats.users}</td></tr>
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