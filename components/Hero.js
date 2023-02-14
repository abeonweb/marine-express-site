import Link from "next/link";
import styles from "../styles/Home.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <video autoPlay muted loop className={styles.heroVideo} poster="../images/ships.webp">
        <source src="../images/marine-express-intro.mp4" type="video/mp4" />
      </video>
      {/* <Image width={1000} alt="poster image mobile" className={styles.poster} src="../images/ships.webp" /> */}
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Marine Express Logistics</h1>
        <h2 className={styles.heroSubTitle}>Licensed Customs Agent.</h2>
        <p className={styles.heroBody}>
          Leading the Way In Business Logistics.
          With more than 30 years experience. You can rely on us to get
          your business where it needs to be.
        </p>
        <Link href={"/contact"} className={styles.ctaBtn}>Get started</Link>
      </div>
    </section>
  );
}

export default Hero;
