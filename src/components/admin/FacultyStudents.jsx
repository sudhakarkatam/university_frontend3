import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/students';

export default function FacultyStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch students');
      const data = await res.json();
      const facultyId = localStorage.getItem('userId') || '';
      // Filter students assigned to this faculty
      const myStudents = data.filter(stu => String(stu.facultyId) === String(facultyId));
      setStudents(myStudents);
    } catch (err) {
      setError('Failed to fetch students');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Students</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500 mb-2">{error}</div>
      ) : students.length === 0 ? (
        <div>No students assigned to you.</div>
      ) : (
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 