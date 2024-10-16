import axios from "../setup/axios.customize";

export const admin_getAllProduct = async (data) => {
  const URL_API = "/v1/api/product/all";
  return await axios.get(URL_API, data);
};
export const admin_detail_product = async (id) => {
  const URL_API = `/v1/api/product/detail/${id}`;
  return await axios.get(URL_API, id);
};
export const create = async (data) => {
  const URL_API = "/v1/api/product/create";
  return await axios.post(URL_API, data);
};
export const update = async (id, data) => {
  const URL_API = `/v1/api/product/update/${id}`;
  return await axios.put(URL_API, data);
};
export const deleted = async (id, data) => {
  const URL_API = `/v1/api/product/delete/${id}`;
  return await axios.post(URL_API, data);
};
