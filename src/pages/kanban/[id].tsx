import AddButton from "@/components/addButton";
import Head from "next/head";
import styles from "./../../styles/KanBan.module.css";

export default function kanban() {
  return (
    <div className={styles.kanban}>
      <Head>
        <title>Login</title>
        <meta name="description" content="login of the kan-ban! aplication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={styles.list}>
        <div className={styles.listHeader}>To do</div>
        <AddButton/>

     </div>

     <div className={styles.list}>
        <div className={styles.listHeader}>In progress</div>
     </div>

     <div className={styles.list}>
        <div className={styles.listHeader}>Done</div>
     </div>

    </div>
  );
}
