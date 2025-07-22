import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/faculty/dashboard', label: 'Dashboard' },
  { to: '/faculty/students', label: 'My Students' },
  { to: '/faculty/attendance', label: 'Attendance' },
  { to: '/faculty/grades', label: 'Grades' },
  { to: '/faculty/classes', label: 'Classes' },
];

export default function FacultyDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <div className="bg-green-700 text-white flex items-center px-8 py-3 justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl mr-2">📚</span>
          <span className="font-bold text-lg tracking-wide">Faculty Portal</span>
          <nav className="ml-8 flex gap-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-yellow-300 transition font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button onClick={handleLogout} className="border border-white px-4 py-1 rounded hover:bg-white hover:text-green-700 transition">Logout</button>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Faculty Dashboard</h1>
        <p className="mb-8 text-gray-600">Welcome to the Faculty Portal. Manage your classes and students.</p>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-5xl text-blue-600 mb-2">👥</span>
            <div className="font-bold text-lg mb-1">My Students</div>
            <div className="text-gray-500 text-sm mb-4 text-center">View and manage your assigned students</div>
            <Link to="/faculty/students" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View Students</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-5xl text-green-700 mb-2">✅</span>
            <div className="font-bold text-lg mb-1">Attendance</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Mark and manage student attendance</div>
            <Link to="/faculty/attendance" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">Manage Attendance</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-5xl text-yellow-500 mb-2">📈</span>
            <div className="font-bold text-lg mb-1">Grades</div>
            <div className="text-gray-500 text-sm mb-4 text-center">Assign and update student grades</div>
            <Link to="/faculty/grades" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Manage Grades</Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-5xl text-cyan-600 mb-2">📘</span>
            <div className="font-bold text-lg mb-1">Classes</div>
            <div className="text-gray-500 text-sm mb-4 text-center">View your class schedule and materials</div>
            <Link to="/faculty/classes" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">View Classes</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 