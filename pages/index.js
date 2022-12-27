import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Banner from "../components/Banner"
import Service from "../components/Service"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marine Express Nigeria Limited</title>
        <meta name="description" content="Licensed clearing and forwarding agent. We handle logistics to and from Nigeria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Features />      
        <Service />
        <Testimonials />
        <Banner bannerText={"Don't know where to start?"} link={"/services"}/>
      </main>

    </div>
  )
}
