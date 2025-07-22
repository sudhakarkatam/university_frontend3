import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/faculty';

export default function HODFaculty() {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Assume HOD's department is stored in localStorage as 'department'
  const hodDepartment = localStorage.getItem('department') || '';

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch faculty');
      const data = await res.json();
      // Filter faculty by HOD's department
      const deptFaculty = data.filter(fac => (fac.department || '').toLowerCase() === hodDepartment.toLowerCase());
      setFaculty(deptFaculty);
    } catch (err) {
      setError('Failed to fetch faculty');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Department Faculty</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500 mb-2">{error}</div>
      ) : faculty.length === 0 ? (
        <div>No faculty found in your department.</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Department</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((f) => (
              <tr key={f.id}>
                <td className="border px-2 py-1">{f.name}</td>
                <td className="border px-2 py-1">{f.email}</td>
                <td className="border px-2 py-1">{f.department}</td>
                <td className="border px-2 py-1">{f.phone}</td>
                <td className="border px-2 py-1">{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 