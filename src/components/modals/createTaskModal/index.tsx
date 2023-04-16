import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent, useState } from "react";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { Modal } from "../modal";
import { taskService } from "@/services/TaskService";

interface CreateTaskModalProps {
  show: boolean;
  kanbanId: string;

  setShow: Function;
  addTask: Function;
}

interface Inputs {
  content: string;
}

export function CreateTaskModal({
  show,
  kanbanId,
  setShow,
  addTask,
}: CreateTaskModalProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    setIsLoading(true);
    const response = await taskService.create(kanbanId, data.content, 0);
    setIsLoading(false);

    response.field = "To do";


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

      return;
    }

    toast.success("task created!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });

    addTask(response)

    setShow(false);
  };

  return (
    <Modal show={show} setShow={setShow}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.createModalform}
      >
        <label>
          <textarea
            placeholder={"What is your task?"}
            {...register("content")}
            required
          />
        </label>

        <label>
          <input type={"Submit"} disabled={isLoading} value={isLoading ? "Loading..." : "Create"} />
        </label>
      </form>
    </Modal>
  );
}
