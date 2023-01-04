import { StrapiGlobalSeo, StrapiPageSeo, StrapiResponse } from "@/types/strapi";
import request, { StrapiUrlParamsObject } from "./utils/request";

const getGlobalSeo = async (options: RequestInit) => {
  const response = await request<StrapiResponse<StrapiGlobalSeo>>(
    "/global",
    {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    },
    options
  );
  return response.data;
};

const getPageSeo = async (
  path: string,
  urlParamsOptions: StrapiUrlParamsObject = { populate: { seo: { populate: "*" } } },
  options: RequestInit
) => {
  const response = await request<StrapiResponse<StrapiPageSeo>>(path, urlParamsOptions, options);
  return response.data;
};

export default {
  getGlobalSeo,
  getPageSeo,
};
