import React from 'react'
import styles from '../styles/Features.module.css'
import Image from "next/image"

const Feature = ({ title, text, image, alt }) => {

  return (
    <div className={styles.featureContainer}>
      <article className={styles.feature}>
        <div className={styles.imageTextContainer}>
          <div className={styles.imageContainer}>
            <Image width={400} height={500} src={image} alt={alt} className={styles.image} />
          </div>
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