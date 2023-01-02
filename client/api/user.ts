import { LoginResponse, UserCheckResponse } from "client/types";
import request from "./utils/request";

const login = (id: string, password: string) => {
  return request<LoginResponse>("/auth/local", null, {
    method: "POST",
    body: JSON.stringify({
      identifier: id,
      password,
    }),
  });
};

const checkJwt = (token: string) => {
  return request<UserCheckResponse>(
    "/users/me",
    { populate: "*" },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  login,
  checkJwt,
};
