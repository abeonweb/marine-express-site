import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Banner from "../components/Banner"
import Service from "../components/Service"

export default function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <Service />
        <Features />
        <Testimonials />
        <Banner bannerText={"Ready to ship?"} link={"/services"} />
      </main>

    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {

    }
  }
}