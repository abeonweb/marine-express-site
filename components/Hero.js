// import marineExpressVideo from "../images/marine-express-vid-2.mp4";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      {/* <ReactPlayer
        url="../images/marine-express-vid-2.mp4"
        playing={true}
        muted
        loop={true}
        // width="150%"
        // height="100%"
        className={styles.heroVideo}
      /> */}
      <video autoPlay muted loop className={styles.heroVideo}>
        <source src="../images/marine-express-vid-2.mp4" type="video/mp4" />
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
