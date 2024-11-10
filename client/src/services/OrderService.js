import axios from "../setup/axios.customize";

// User
export const create = async (data, token) => {
  const URL_API = "/v1/api/order/create";
  return await axios.post(URL_API, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getOrderByUser = async (token, id) => {
  const URL_API = `/v1/api/order/get-order-by-user/${id}`;
  return await axios.get(URL_API, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
