import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/auth'; // Adjust if backend port changes

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
