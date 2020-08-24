import axios from 'axios';

const api = axios.create({
  baseURL: '/engine-rest',
});

export default api;
