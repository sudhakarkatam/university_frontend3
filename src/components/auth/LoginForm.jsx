import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      const { token, role, name } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('name', name);
      alert('✅ Login successful!');
      // Redirect based on role
      if (role === 'ADMIN') navigate('/admin/dashboard');
      else if (role === 'HOD') navigate('/hod/dashboard');
      else if (role === 'FACULTY') navigate('/faculty/dashboard');
      else if (role === 'STUDENT') navigate('/student/dashboard');
      else navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert('❌ Login failed. Check email and password.');
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Google login success:', decoded);
    // Optional: Send this credential to your backend for token exchange
    alert(`✅ Welcome, ${decoded.name || decoded.email}`);
    navigate('/dashboard');
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
    alert('❌ Google Sign-In failed.');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />
      </div>
    </div>
  );
}

export default LoginForm;
