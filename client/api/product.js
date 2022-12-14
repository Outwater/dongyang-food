import request from "./utils/request";

export const getProductList = async (urlParamsOptions = { populate: "*" }, options) => {
  const response = await request("/products", urlParamsOptions, options);
  return response.data;
};

export const getCategoryList = async (urlParamsOptions = { populate: "*" }, options) => {
  const response = await request("/categories", urlParamsOptions, options);
  return response.data;
};

export default {
  getProductList,
  getCategoryList,
};
