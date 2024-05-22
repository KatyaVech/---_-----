import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

export const searchMusic = async (query, searchBy) => {
  try {
    const response = await api.get(`/music?${searchBy}=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching music data');
  }
};

export default api;
