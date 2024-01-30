import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css"

function Hero() {
  const videoRef = useRef(null);

  const [videoControl, setVideoControl] = useState(true);

  useEffect(() => {
    videoControl? videoRef.current.play(): videoRef.current.pause();
  
    
  }, [videoControl])
  
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <video ref={videoRef} autoPlay muted loop className={styles.heroVideo} poster="/images/poster.webp">
        <source src="/images/marine-express-intro.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContainer} onClick={()=>setVideoControl(prev => !prev)}>
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
