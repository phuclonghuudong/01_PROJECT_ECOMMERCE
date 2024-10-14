import axios from "axios";
import NProgress, { trickle } from "nprogress";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 5000,
});
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
instance.defaults.withCredentials = true;

instance.interceptors.response.use(
  function (config) {
    NProgress.start();

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    NProgress.done();

    return response?.data ? response.data : response;
  },
  function (error) {
    if (error?.response?.data) return error?.response?.data;

    return Promise.reject(error);
  }
);

export default instance;
