import styles from "./styles.module.css";
import { ReactNode } from "react";

interface AddButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <button 
    onClick={props.onClick} 
    disabled={props.disabled}
    className={styles.addButton}
    >
      {props.children}
    </button>
  );
}
