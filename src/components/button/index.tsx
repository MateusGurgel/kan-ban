import styles from "./styles.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return(
    <button
    onClick={props.onClick}
    disabled={props.disabled}
    className={styles.button}
  >
    {props.children}
  </button>
  )
}
