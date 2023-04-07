import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import { UserProvider } from "@/contexts/UserContext";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import styles from "../styles/App.module.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Layout from "@/layouts/layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <div className={styles.container}>
          <UserProvider>
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </UserProvider>
        </div>
      </Layout>
      <ToastContainer />
    </div>
  );
}
