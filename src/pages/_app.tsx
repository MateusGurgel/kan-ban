import Layout from "@/layouts/layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import styles from "../styles/App.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <div className={styles.container}>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </Layout>
    </div>
  );
}
