import request from "./utils/request";

const login = (id, password) => {
  return request("/auth/local", null, {
    method: "POST",
    body: JSON.stringify({
      identifier: id,
      password,
    }),
  });
};

const checkJwt = (token) => {
  return request(
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
