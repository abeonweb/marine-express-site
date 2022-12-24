import React from 'react'
import Feature from "../components/Feature"
import styles from "../styles/Features.module.css"
import { features } from "../data"
const Features = () => {
  return (
    <div>
      <h2 className="title">Why you depend on us</h2>
      <div className={styles.features}>
        {features.map((feature, i) => <Feature key={i} {...feature} />)}
      </div>
    </div>
  )
}

export default Features