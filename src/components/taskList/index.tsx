import { Droppable } from "react-beautiful-dnd";
import { Task as TaskComponent } from "../task";
import styles from "./styles.module.css";
import { Task } from "@/services/TaskService";

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
              <TaskComponent
                key={task.id}
                id={task.id.toString()}
                content={task.content}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      
    </div>
  );
}
