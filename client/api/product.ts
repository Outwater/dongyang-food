import request from "./utils/request";
import { decodeProductList } from "./utils/decode";

export const getProductList = async (urlParamsOptions = { populate: "*" }, options) => {
  const response = await request("/products", urlParamsOptions, options).then(decodeProductList);
  return response;
};

export const getCategoryList = async (urlParamsOptions = { populate: "*" }, options) => {
  const response = await request("/categories", urlParamsOptions, options);
  return response.data;
};

export default {
  getProductList,
  getCategoryList,
};
