import React from 'react'
import styles from '../styles/Features.module.css'

const Feature = ({ title, text, image, alt }) => {

  return (
    <div className={styles.featureContainer}>
      <article className={styles.feature}>
        <div className={styles.imageTextContainer}>
          <img src={image} alt={alt} className={styles.image} />
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.captionText}>{text}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Feature