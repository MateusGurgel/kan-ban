import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export function NavBar() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <Link href={"/"}>
          <h1>Kan-Ban!</h1>
        </Link>

        {router.pathname == "/" && (
          <nav>
            <Link href={"/login"}>
              <p>Log in</p>
            </Link>
            <Link href={"/register"} className="blackLink">
              <p>use Kan-Ban!</p>
            </Link>
          </nav>
        )}
      </section>
    </header>
  );
}
