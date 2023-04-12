import Link from "next/link";
import styles from "./styles.module.css";
import { ReactNode } from "react";

interface BlackLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function BlackLink({ href, children, onClick }: BlackLinkProps) {
  return (
    <Link href={href} className={styles.blackLink} onClick={onClick}>
      {children}
    </Link>
  );
}
