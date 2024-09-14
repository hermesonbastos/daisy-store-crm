export const API_URL = "http://localhost:3000";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJoZXJtZXNvbkBnbWFpbC5jb20iLCJpYXQiOjE3MjU4MTI1OTQsImV4cCI6MTcyNTg5ODk5NH0.G3bW1zS0PZYUyV8PXhH6NgnX48jnOUL7ZEeW64jH-qo";

export function GET_PRODUCTS() {
  return {
    url: API_URL + "/products",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function CREATE_PRODUCT(body) {
  return {
    url: API_URL + "/products",
    options: {
      method: "POST",
      body: body,
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function LOGIN(email, password) {
  return {
    url: API_URL + "/users/login",
    options: {
      method: "POST",
      body: {
        email,
        password
      },
    },
  };
}