import Head from "next/head";
import styles from "../styles/Register.module.css";

export default function Register() {

  function handleOnChange() {

  }

  return (
    <div className={styles.registerContainer}>
        <Head>
          <title>Register</title>
          <meta name="description" content="register of the kan-ban! aplication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={styles.registerCard}>

            <h1>Kan-Ban!</h1>

            <form onSubmit={handleOnChange}>
              <input type={"Email"} placeholder={"email@example.com"}/>
              <input type={"Password"} placeholder={"password"}/>
              <input type={"Password"} placeholder={"confirm password"}/>
              <input type={"Submit"} defaultValue={"Submit"}/>
            </form>

        </div>
    </div>
  );
}
