import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps {
  id: string;
  index: number;
  content: string;
}

export function Task({ content, index, id }: TaskProps) {

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li className={styles.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            <p>{content}</p>
        </li>
      )}
    </Draggable>
  );
}
