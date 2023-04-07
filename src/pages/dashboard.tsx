import { CreateKanBanModal } from "@/components/modals/createKanBanModal";
import { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import {useUserContext } from "@/contexts/UserContext";
import AddButton from "@/components/addButton";
import useAuth from "@/hooks/useAuth";
import useSWR from 'swr'
import fetcher from "@/fetcher";
import Head from "next/head";
import Link from "next/link";
import { apiEndpoint } from "@/config";

interface kanban {
  name: string;
  id: string;
}


export default function Login() {
  
  useAuth()
  
  const [showModal, setShowModal] = useState(false);
  const [kanbans, setKanbans] = useState<kanban[]>([]);

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
          <Link key={kanban.id} href={`kanban/${kanban.id}`} style={{width: "100%"}}>
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
