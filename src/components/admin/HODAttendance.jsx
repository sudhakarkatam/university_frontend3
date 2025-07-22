import React, { useEffect, useState } from 'react';

const ATT_API_URL = 'http://localhost:8080/api/attendance';
const STUD_API_URL = 'http://localhost:8080/api/students';

export default function HODAttendance() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Assume HOD's department is stored in localStorage as 'department'
  const hodDepartment = localStorage.getItem('department') || '';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const [attRes, stuRes] = await Promise.all([
        fetch(ATT_API_URL),
        fetch(STUD_API_URL)
      ]);
      if (!attRes.ok || !stuRes.ok) throw new Error('Failed to fetch data');
      const attData = await attRes.json();
      const stuData = await stuRes.json();
      setStudents(stuData);
      // Filter students by department
      const deptStudents = stuData.filter(stu => (stu.department || '').toLowerCase() === hodDepartment.toLowerCase());
      const deptStudentIds = deptStudents.map(stu => stu.id);
      // Filter attendance by those students
      const filteredAtt = attData.filter(att => deptStudentIds.includes(att.studentId));
      setAttendanceList(filteredAtt);
    } catch (err) {
      setError('Failed to fetch attendance records');
    }
    setLoading(false);
  };

  const getStudentName = (id) => {
    const stu = students.find(s => s.id === id);
    return stu ? stu.fullName : id;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Department Attendance Records</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500 mb-2">{error}</div>
      ) : attendanceList.length === 0 ? (
        <div>No attendance records found for your department.</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Student</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((att) => (
              <tr key={att.id}>
                <td className="border px-2 py-1">{att.className}</td>
                <td className="border px-2 py-1">{getStudentName(att.studentId)}</td>
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