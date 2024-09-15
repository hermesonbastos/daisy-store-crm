export const API_URL = "http://localhost:3000";

const token = localStorage.getItem("token");

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

export function CREATE_CATEGORY(body) {
  return {
    url: API_URL + "/categories",
    options: {
      method: "POST",
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
      },
    },
  };
}


export function GET_CATEGORIES() {
  return {
    url: API_URL + "/categories",
    options: {
      method: "GET",
      headers: {
        'Authorization': "Bearer " + token,
      },
    },
  };
}

export function DETAIL_CATEGORY(category_id) {
  return {
    url: API_URL + `/categories/${category_id}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
}

export function UPDATE_CATEGORY(category_id, body) {
  return {
    url: API_URL + `/categories/` + category_id,
    options: {
      method: "PUT",
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
      },
    },
  };
}