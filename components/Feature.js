import React from 'react'
import styles from '../styles/Features.module.css'
import Image from "next/image"

const Feature = ({ title, text, image, alt }) => {

  return (
    <article className={styles.feature}>
      <div className={styles.cardOverlay}/>
      <Image width={400} height={500} src={image} alt={alt} className={styles.featureImage} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
      </div>
    </article>
  )
}

export default Feature