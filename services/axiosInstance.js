import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
});

export default axiosInstance;

