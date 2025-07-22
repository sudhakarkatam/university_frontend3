import React, { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const initialForm = {
  fullName: '',
  email: '',
  mobile: '',
  otp: '',
  state: '',
  city: '',
  programme: '',
  course: '',
  captcha: '',
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
    <section id="admissions" className="admissions-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%', maxWidth: 1100 }}>
        <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '2rem', maxWidth: 500, width: '100%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1d4ed8' }}>Enquiry Form</h2>
          {success && <div style={{ color: 'green', marginBottom: 16 }}>Enquiry submitted successfully!</div>}
          {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter Student Full Name *" required style={inputStyle} />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Enter Email Address *" type="email" required style={inputStyle} />
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter Mobile Number *" required style={inputStyle} />
            <div style={{ display: 'flex', gap: 8 }}>
              <select name="state" value={form.state} onChange={handleChange} required style={{ ...inputStyle, flex: 1 }}>
                <option value="">Select State *</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <input name="city" value={form.city} onChange={handleChange} placeholder="Select City *" required style={{ ...inputStyle, flex: 1 }} />
            </div>
            <select name="programme" value={form.programme} onChange={handleChange} required style={inputStyle}>
              <option value="">Select Programme *</option>
              {programmes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select name="course" value={form.course} onChange={handleChange} required style={inputStyle}>
              <option value="">Select Course *</option>
              {courses.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input name="captcha" value={form.captcha} onChange={handleChange} placeholder="Enter Captcha" required style={{ ...inputStyle, flex: 1 }} />
              {/* You can add a captcha image here if needed */}
            </div>
            <div style={{ margin: '12px 0' }}>
              <label style={{ fontSize: 14 }}>
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required style={{ marginRight: 8 }} />
                I agree to receive information regarding my submitted application by signing up on Mahindra University *
              </label>
            </div>
            <button type="submit" style={{ ...inputStyle, background: '#d4af37', color: '#fff', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
        <div style={{ background: '#f9fafb', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '2rem', maxWidth: 500, width: '100%', fontSize: '1rem', color: '#22223b', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h3 style={{ color: '#1d4ed8', fontWeight: 700, marginBottom: '1rem' }}>Have Questions? Contact Mahindra University.</h3>
          <div><b>Email:</b> admissions@mahindrauniversity.edu.in</div>
          <div><b>Phone:</b> 040 67135100</div>
          <div><b>Mobile:</b> +919618592999, +919100938473</div>
          <div style={{ marginTop: '1rem', fontWeight: 600 }}>School of Law</div>
          <div>+917306799802</div>
          <div style={{ marginTop: '1rem', fontWeight: 600 }}>B.Tech Admissions:</div>
          <div><b>South & West:</b> +919618592999, +919100938473</div>
          <div style={{ marginTop: '1rem', fontWeight: 600 }}>BBA/ B.A Admissions:</div>
          <div><b>South & West:</b> 919553433789</div>
          <div><b>North & East:</b> +917318551441, +919811346373</div>
          <div style={{ marginTop: '1rem', fontWeight: 600 }}>Executive Education:</div>
          <div><b>Email:</b> executive.education@mahindrauniversity.edu.in</div>
          <div><b>Mobile:</b> 9059538001</div>
          <div style={{ marginTop: '1rem', fontWeight: 600 }}>MBA:</div>
          <div><b>Email:</b> mba.admissions@mahindrauniversity.edu.in</div>
          <div><b>Mobile:</b> 9963427036 / 9963476964</div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '16px',
};

export default Admissions; 