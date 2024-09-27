import axios from "../setup/axios.customize";

export const refreshToken = async () => {
  const URL_API = "/v1/api/user/refresh_token";
  return await axios.post(URL_API);
};
