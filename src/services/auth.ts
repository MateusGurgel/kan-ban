import { api } from "@/config";

export async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  const result = await api
    .post("/login", data)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return result;
}

export async function logout() {}

export function getToken(token: string) {
  return localStorage.getItem(token);
}

export function setToken(token: string) {
  localStorage.setItem("token", JSON.stringify(token));
}
