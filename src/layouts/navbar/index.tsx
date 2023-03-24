import Link from "next/link";
import styles from "./styles.module.css";

export function NavBar() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <Link href={"/"}>
          <h1>Kan-Ban!</h1>
        </Link>

        <nav>
          <Link href={"/login"}>
            <p>Log in</p>
          </Link>
          <Link href={"/register"} className={styles.registerButton}>
            <p>use Kan-Ban!</p>
          </Link>
        </nav>
      </section>
    </header>
  );
}
