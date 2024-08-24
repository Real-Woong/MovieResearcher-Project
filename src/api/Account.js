import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Get Profile Error:', error);
    throw error.response ? error.response.data : new Error('Network error');
  }
};
