import { api } from "../config";

export class KanbanService {

  static async create(userId: number, name: string) {

    const data = {
      name: name,
    }

    const result = await api
      .post(`users/${userId}/kanban`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }
}
