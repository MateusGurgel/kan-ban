import { Draggable } from "react-beautiful-dnd";
import styles from "./styles.module.css";

interface TaskProps {
  text: string;
  index: number;
  id: string;
}

export function Task({ text, index, id }: TaskProps) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => ( 
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className={styles.task}>
            <p>{text}</p>
          </div>
        </li>
      )}
    </Draggable>
  );
}
