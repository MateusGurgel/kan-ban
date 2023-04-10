import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";

interface TaskProps {
  id: string;
  text: string;
  index: number;
}

export function Task({ text, index, id }: TaskProps) {

  console.log(text, index, id)
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li className={styles.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >

            <p>{text}</p>
        </li>
      )}
    </Draggable>
  );
}
