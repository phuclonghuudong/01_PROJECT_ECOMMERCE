import axios from "../setup/axios.customize";

export const getAllUser = async () => {
  const URL_API = "/v1/api/user/all";
  return await axios.get(URL_API);
};
export const refreshToken = async () => {
  const URL_API = "/v1/api/user/refresh_token";
  return await axios.post(URL_API);
};
