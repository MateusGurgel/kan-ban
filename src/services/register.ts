import { api } from "./../config";

export async function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const result = await api.post("/user");
  return result.data;
}
