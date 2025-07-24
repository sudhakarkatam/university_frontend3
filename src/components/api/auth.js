import axios from 'axios';

const API_BASE = 'http://localhost:8080/**'; // Use local backend for development

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
