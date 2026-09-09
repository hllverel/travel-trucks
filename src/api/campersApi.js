import axios from 'axios';

const campersApi = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchCampers = async () => {
  const response = await campersApi.get('/campers');
  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await campersApi.get(`/campers/${id}`);
  return response.data;
};