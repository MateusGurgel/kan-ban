import { Droppable } from "react-beautiful-dnd";
import { Task } from "../task";
import styles from "./styles.module.css";

interface Task {
  id: string;
  content: string;
  field: "To do" | "In progress" | "Done";
}

interface TaskListProps {
  title: string;
  children?: React.ReactNode;
  tasks: Task[];
}

export function TaskList({ title, children, tasks }: TaskListProps) {
  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>{title}</div>

      {children}

      <Droppable droppableId={title}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task key={task.id.toString()} id={task.id.toString()} text={task.content} index={index} />
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
