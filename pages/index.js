import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marine Express Shipping</title>
        <meta name="description" content="Licensed clearing and forwarding agent. We handle logistics to and from Nigeria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        
      </main>

    </div>
  )
}
