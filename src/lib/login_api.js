import "dotenv/config";

export async function login(loginData) {
  let formBody = [];
  for (let property in loginData) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(loginData[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");

  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/login`, {
    method: "POST",
    body: formBody,
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not login");
  }

  return null;
}

export async function register(registerData) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/signup`, {
    method: "POST",
    body: JSON.stringify(registerData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not register");
  }

  return null;
}

export async function logout() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/revoke`, {
    method: "POST",
    withCredentials: true,
    credentials: "include",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not logout!");
  }

  return null;
}
