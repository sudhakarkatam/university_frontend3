import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Research from './components/Research';
import CampusLife from './components/CampusLife';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import HelloTest from './components/HelloTest';
import Downloads from './components/Downloads';
import Programs from './components/programs';
import AboutUs from './components/pages/about-us';
import './index.css';
import UserDashboard from './components/UserDashboard';
import StudentManagement from './components/admin/StudentManagement';
import FacultyManagement from './components/admin/FacultyManagement';
import HODManagement from './components/admin/HODManagement';
import UserManagement from './components/admin/UserManagement';
import AdminDashboard from './components/admin/AdminDashboard';
import HODDashboard from './components/admin/HODDashboard';
import FacultyDashboard from './components/admin/FacultyDashboard';
import StudentDashboard from './components/admin/StudentDashboard';
import HODAttendance from './components/admin/HODAttendance';
import StudentAttendance from './components/admin/StudentAttendance';
import HODSchedule from './components/admin/HODSchedule';
import FacultySchedule from './components/admin/FacultySchedule';
import StudentSchedule from './components/admin/StudentSchedule';
import FacultyStudents from './components/admin/FacultyStudents';
import FacultyGrades from './components/admin/FacultyGrades';
import FacultyClasses from './components/admin/FacultyClasses';
import HODStudents from './components/admin/HODStudents';
import HODFaculty from './components/admin/HODFaculty';
import HODReports from './components/admin/HODReports';
import StudentProfile from './components/admin/StudentProfile';
import StudentMarks from './components/admin/StudentMarks';
import StudentFees from './components/admin/StudentFees';
import DepartmentManagement from './components/admin/DepartmentManagement';
import CourseManagement from './components/admin/CourseManagement';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      {/* <Admissions /> */}
      <UserDashboard />
      <HelloTest />
      <Faculty />
      <Research />
      <CampusLife />
      <Downloads />
      <Contact />
      <Footer />
    </>
  );
}

function FloatingEnquiryButton() {
  return (
    <button
      onClick={() => window.location.href = '/admissions'}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        background: '#d4af37',
        color: '#fff',
        border: 'none',
        borderRadius: '2rem',
        padding: '1rem 2rem',
        fontWeight: 700,
        fontSize: '1.1rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        cursor: 'pointer',
        transition: 'background 0.2s',
      }}
    >
      Enquiry Form
    </button>
  );
}

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/faculty" element={<FacultyManagement />} />
        <Route path="/admin/hods" element={<HODManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/departments" element={<DepartmentManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/hod/dashboard" element={<HODDashboard />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/faculty/students" element={<FacultyStudents />} />
        <Route path="/hod/attendance" element={<HODAttendance />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/hod/schedule" element={<HODSchedule />} />
        <Route path="/faculty/schedule" element={<FacultySchedule />} />
        <Route path="/student/schedule" element={<StudentSchedule />} />
        <Route path="/faculty/grades" element={<FacultyGrades />} />
        <Route path="/faculty/classes" element={<FacultyClasses />} />
        <Route path="/hod/students" element={<HODStudents />} />
        <Route path="/hod/faculty" element={<HODFaculty />} />
        <Route path="/hod/reports" element={<HODReports />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/marks" element={<StudentMarks />} />
        <Route path="/student/fees" element={<StudentFees />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
      <FloatingEnquiryButton />
    </Router>
  );
}

export default App;
