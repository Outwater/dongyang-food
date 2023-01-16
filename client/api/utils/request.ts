import qs from "qs";

export const getStrapiURL = (path: string = "") => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
};

export interface StrapiUrlParamsObject {
  populate?: string | { [key: string]: any };
  filters?: { [key: string]: any };
  sort?: string | Array<string>;
  fields?: Array<string>;
  pagination?: { [key: string]: any };
}

const request = async <T>(
  path: string,
  urlParamsObject: StrapiUrlParamsObject = {},
  options: RequestInit = {}
): Promise<T> => {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    const { error } = await response.json();
    console.log(error);
    throw new Error(`API 요청 중 에러 발생 ${error.name}(${error.status}) ${error.message}`);
  }
  const data = await response.json();
  return data;
};

export default request;
