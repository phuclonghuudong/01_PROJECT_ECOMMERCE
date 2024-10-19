import axios from "../setup/axios.customize";
export const axiosJWT = axios.create();

// User
export const get_all_product = async (search, current, limit) => {
  let URL_API = {};
  if (search && search.length > 0) {
    URL_API = `/v1/api/product/all?filter=name&filter=${search}&page=${current ? current : 0}&limit=${
      limit ? limit : 8
    }`;
  } else {
    URL_API = `/v1/api/product/all?page=${current ? current : 0}&limit=${limit ? limit : 8}`;
  }
  return await axios.get(URL_API, search, current, limit);
};

// admin
export const admin_getAllProduct = async (data) => {
  const URL_API = "/v1/api/product/get-all";
  return await axios.get(URL_API, data);
};
export const admin_detail_product = async (id) => {
  const URL_API = `/v1/api/product/detail/${id}`;
  return await axios.get(URL_API);
};
export const create = async (data, token) => {
  const URL_API = "/v1/api/product/create";
  return await axios.post(URL_API, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const update = async (id, data, token) => {
  const URL_API = `/v1/api/product/update/${id}`;
  return await axios.put(URL_API, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const deleted = async (id, token) => {
  const URL_API = `/v1/api/product/delete/${id}`;
  return await axios.delete(URL_API, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
