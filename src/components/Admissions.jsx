import React, { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';
import '../css/Admissions.css';

const initialForm = {
  fullName: '',
  email: '',
  mobile: '',
  state: '',
  city: '',
  programme: '',
  course: '',
  consent: false,
};

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other'
];

const programmes = [
  'B.Tech', 'BBA', 'BA', 'MBA', 'School of Law', 'Executive Education'
];
const courses = [
  'Computer Science', 'AI & ML', 'Electronics', 'Mechanical', 'Civil', 'Business Administration', 'Law', 'Finance', 'Marketing'
];

const Admissions = () => {
  const [form, setForm] = useState({ ...initialForm, programme: '', course: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('http://localhost:8080/api/admissions/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to register');
      setSuccess(true);
      setForm({ ...initialForm, programme: '', course: '' });
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <section id="admissions" className="admissions-section">
        <div className="admissions-bg">
          <div className="admissions-bg-overlay"></div>
          <div className="admissions-container admissions-row">
            <div className="admissions-form-container">
              <h2 className="admissions-form-title">Enquiry Form</h2>
              {success && <div className="admissions-success-message">Enquiry submitted successfully!</div>}
              {error && <div className="admissions-error-message">{error}</div>}
              <form onSubmit={handleSubmit}>
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter Student Full Name *" required className="admissions-input" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Enter Email Address *" type="email" required className="admissions-input" />
                <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter Mobile Number *" required className="admissions-input" />
                <div className="admissions-input-group">
                  <select name="state" value={form.state} onChange={handleChange} required className="admissions-input">
                    <option value="">Select State *</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input name="city" value={form.city} onChange={handleChange} placeholder="Select City *" required className="admissions-input" />
                </div>
                <select name="programme" value={form.programme} onChange={handleChange} required className="admissions-input">
                  <option value="">Select Programme *</option>
                  {programmes.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <select name="course" value={form.course} onChange={handleChange} required className="admissions-input">
                  <option value="">Select Course *</option>
                  {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="admissions-consent-label">
                  <label>
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                    I agree to receive information regarding my submitted application by signing up on Mahindra University *
                  </label>
                </div>
                <button type="submit" className="admissions-submit-button" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Instructions Section */}
      <section className="admissions-extra-section">
        <div className="admissions-extra-content">
          <h2 className="admissions-extra-title">INSTRUCTIONS</h2>
          <img src="/instruction-img.png" alt="Instructions Icon" className="admissions-extra-img" />
          <ul className="admissions-extra-list">
            <li>The online application is for admission to programmes offered in Malla Reddy University.</li>
            <li>Application Form Fee is Non-Refundable.</li>
            <li>Email ID submitted at the time of registration will be used for all correspondences until enrolment is completed. Change in Email ID will NOT be permitted under any circumstances.</li>
            <li><b>Malla Reddy University Query Management System:</b><br />Applicants are strongly advised to use Malla Reddy University Query Management System (Malla Reddy University-QMS), rather than emailing, to get a quick response.
              <ol>
                <li>Register and verify your email ID</li>
                <li>Click on <b>[Any Queries? Ask US]</b> in your dashboard</li>
                <li>Select query category and submit your query</li>
              </ol>
            </li>
          </ul>
        </div>
        {/* Eligibility Criteria Section */}
        <div className="admissions-eligibility-section">
          <h2 className="admissions-eligibility-title">Eligibility Criteria</h2>
          <p>The programs offered at Malla Reddy University (Engineering/ Agricultural Sciences/ Allied Health Sciences/ Management & Commerce/ Sciences/ Arts) have different eligibility criteria. Listed below are the criteria as per the programs:</p>
          <b>For Undergraduate Courses:</b>
          <ul className="admissions-eligibility-list">
            <li>Candidates must have passed their 10+2 (or) equivalent examination in relevant subjects.</li>
            <li>Candidates must have scored at least 60% marks (B Tech.) or 50% marks (Non B Tech.) in the qualifying examination at 10+2 / Intermediate level and admission through the State Common Entrance Test/ MRUCET conducted by the University/ Qualifying Exam on merit.</li>
            <li>Candidates applying for engineering and other graduate courses should have completed 17 years as on 30th June of the year of admission.</li>
          </ul>
          <b>For Post Graduate Courses:</b>
          <ul className="admissions-eligibility-list">
            <li>Candidates must have passed 4 years duration Bachelor’s Degree from any recognized Institute or University for Engineering Streams.</li>
            <li>Candidates must have passed 3 years duration Bachelor’s Degree from any recognized Institute or University for any discipline to management.</li>
            <li>Candidates must have scored at least 60% marks in the qualifying examination at under graduation level and admission through GATE/ State Common Entrance/ MRUCET conducted by the University/Qualifying Exam on merit.</li>
          </ul>
          <b>PHD :</b>
          <ul className="admissions-eligibility-list">
            <li>Candidates must have passed Masters Program or equivalent qualification in the relevant field.</li>
            <li>Admission through NET/GATE/ Equivalent National Level Common Entrance Test/State Common Entrance Test (if any)/ Malla Reddy University Entrance Examination/ Merit & Interview conducted by the University</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Admissions; 