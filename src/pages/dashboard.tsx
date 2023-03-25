import Head from "next/head";
import {BiPlus} from "react-icons/bi"
import styles from "../styles/Dashboard.module.css";

export default function Login() {
  function createKanBan() {}

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

      <div className={styles.dashboardCard}>
        <h1>my kanbans</h1>

        <button>Task</button>
        <button>Task</button>
        <button>Task</button>
        <button className={styles.addButton}><BiPlus/></button>
      </div>
    </div>
  );
}
