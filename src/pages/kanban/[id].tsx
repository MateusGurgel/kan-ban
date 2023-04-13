import useIsMobile from "@/hooks/useIsMobile";
import AddButton from "@/components/addButton";
import styles from "./../../styles/KanBan.module.css";
import useSWR from "swr";
import Head from "next/head";
import {
  DragDropContext,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd";

import { TaskList } from "@/components/taskList";
import { useRouter } from "next/router";
import { CreateTaskModal } from "@/components/modals/createTaskModal";
import { Task, taskService } from "@/services/TaskService";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

function GetColumn(column: string) {
  switch (column) {
    case "To do":
      return "To do";
    case "In progress":
      return "In progress";
    case "Done":
      return "Done";
    default:
      console.log("Invalid Destination");
      return undefined;
  }
}

export default function Kanban() {
  useAuth();
  const isMobile = useIsMobile();
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { id: kanbanId } = router.query;

  const { data } = useSWR(
    () => "/kanbans/" + kanbanId + "/tasks/"
  );
  const [tasks, setTasks] = useState<Task[]>(data);

  const kanban = {
    "To do": useState<Task[]>([]),
    "In progress": useState<Task[]>([]),
    "Done": useState<Task[]>([]),
  };

  function sortTask(task: Task) {

    switch (task.field) {
      case "To do":
        kanban["To do"][1]((prev) => [...prev, task]);
        break;
      case "In progress":
        kanban["In progress"][1]((prev) => [...prev, task]);
        break;
      case "Done":
        kanban["Done"][1]((prev) => [...prev, task]);
        break;
      default:
        console.log(task.field)
        console.log("Invalid Destination");
    }
  }

  useEffect(() => {
    setTasks(data);
  }, [data]);

  useEffect(() => {
    if (!tasks) {
      return
    }

    kanban["Done"][1]([]);
    kanban["In progress"][1]([]);
    kanban["To do"][1]([]);

    tasks.sort((a, b) => a.index - b.index);
    tasks.map((task) => sortTask(task));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  function addTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  if (!kanbanId || typeof kanbanId !== "string") {
    return null;
  }

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const destination = result.destination.droppableId;
    const source = result.source.droppableId;

    const destinationColumnName = GetColumn(destination);
    const sourceColumnName = GetColumn(source);

    if (!destinationColumnName || !sourceColumnName) {
      return;
    }

    const [destinationColumn, setDestinationColumn] =
      kanban[destinationColumnName];
    const [sourceColumn, setSourceColumn] = kanban[sourceColumnName];

    let destinationArray = Array.from(destinationColumn);
    let sourceArray = Array.from(sourceColumn);

    if (destinationColumnName === sourceColumnName) {
      destinationArray = sourceArray;
    }

    const task = sourceArray.splice(result.source.index, 1);

    destinationArray.splice(result.destination.index, 0, ...task);

    if (!kanbanId || typeof kanbanId !== "string") {
      return null;
    }

    taskService.updateTaskList(
      kanbanId,
      destinationArray,
      destinationColumnName
    );

    setDestinationColumn(destinationArray);
    setSourceColumn(sourceArray);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <CreateTaskModal
        setShow={setShowModal}
        show={showModal}
        kanbanId={kanbanId}
        addTask={addTask}
      />

      <div
        className={styles.kanban}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="kan-ban! aplication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TaskList tasks={kanban["To do"][0]} title="To do">
          <AddButton onClick={() => setShowModal(true)} />
        </TaskList>

        <TaskList tasks={kanban["In progress"][0]} title="In progress" />
        <TaskList tasks={kanban["Done"][0]} title="Done" />
      </div>
    </DragDropContext>
  );
}

export async function getServerSideProps() {
  resetServerContext();

  return {
    props: {},
  };
}
