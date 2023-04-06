import styles from "../styles/Register.module.css";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserService } from "@/services/user";
import { useRouter } from "next/router";
import { useState } from "react";
interface Inputs{
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password, confirmPassword } = data;

    setErrorMessage("");

    setIsLoading(true);
    const response = await UserService.register(
      email,
      password,
      confirmPassword
    );
    setIsLoading(false);

    if (response.errors) {
      setErrorMessage(response.errors[0].message);
      return;
    }

    UserService.token.set(response.token.token);
    router.push("/dashboard");
  };

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
          <input
            type={"Password"}
            placeholder={"confirm password"}
            {...register("confirmPassword")}
          />

          <p>{errorMessage}</p>

          <input type={"Submit"} defaultValue={"Submit"} disabled={isLoading} />
        </form>
      </div>
    </div>
  );
}
