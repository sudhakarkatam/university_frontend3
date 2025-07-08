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
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import HelloTest from './components/HelloTest';
import Programs from './components/programs';
import DepartmentDetail from './components/pages/departmentdetail';
import UserDashboard from './components/UserDashboard';
import './index.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <UserDashboard />
      <HelloTest />
      <Faculty />
      <Research />
      <CampusLife />
      <News />
      <Contact />
      <Footer />
    </>
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
        <Route path="/departments/:id" element={<DepartmentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
