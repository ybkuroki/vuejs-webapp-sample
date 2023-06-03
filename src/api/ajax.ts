import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_APP_API_ROOT,
  withCredentials: true,
  timeout: 5000
})