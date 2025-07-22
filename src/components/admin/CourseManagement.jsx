import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/courses';
const DEPT_API_URL = 'http://localhost:8080/api/departments';

const initialForm = { name: '', code: '', description: '', departmentId: '' };

export default function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
    fetchDepartments();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      setError('Failed to fetch courses');
    }
    setLoading(false);
  };

  const fetchDepartments = async () => {
    try {
      const res = await fetch(DEPT_API_URL);
      const data = await res.json();
      setDepartments(data);
    } catch (err) {
      setDepartments([]);
    }
  };

  const openAddModal = () => {
    setForm(initialForm);
    setEditId(null);
    setModalOpen(true);
  };

  const openEditModal = (course) => {
    setForm(course);
    setEditId(course.id);
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
      if (!res.ok) throw new Error('Failed to save course');
      closeModal();
      fetchCourses();
    } catch (err) {
      setError('Failed to save course');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete course');
      fetchCourses();
    } catch (err) {
      setError('Failed to delete course');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Course Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={openAddModal}>
        + Add New Course
      </button>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Code</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Department</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border px-2 py-1">{course.name}</td>
              <td className="border px-2 py-1">{course.code}</td>
              <td className="border px-2 py-1">{course.description}</td>
              <td className="border px-2 py-1">{departments.find(d => d.id === course.departmentId)?.name || ''}</td>
              <td className="border px-2 py-1">
                <button className="bg-yellow-400 px-2 py-1 rounded mr-2" onClick={() => openEditModal(course)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(course.id)}>
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
            <h3 className="text-xl font-semibold mb-4">{editId ? 'Edit Course' : 'Add Course'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block">Name</label>
                <input name="name" value={form.name || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Code</label>
                <input name="code" value={form.code || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Department</label>
                <select name="departmentId" value={form.departmentId || ''} onChange={handleChange} className="border px-2 py-1 w-full" required>
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
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