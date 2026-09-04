import axios from 'axios';
import type { AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}api/v1`,
  withCredentials: true,
  timeout: 5000,
});
