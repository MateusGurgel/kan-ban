import Layout from '@/layouts/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  )
}
