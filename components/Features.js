import React from 'react'
import Feature from "../components/Feature"
import styles from "../styles/Features.module.css"
import { features } from "../data"

const Features = () => {
  return (
    <div className="top-section">
      <h2 className="title">Why depend on us</h2>
      <p className={styles.text}>Todays world is fast moving, technology driven, global. You need a partner you can rely on. Getting the most out of your network is possible when you have the best team working for you.</p>
      <p className={styles.text}>At Marine Express you have that team. Dedicated service that will get the work done.</p>
      <div className={styles.features}>
        {features.map((feature, i) => <Feature key={i} {...feature} />)}
      </div>
    </div>
  )
}

export default Features