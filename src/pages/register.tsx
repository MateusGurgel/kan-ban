import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/Register.module.css";
import axios from 'axios';
import { register } from "@/services/register";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const result = await register(email, password, confirmPassword)

    console.log(result)

    
    setIsLoading(false);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  return (
    <div className={styles.registerContainer}>
      <Head>
        <title>Register</title>
        <meta
          name="description"
          content="register of the kan-ban! aplication"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.registerCard}>
        <h1>Kan-Ban!</h1>

        <form onSubmit={handleOnSubmit}>
          <input
            type={"Email"}
            placeholder={"email@example.com"}
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type={"Password"}
            placeholder={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type={"Password"}
            placeholder={"confirm password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <input type={"Submit"} defaultValue={"Submit"} disabled={isLoading} />
        </form>
      </div>
    </div>
  );
}
