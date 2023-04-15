import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent, useState } from "react";
import { Modal } from "../modal";

import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { KanbanService } from "@/services/KanbanService";
import { useUserContext } from "@/contexts/UserContext";

interface CreateKanBanModalProps {
  show: boolean;
  setShow: Function;
  addKanban: Function;
}

interface Inputs {
  name: string;
}

export function CreateKanBanModal({ show, setShow, addKanban }: CreateKanBanModalProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const user = useUserContext();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    if (!user.id) {
      return;
    }

    setIsLoading(true);
    const response = await KanbanService.create(user.id, data.name);
    setIsLoading(false);

    if (response.errors) {
      toast.error("An error has occurred, try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });

      return
    }

    toast.success("Kanban created!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });

    const kanban = {
      id: response.id,
      name: response.name
    }

    addKanban(kanban)
    setShow(false);
  };

  return (
    <Modal show={show} setShow={setShow}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.createModalform}
      >
        <label>
          <input
            type={"text"}
            placeholder={"What is the name of your project?"}
            required
            {...register("name")}
          />
        </label>

        <label>
          <input type={"Submit"} disabled={isLoading} defaultValue={isLoading ? "Loading..." : "Create"} />
        </label>
      </form>
    </Modal>
  );
}
