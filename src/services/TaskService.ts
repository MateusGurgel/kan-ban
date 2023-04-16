import { api } from '../api';

export type Task = {
  id: string;
  index: number;
  content: string;
  field: "To do" | "In progress" | "Done";
  kanban_id: string;
}

export class taskService {
  static async create(kanbanId: string, content: string, index: number) {
    const data = {
      index: index,
      content: content,
    };

    const result = await api
      .post(`kanbans/${kanbanId}/task`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }

  static async update(
    kanbanId: string,
    taskId: string,
    index?: number,
    field?: string,
    content?: string
  ) {
    const data = {
      index: index,
      field: field,
      content: content,
    };

    const result = await api
      .patch(`kanbans/${kanbanId}/tasks/${taskId}`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }

  static async updateTaskList(kanbanId: string, taskList: Task[], field : Task["field"]) {
    
    if (!taskList) {
      return;
    }

    taskList.map((task, index) => {
      task.index = index
      task.field = field
    })

    const data = {
      tasks: taskList,
    }

    const result = await api
      .patch(`kanbans/${kanbanId}/tasks`, data)
      .then((response) => response.data)
      .catch((error) => error.response.data);
    return result;
  }
}
