// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <video autoPlay muted loop className={styles.heroVideo} poster="/images/poster.webp">
        <source src="/images/marine-express-intro.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Marine Express Logistics</h1>
        <h2 className={styles.heroSubTitle}>Licensed Customs Agent.</h2>
        <p className={styles.heroBody}>
          Leading the Way In Business Logistics.
          With over <span className={styles.highlight}>30 years experience.</span> You can rely on us.
        </p>
        <Link href={"/contact"} className={styles.ctaBtn}>Get started</Link>
      </div>
    </section>
  );
}

export default Hero;
