import { api } from '../api';
interface registerProps {
  email: string;
  password: string;
  confirmPassword: string;
}

interface loginProps {
  email: string;
  password: string;
}

export class UserService {
  static async register({ email, password, confirmPassword }: registerProps) {
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

  static async logout() {
    UserService.token.remove();

    await api
      .post("/logout")
      .then((response) => response.data)
      .catch((error) => error.response.data);
  }

  static async login({ email, password }: loginProps) {
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

  static async getId() {
    const result = await api
      .get("/getId")
      .then((response) => response.data)
      .catch((error) => error.response.data);

    return result;
  }

  static token = class {
    static get() {
      return localStorage.getItem("token");
    }

    static set(token: string) {
      localStorage.setItem("token", token);
    }

    static remove() {
      localStorage.removeItem("token");
    }

    static addInAuthorizationHeader() {
      const authHeader = `bearer ${this.get()}`;
      api.defaults.headers.common["Authorization"] = authHeader;
    }
  };
}
