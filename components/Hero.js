import Link from "next/link";
import styles from "../styles/Home.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <video autoPlay muted loop className={styles.heroVideo} poster="../images/ships.webp">
        <source src="../images/marine-express-intro.mp4" type="video/mp4" />
      </video>
      {/* <img alt="poster image mobile" className={styles.poster} src="../images/ships.webp" /> */}
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Leading the Way In Business Logistics</h1>
        <p className={styles.heroBody}>
          With more than 30 years experience. You can rely on us to get
          your business where it needs to be.
        </p>
        <Link href={"/services"} className={styles.ctaBtn}>Get started</Link>
      </div>
    </section>
  );
}

export default Hero;
