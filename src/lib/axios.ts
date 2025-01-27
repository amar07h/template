import axios from 'axios';
const BASE_URL = "https://amar07h.github.io/osmoz/";
export default axios.create({
  baseURL: BASE_URL,
  headers:{
      'Accept-Language':"fr"
  }
});
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
