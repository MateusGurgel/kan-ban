import AddButton from "@/components/addButton";
import Head from "next/head";
import styles from "./../../styles/KanBan.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { Task } from "@/components/task";

export default function Kanban() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className={styles.kanban} style={{ flexDirection: isMobile ? "column" : "row" }}>
        <Head>
          <title>Login</title>
          <meta name="description" content="kan-ban! aplication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.list}>
          <div className={styles.listHeader}>To do</div>
          <AddButton />
        </div>

        <div className={styles.list}>
          <div className={styles.listHeader}>In progress</div>
        </div>

        <div className={styles.list}>
          <div className={styles.listHeader}>Done</div>
        </div>
      </div>
    </>
  );
}
