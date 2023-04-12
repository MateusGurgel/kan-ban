import { useUserContext } from "@/contexts/UserContext";
import BlackLink from "@/components/blackLink";
import styles from "./styles.module.css";
import Link from "next/link";
import { UserService } from "@/services/UserService";

export function NavBar() {
  const user = useUserContext();

  function handleLogout() {
    if (!user.setId) {
      return;
    }

    UserService.logout();

    user.setId(null);
  }

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <Link href={"/"}>
          <h1>Kan-Ban!</h1>
        </Link>

        {!user.id ? (
          <nav>
            <Link href={"/login"}>
              <p>Log in</p>
            </Link>
            <BlackLink href={"/register"}>
              <p>use Kan-Ban!</p>
            </BlackLink>
          </nav>
        ) : (
          <nav>
            <Link href={"/"} onClick={handleLogout}>
              <p>Log out</p>
            </Link>
            <BlackLink href={"/dashboard"}>
              <p>DashBoard</p>
            </BlackLink>
          </nav>
        )}
      </section>
    </header>
  );
}
