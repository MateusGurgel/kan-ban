import { api } from "../config";

export class taskService {
  static async create(kanbanId: string, content: string) {
    const data = {
      content: content,
    };

    const result = await api
      .post(`kanbans/${kanbanId}/task`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }

  static async update(kanbanId: number, taskId: number, content?: string, field?: string) {

    const data = {
      content: content,
      field: field,
    };

    const result = await api
      .post(`kanbans/${kanbanId}/tasks/${taskId}`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }
}
