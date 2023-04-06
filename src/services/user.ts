import { api } from "./../config";

export class UserService {
    static async register(email: string, password: string, confirmPassword: string) {

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

  static async login(email: string, password: string) {
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

  static token = class {
    static get() {
      return localStorage.getItem("token");
    }

    static set(token: string) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  };
}
