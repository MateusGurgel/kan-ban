import { api } from "./../config";

export async function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const data = {
    email: email,
    password: password,
    password_confirmation: confirmPassword,
  };

  const result = await api
    .post("/user", data)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return result;
}
