import { CreateKanBanModal } from "@/components/modals/createKanBanModal";
import { useUserContext } from "@/contexts/UserContext";
import styles from "../styles/Dashboard.module.css";
import AddButton from "@/components/addButton";
import { Button } from "@/components/button";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

interface kanban {
  name: string;
  id: string;
}

export default function Login() {
  useAuth();

  const [showModal, setShowModal] = useState(false);

  const user = useUserContext();
  const { data } = useSWR(() => "/users/" + user.id + "/kanbans");
  
  const [kanbans, setKanbans] = useState<kanban[]>(data);

  function addKanban(Kanban : kanban){
    setKanbans(prev => [...prev, Kanban]);
  }

  useEffect(() => {
    setKanbans(data);
  }, [data]);

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

      <CreateKanBanModal show={showModal} setShow={setShowModal} addKanban={addKanban} />

      <div className={styles.dashboardCard}>
        <h1>my kanbans</h1>

        {kanbans &&
          kanbans.map((kanban) => (
            <Link
              key={kanban.id}
              href={`kanban/${kanban.id}`}
              style={{ width: "100%" }}
            >
              <Button>{kanban.name}</Button>
            </Link>
          ))}
        <AddButton onClick={callModal} />
      </div>
    </div>
  );
}
