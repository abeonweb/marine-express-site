import React from 'react'
import Feature from "../components/Feature"
import styles from "../styles/Features.module.css"
import { features } from "../data"
const Features = () => {
  return (
    <div className={styles.features}>
          {features.map((feature, i) => <Feature key={i} {...feature} />)}
        </div>
  )
}

export default Features