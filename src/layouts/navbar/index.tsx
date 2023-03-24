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
          <Link href={"/"}>
            <h1>Log in</h1>
          </Link>
          <Link href={"/"}>
            <h1>use Kan-Ban!</h1>
          </Link>
        </nav>
      </section>
    </header>
  );
}
