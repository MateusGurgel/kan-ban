import Head from "next/head";
import styles from "../styles/Login.module.css";

export default function Login() {

  function handleOnChange() {

  }

  return (
    <div className={styles.loginContainer}>
        <Head>
          <title>Login</title>
          <meta name="description" content="login of the kan-ban! aplication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={styles.LoginCard}>

            <h1>Kan-Ban!</h1>

            <form onSubmit={handleOnChange}>
              <input type={"Email"} placeholder={"email@example.com"}/>
              <input type={"Password"} placeholder={"password"}/>
              <input type={"Submit"} defaultValue={"Submit"}/>
            </form>


        </div>
    </div>
  );
}
