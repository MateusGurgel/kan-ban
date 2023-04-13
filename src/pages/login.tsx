import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { UserService } from "@/services/UserService";
import { useRouter } from "next/router";
interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    setIsLoading(true);
    const response = await UserService.login(data);
    setIsLoading(false);

    if (response.errors) {
      setErrorMessage(response.errors[0].message);
      return;
    }

    UserService.token.set(response.token);
    router.push("/dashboard");
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type={"Email"}
            placeholder={"email@example.com"}
            {...register("email")}
          />
          <input
            type={"Password"}
            placeholder={"password"}
            {...register("password")}
          />

          <p>{errorMessage}</p>

          <input type={"Submit"} disabled={isLoading} defaultValue={"Login"} />
        </form>
      </div>
    </div>
  );
}
