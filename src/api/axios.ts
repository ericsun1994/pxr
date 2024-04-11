import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3030', // Server URL 입력
  baseURL: 'http://10.0.2.2:3030',
  withCredentials: true,
});

export default axiosInstance;
