import AddButton from "@/components/addButton";
import Head from "next/head";
import styles from "./../../styles/KanBan.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Task } from "@/components/task";
import { useState } from "react";
import { TaskList } from "@/components/taskList";

const todos = [
  {
    id: "1",
    task: "Abougs"
  },
  {
    id: "2",
    task: "Abougs"
  },
]

const inProgresss = [
  {
    id: "3312",
    task: "Aasbougs"
  },
  {
    id: "25123",
    task: "Aboadsugs"
  },
]

const dones = [
  {
    id: "15324",
    task: "Abou123gs"
  },
  {
    id: "25654",
    task: "Abougs213"
  },
]


export default function Kanban() {
  const isMobile = useIsMobile();

  const [todo, setTodo] = useState(todos)
  const [inProgress, setInProgress] = useState(inProgresss)
  const [done, set] = useState(dones)

  function handleOnDragEnd(result: DropResult) {
    console.log("Drop")
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div
        className={styles.kanban}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <Head>
          <title>Login</title>
          <meta name="description" content="kan-ban! aplication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TaskList tasks={todo} title="To do">
          <AddButton />
        </TaskList>
        
        <TaskList tasks={inProgress} title="In progress" />
        <TaskList tasks={done} title="Done" />

      </div>
    </DragDropContext>
  );
}
