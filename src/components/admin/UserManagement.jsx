import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/users';

const initialForm = {
  name: '',
  email: '',
  password: '',
  role: '',
  status: '',
};

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
    }
    setLoading(false);
  };

  const openAddModal = () => {
    setForm(initialForm);
    setEditId(null);
    setModalOpen(true);
  };

  const openEditModal = (u) => {
    setForm(u);
    setEditId(u.id);
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
      if (!res.ok) throw new Error('Failed to save user');
      closeModal();
      fetchUsers();
    } catch (err) {
      setError('Failed to save user');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete user');
      fetchUsers();
    } catch (err) {
      setError('Failed to delete user');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded mb-4" onClick={openAddModal}>
        + Add New User
      </button>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Role</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border px-2 py-1">{u.name}</td>
              <td className="border px-2 py-1">{u.email}</td>
              <td className="border px-2 py-1">{u.role}</td>
              <td className="border px-2 py-1">{u.status}</td>
              <td className="border px-2 py-1">
                <button className="bg-yellow-400 px-2 py-1 rounded mr-2" onClick={() => openEditModal(u)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(u.id)}>
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
            <h3 className="text-xl font-semibold mb-4">{editId ? 'Edit User' : 'Add User'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="border px-2 py-1 w-full" required type="email" />
              </div>
              <div className="mb-2">
                <label className="block">Password</label>
                <input name="password" value={form.password} onChange={handleChange} className="border px-2 py-1 w-full" required type="password" />
              </div>
              <div className="mb-2">
                <label className="block">Role</label>
                <select name="role" value={form.role} onChange={handleChange} className="border px-2 py-1 w-full" required>
                  <option value="">Select Role</option>
                  <option value="ADMIN">Admin</option>
                  <option value="HOD">HOD</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block">Status</label>
                <select name="status" value={form.status} onChange={handleChange} className="border px-2 py-1 w-full" required>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" className="mr-2 px-4 py-2" onClick={closeModal}>Cancel</button>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                  {editId ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>
      )}
    </div>
  );
} 