import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/schedule';

export default function FacultyClasses() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Faculty's userId is stored in localStorage as 'userId'
  const facultyId = localStorage.getItem('userId') || '';

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch schedules');
      const data = await res.json();
      // Filter schedules by facultyId
      const mySchedules = data.filter(sch => String(sch.facultyId) === String(facultyId));
      setSchedules(mySchedules);
    } catch (err) {
      setError('Failed to fetch schedules');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Class Schedule</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500 mb-2">{error}</div>
      ) : schedules.length === 0 ? (
        <div>No classes scheduled for you.</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Course</th>
              <th className="border px-2 py-1">Time</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((sch) => (
              <tr key={sch.id}>
                <td className="border px-2 py-1">{sch.className}</td>
                <td className="border px-2 py-1">{sch.courseName}</td>
                <td className="border px-2 py-1">{sch.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 