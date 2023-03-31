import styles from "./styles.module.css";
import { HiXMark } from "react-icons/hi2";
import { MouseEvent } from "react";

interface ModalProps {
  children?: React.ReactNode;
  setShow: Function;
  show: boolean;
}

export function Modal({ children, show, setShow }: ModalProps) {

  function closeModal() {
    setShow(false);
  }

  function preventClosing(event: MouseEvent<HTMLDivElement>){
    event.stopPropagation();
  }

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={preventClosing}>
        <HiXMark
          size={30}
          className={styles.closeButton}
          onClick={closeModal}
        ></HiXMark>

        {children}
      </div>
    </div>
  );
}
