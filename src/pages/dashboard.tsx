import AddButton from "@/components/addButton";
import BlackLink from "@/components/blackLink";
import { CreateKanBanModal } from "@/components/modals/createKanBanModal";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";

interface kanban {
  name: string;
  id: string;
}

const kanbansPlaceholder = [
  { name: "Task", id: "123" },
  { name: "Task", id: "1234" },
  { name: "Task", id: "12345s" },
];

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [kanbans, setKanbans] = useState<kanban[]>(kanbansPlaceholder);

  function callModal() {
    setShowModal(true);
  }

  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Dashboard of the kan-ban! aplication"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CreateKanBanModal show={showModal} setShow={setShowModal} />

      <div className={styles.dashboardCard}>
        <h1>my kanbans</h1>

        {kanbans.map((kanban) => (
          <Link key={"kanban"} href={`kanban/${kanban.id}`} style={{width: "100%"}}>
            <button> 
            {kanban.name}
            </button>
          </Link>
        ))}
        <AddButton onClick={callModal} />
      </div>
    </div>
  );
}
