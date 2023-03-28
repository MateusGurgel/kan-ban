import BlackLink from "@/components/blackLink";
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
            <BlackLink href={"/register"}>
              <p>use Kan-Ban!</p>
            </BlackLink>
          </nav>
        )}
      </section>
    </header>
  );
}
