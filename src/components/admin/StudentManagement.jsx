import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/students';

const initialForm = {
  rollNumber: '',
  fullName: '',
  email: '',
  password: '',
  department: '',
  className: '',
  semester: '',
  phone: '',
  status: '',
  facultyId: '', // Add facultyId to the form
};

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [facultyList, setFacultyList] = useState([]); // Faculty dropdown
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchFaculty();
    fetchDepartments();
  }, []);

  const fetchFaculty = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/faculty');
      const data = await res.json();
      setFacultyList(data);
    } catch (err) {
      setFacultyList([]);
    }
  };

  const fetchDepartments = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/departments');
      const data = await res.json();
      setDepartmentList(data);
    } catch (err) {
      setDepartmentList([]);
    }
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      setError('Failed to fetch students');
    }
    setLoading(false);
  };

  const openAddModal = () => {
    setForm(initialForm);
    setEditId(null);
    setModalOpen(true);
  };

  const openEditModal = (student) => {
    setForm({ ...initialForm, ...student, facultyId: student.facultyId || '' });
    setEditId(student.id);
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
      const token = localStorage.getItem('token');
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to save student');
      closeModal();
      fetchStudents();
    } catch (err) {
      setError('Failed to save student');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      if (!res.ok) throw new Error('Failed to delete student');
      fetchStudents();
    } catch (err) {
      setError('Failed to delete student');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={openAddModal}>
        + Add New Student
      </button>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Roll Number</th>
            <th className="border px-2 py-1">Full Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Department</th>
            <th className="border px-2 py-1">Class</th>
            <th className="border px-2 py-1">Semester</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border px-2 py-1">{student.rollNumber}</td>
              <td className="border px-2 py-1">{student.fullName}</td>
              <td className="border px-2 py-1">{student.email}</td>
              <td className="border px-2 py-1">{student.department}</td>
              <td className="border px-2 py-1">{student.className}</td>
              <td className="border px-2 py-1">{student.semester}</td>
              <td className="border px-2 py-1">{student.phone}</td>
              <td className="border px-2 py-1">{student.status}</td>
              <td className="border px-2 py-1">
                <button className="bg-yellow-400 px-2 py-1 rounded mr-2" onClick={() => openEditModal(student)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(student.id)}>
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
            <h3 className="text-xl font-semibold mb-4">{editId ? 'Edit Student' : 'Add Student'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block">Roll Number</label>
                <input name="rollNumber" value={form.rollNumber || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Full Name</label>
                <input name="fullName" value={form.fullName || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Email</label>
                <input name="email" value={form.email || ''} onChange={handleChange} className="border px-2 py-1 w-full" required type="email" />
              </div>
              <div className="mb-2">
                <label className="block">Password</label>
                <input name="password" type="password" value={form.password || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Department</label>
                <select
                  name="department"
                  value={form.department || ''}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full"
                  required
                >
                  <option value="">Select Department</option>
                  {departmentList.map(dept => (
                    <option key={dept.id} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label className="block">Faculty</label>
                <select
                  name="facultyId"
                  value={form.facultyId || ''}
                  onChange={handleChange}
                  className="border px-2 py-1 w-full"
                  required
                >
                  <option value="">Select Faculty</option>
                  {facultyList.map(fac => (
                    <option key={fac.id} value={fac.id}>
                      {fac.name} ({fac.department})
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label className="block">Class</label>
                <input name="className" value={form.className || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Semester</label>
                <input name="semester" value={form.semester || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-2">
                <label className="block">Phone</label>
                <input name="phone" value={form.phone || ''} onChange={handleChange} className="border px-2 py-1 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block">Status</label>
                <select name="status" value={form.status || ''} onChange={handleChange} className="border px-2 py-1 w-full" required>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" className="mr-2 px-4 py-2" onClick={closeModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
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