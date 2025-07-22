import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/attendance';

export default function StudentAttendance() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Student's userId is stored in localStorage as 'userId'
  const studentId = localStorage.getItem('userId') || '';

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch attendance records');
      const data = await res.json();
      // Filter attendance by studentId
      const myAttendance = data.filter(att => String(att.studentId) === String(studentId));
      setAttendanceList(myAttendance);
    } catch (err) {
      setError('Failed to fetch attendance records');
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Attendance Records</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500 mb-2">{error}</div>
      ) : attendanceList.length === 0 ? (
        <div>No attendance records found.</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((att) => (
              <tr key={att.id}>
                <td className="border px-2 py-1">{att.className}</td>
                <td className="border px-2 py-1">{att.date}</td>
                <td className="border px-2 py-1">{att.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 