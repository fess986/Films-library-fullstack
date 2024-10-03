import axios from 'axios';

const baseURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;  // используем по умолчанию localhost с текущим портом на котором запущен сервер

const api = axios.create({
  baseURL,
  timeout: 1000,
});

export default api;