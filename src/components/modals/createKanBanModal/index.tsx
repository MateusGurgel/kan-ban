import { FormEvent } from "react";
import { Modal } from "../modal";

import styles from "./styles.module.css";

interface CreateKanBanModalProps {
  show: boolean;
  setShow: Function;
}

export function CreateKanBanModal({ show, setShow }: CreateKanBanModalProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Enviado!");
  }

  return (
    <Modal show={show} setShow={setShow}>
      <form onSubmit={handleSubmit} className={styles.createModalform}>
        <label>
          <input
            type={"text"}
            placeholder={"What is the name of your project?"}
            required
          />
        </label>

        <label>
          <input type={"Submit"} defaultValue={"Submit"} />
        </label>
      </form>
    </Modal>
  );
}
