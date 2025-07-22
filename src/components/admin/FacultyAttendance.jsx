import React, { useEffect, useState } from 'react';

const ATT_API_URL = 'http://localhost:8080/api/attendance';
const STUD_API_URL = 'http://localhost:8080/api/students';

export default function FacultyAttendance() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ studentId: '', className: '', date: '', status: 'Present' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Faculty's userId is stored in localStorage as 'userId'
  const facultyId = localStorage.getItem('userId') || '';

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
      // Filter students assigned to this faculty
      const myStudents = stuData.filter(stu => String(stu.facultyId) === String(facultyId));
      setStudents(myStudents);
      // Filter attendance for these students
      const myStudentIds = myStudents.map(s => s.id);
      const filteredAtt = attData.filter(att => myStudentIds.includes(att.studentId));
      setAttendanceList(filteredAtt);
    } catch (err) {
      setError('Failed to fetch attendance records');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch(ATT_API_URL + `?user=Faculty`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, facultyId }),
      });
      if (!res.ok) throw new Error('Failed to mark attendance');
      setSuccess('Attendance marked successfully!');
      setForm({ studentId: '', className: '', date: '', status: 'Present' });
      fetchData();
    } catch (err) {
      setError('Failed to mark attendance');
    }
    setLoading(false);
  };

  const getStudentName = (id) => {
    const stu = students.find(s => s.id === Number(id));
    return stu ? stu.fullName : id;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Students' Attendance</h2>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-4 items-end">
        <div>
          <label className="block">Student</label>
          <select name="studentId" value={form.studentId} onChange={handleChange} className="border px-2 py-1 w-full" required>
            <option value="">Select Student</option>
            {students.map(stu => (
              <option key={stu.id} value={stu.id}>{stu.fullName}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Class</label>
          <input name="className" value={form.className} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <div>
          <label className="block">Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} className="border px-2 py-1 w-full" required />
        </div>
        <div>
          <label className="block">Status</label>
          <select name="status" value={form.status} onChange={handleChange} className="border px-2 py-1 w-full">
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Mark Attendance</button>
      </form>
      {success && <div className="text-green-600 mb-2">{success}</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <h3 className="text-lg font-semibold mb-2">Attendance Records</h3>
      {loading ? (
        <div>Loading...</div>
      ) : attendanceList.length === 0 ? (
        <div>No attendance records found.</div>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Student</th>
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((att) => (
              <tr key={att.id}>
                <td className="border px-2 py-1">{getStudentName(att.studentId)}</td>
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