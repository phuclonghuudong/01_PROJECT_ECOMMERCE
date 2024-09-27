import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
instance.defaults.withCredentials = true;

instance.interceptors.response.use(
  function (response) {
    return response?.data ? response.data : response;
  },
  function (error) {
    if (error?.response?.data) return error?.response?.data;

    return Promise.reject(error);
  }
);

export default instance;
