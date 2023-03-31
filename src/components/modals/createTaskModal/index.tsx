import { FormEvent } from "react";
import { Modal } from "../modal";
import styles from "./styles.module.css";

interface CreateTaskModalProps {
  show: boolean;
  setShow: Function;
}

export function CreateTaskModal({ show, setShow }: CreateTaskModalProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Enviado!");
  }

  return (
    <Modal show={show} setShow={setShow}>
      <form onSubmit={handleSubmit} className={styles.createModalform}>

        <label>
          <textarea placeholder={"What is your task?"} required />
        </label>

        <label>
          <input type={"Submit"} defaultValue={"Submit"} />
        </label>

      </form>
    </Modal>
  );
}
