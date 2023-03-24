import { NavBar } from "./navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <NavBar />
        <main>{children}</main>
      </>
    )
  }
  