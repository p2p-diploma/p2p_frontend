import "dotenv/config";

export async function login(loginData) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
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
