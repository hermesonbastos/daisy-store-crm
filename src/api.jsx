export const API_URL = "http://localhost:3000";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoZXJtZXNvbkBnbWFpbC5jb20iLCJpYXQiOjE3MjYzMzI4MTgsImV4cCI6MTcyNjQxOTIxOH0.nOhXMYz3g0K4ormAeUn-zkrbsATdLCM3iR4snMNujgA";

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

export function DETAIL_PRODUCT(product_id) {
  return {
    url: API_URL + `/products/${product_id}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
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

export function UPDATE_PRODUCT(product_id, body) {
  return {
    url: API_URL + `/products/` + product_id,
    options: {
      method: "PUT",
      body: body,
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function VALIDATE_TOKEN(token) {
  return {
    url: API_URL + "/users/validate",
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
      },
      body: JSON.stringify({ token })
    }
  }
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