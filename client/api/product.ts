import { CategoryAttribute, StrapiListResponse } from "@/types";
import request, { StrapiUrlParamsObject } from "./utils/request";
import { decodeProductList } from "./utils/decode";

export const getProductList = async (
  urlParamsOptions: StrapiUrlParamsObject = { populate: "*" },
  options: RequestInit = {}
) => {
  const response = await request("/products", urlParamsOptions, options).then(decodeProductList);
  return response;
};

export const getCategoryList = async (
  urlParamsOptions: StrapiUrlParamsObject = { populate: "*" },
  options: RequestInit = {}
) => {
  const response = await request<StrapiListResponse<CategoryAttribute>>(
    "/categories",
    urlParamsOptions,
    options
  );
  return response.data;
};

export default {
  getProductList,
  getCategoryList,
};
