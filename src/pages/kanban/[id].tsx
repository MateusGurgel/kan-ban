import AddButton from "@/components/addButton";
import Head from "next/head";
import styles from "./../../styles/KanBan.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { DragDropContext, DropResult, resetServerContext } from "react-beautiful-dnd";
import { useState } from "react";
import { TaskList } from "@/components/taskList";
import { CreateTaskModal } from "@/components/modals/createTaskModal";

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

type task = {
  id: string;
  task: string;
};

export default function Kanban() {
  const isMobile = useIsMobile();
  const [showModal, setShowModal] = useState(false)

  const kanban = {
    "To do": useState<task[]>([
      { id: "33412", task: "Task1" },
      { id: "33122", task: "Task2" },
    ]),
    "In progress": useState<task[]>([
      { id: "3341", task: "Task3" },
      { id: "331722", task: "Task4" },
    ]),
    "Done": useState<task[]>([
      { id: "334129", task: "Task5" },
      { id: "3312210", task: "Task6" },
    ]),
  };

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

    //remove task from the src array
    const task = sourceArray.splice(result.source.index, 1);

    //add on the dst array
    destinationArray.splice(result.destination.index, 0, ...task);

    //save the arrays
    setDestinationColumn(destinationArray);
    setSourceColumn(sourceArray);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>

      <CreateTaskModal setShow={setShowModal} show={showModal}/>

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
          <AddButton  onClick={() => setShowModal(true)}/>
        </TaskList>

        <TaskList tasks={kanban["In progress"][0]} title="In progress" />
        <TaskList tasks={kanban["Done"][0]} title="Done" />
      </div>
    </DragDropContext>
  );
}

export async function getServerSideProps() {
  
  resetServerContext()
  
  return {
    props: {
    },
  }
}