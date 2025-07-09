import axios from 'axios';

const API_BASE = const API_BASE = 'https://university-backend-production-750d.up.railway.app/api/auth'; // Adjust if backend port changes

// Register new user
export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE}/register`, userData);
};

// Login user
export const loginUser = async (email, password) => {
  return await axios.post(`${API_BASE}/login`, {
    email,
    password,
  });
};
