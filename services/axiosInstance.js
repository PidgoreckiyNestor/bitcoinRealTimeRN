import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.COINMARKETCAP_API,
  // timeout: 30000,
});

export default axiosInstance;

