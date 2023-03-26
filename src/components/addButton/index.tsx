import styles from "./styles.module.css";
import {BiPlus} from "react-icons/bi"
import { ReactNode } from "react";

interface AddButtonProps {
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
      <BiPlus/>
    </button>
  );
}
