import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps {
  id: string;
  text: string;
  index: number;
}

export function Task({ text, index, id }: TaskProps) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.task}>
            <p>{text}</p>
          </div>
        </li>
      )}
    </Draggable>
  );
}
