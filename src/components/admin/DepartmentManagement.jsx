import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/departments';

const initialForm = { name: '', code: '', description: '' };

export default function DepartmentManagement() {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { fetchDepartments(); }, []);

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setDepartments(data);
    } catch (err) {
      setError('Failed to fetch departments');
    }
    setLoading(false);
  };

  const openAddModal = () => {
    setForm(initialForm);
    setEditId(null);
    setModalOpen(true);
  };

  const openEditModal = (dept) => {
    setForm(dept);
    setEditId(dept.id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm(initialForm);
    setEditId(null);
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const method = editId ? 'PUT' : 'POST';
      const url = editId ? `${API_URL}/${editId}` : API_URL;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to save department');
      closeModal();
      fetchDepartments();
    } catch (err) {
      setError('Failed to save department');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this department?')) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete department');
      fetchDepartments();
    } catch (err) {
      setError('Failed to delete department');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Department Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={openAddModal}>
        + Add New Department
      </button>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Code</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td className="border px-2 py-1">{dept.name}</td>
              <td className="border px-2 py-1">{dept.code}</td>
              <td className="border px-2 py-1">{dept.description}</td>
              <td className="border px-2 py-1">
                <button className="bg-yellow-400 px-2 py-1 rounded mr-2" onClick={() => openEditModal(dept)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(dept.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal for Add/Edit */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">{editId ? 'Edit Department' : 'Add Department'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block">Name</label>
                <input name="name" value={form.name || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Code</label>
                <input name="code" value={form.code || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block">Description</label>
                <textarea name="description" value={form.description || ''} onChange={handleChange} className="border px-2 py-1 w-full" />
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" className="px-4 py-2" onClick={closeModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{editId ? 'Update' : 'Add'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 