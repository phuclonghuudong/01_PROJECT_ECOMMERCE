import axios from "../setup/axios.customize";
export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const URL_API = "/v1/api/user/login";
  return await axios.post(URL_API, data);
};
export const registerUser = async (data) => {
  const URL_API = "/v1/api/user/register";
  return await axios.post(URL_API, data);
};
export const logoutUser = async () => {
  const URL_API = "/v1/api/user/logout";
  return await axios.get(URL_API);
};
export const refreshToken = async () => {
  const URL_API = "/v1/api/user/refresh-token";
  return await axios.post(URL_API);
};
export const getDetailUser = async (id, token) => {
  const URL_API = "/v1/api/user/detail/" + id;
  return await axiosJWT.get(URL_API, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getAllUser = async () => {
  const URL_API = "/v1/api/user/all";
  return await axios.get(URL_API);
};
