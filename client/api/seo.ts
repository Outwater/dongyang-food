import request from "./utils/request";

const getGlobalSeo = async (options) => {
  const response = await request(
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
  path,
  urlParamsOptions = { populate: { seo: { populate: "*" } } },
  options
) => {
  const response = await request(path, urlParamsOptions, options);
  return response.data;
};

export default {
  getGlobalSeo,
  getPageSeo,
};
