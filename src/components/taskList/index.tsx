import { Droppable } from "react-beautiful-dnd";
import { Task } from "../task";
import styles from "./styles.module.css";

interface Task {
  task: string;
  id: string;
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
              <Task key={task.id} id={task.id} text={task.task} index={index} />
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
