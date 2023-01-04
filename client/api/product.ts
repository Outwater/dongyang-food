import { CategoryAttribute, ProductAttribute, StrapiListResponse } from "@/types";
import request, { StrapiUrlParamsObject } from "./utils/request";
import { decodeProductList } from "./utils/decode";

const getProductList = async (
  urlParamsOptions: StrapiUrlParamsObject = { populate: "*" },
  options: RequestInit = {}
) => {
  const response = await request("/products", urlParamsOptions, options).then(decodeProductList);
  return response;
};

const getCategoryList = async (
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

const createProduct = async (
  data: ProductAttribute,
  token: string,
  urlParamsOptions: StrapiUrlParamsObject = { populate: "*" },
  options: RequestInit = {}
) => {
  await request("/products", urlParamsOptions, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ data }),
    ...options,
  });
};

export default {
  getProductList,
  getCategoryList,
  createProduct,
};
