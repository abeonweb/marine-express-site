import styles from "../styles/Home.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <video autoPlay muted loop className={styles.heroVideo}>
        <source src="../images/marine-express-vid.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Leading the Way In Business Logistics</h1>
        <p className={styles.heroBody}>
          Over 30 years experience in the industry. You can rely on us to get
          your merchandise where it needs to be.
        </p>
      </div>
    </section>
  );
}

export default Hero;
