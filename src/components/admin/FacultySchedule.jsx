import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/schedule';

export default function FacultySchedule() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const facultyId = localStorage.getItem('userId') || '';
      setSchedules(data.filter(sch => String(sch.facultyId) === String(facultyId)));
    } catch (err) {
      setError('Failed to fetch schedules');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Teaching Schedule</h2>
      {loading ? (
        <div>Loading...</div>
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
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
} 