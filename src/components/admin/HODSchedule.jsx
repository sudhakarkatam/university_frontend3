import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/schedule';

const initialForm = {
  facultyId: '',
  className: '',
  courseName: '',
  time: '',
};

export default function HODSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setSchedules(data);
    } catch (err) {
      setError('Failed to fetch schedules');
    }
    setLoading(false);
  };

  const openAdd = () => {
    setForm(initialForm);
    setEditId(null);
  };

  const openEdit = (sch) => {
    setForm(sch);
    setEditId(sch.id);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const user = localStorage.getItem('name') || 'HOD';
      const method = editId ? 'PUT' : 'POST';
      const url = editId ? `${API_URL}/${editId}?user=${encodeURIComponent(user)}` : `${API_URL}?user=${encodeURIComponent(user)}`;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to save schedule');
      setSuccess('Schedule saved!');
      setForm(initialForm);
      setEditId(null);
      fetchSchedules();
    } catch (err) {
      setError('Failed to save schedule');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this schedule?')) return;
    setLoading(true);
    try {
      const user = localStorage.getItem('name') || 'HOD';
      const res = await fetch(`${API_URL}/${id}?user=${encodeURIComponent(user)}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete schedule');
      fetchSchedules();
    } catch (err) {
      setError('Failed to delete schedule');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Department Schedule</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 mb-8 max-w-lg">
        <div className="mb-2">
          <label className="block">Faculty ID</label>
          <input name="facultyId" value={form.facultyId} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <div className="mb-2">
          <label className="block">Class Name</label>
          <input name="className" value={form.className} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <div className="mb-2">
          <label className="block">Course Name</label>
          <input name="courseName" value={form.courseName} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block">Time</label>
          <input name="time" value={form.time} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{editId ? 'Update' : 'Add'} Schedule</button>
        {success && <div className="text-green-600 mt-2">{success}</div>}
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
      <h2 className="text-xl font-semibold mb-4">All Schedules</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Faculty ID</th>
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Course</th>
              <th className="border px-2 py-1">Time</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((sch) => (
              <tr key={sch.id}>
                <td className="border px-2 py-1">{sch.facultyId}</td>
                <td className="border px-2 py-1">{sch.className}</td>
                <td className="border px-2 py-1">{sch.courseName}</td>
                <td className="border px-2 py-1">{sch.time}</td>
                <td className="border px-2 py-1">
                  <button className="bg-yellow-400 px-2 py-1 rounded mr-2" onClick={() => openEdit(sch)}>Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(sch.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 