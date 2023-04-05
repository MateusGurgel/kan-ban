import Layout from "@/layouts/layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import styles from "../styles/App.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <div className={inter.className}>
      <Layout>
        <div className={styles.container}>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </Layout>
      <ToastContainer />
    </div>
  );
}
