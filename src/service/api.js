import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demonstracao-deploy-tfs10.herokuapp.com',
});

export default api;