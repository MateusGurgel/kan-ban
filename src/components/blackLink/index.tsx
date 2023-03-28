import Link from "next/link";
import styles from "./styles.module.css";
import { ReactNode } from "react";

interface BlackLinkProps {
  href: string;
  children: ReactNode;
}

export default function BlackLink({ href, children }: BlackLinkProps) {
  return (
    <Link href={href} className={styles.blackLink}>
      {children}
    </Link>
  );
}
