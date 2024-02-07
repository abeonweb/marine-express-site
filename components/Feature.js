import React from 'react';
import styles from '../styles/Features.module.css';
import Image from "next/image";
import Link from "next/link";

const Feature = ({ title, text, image, alt }) => {

  return (
    <section className={styles.featureContainer}>
      <article className={styles.featureContentLargeScreen}>
        <p className={styles.featureLargeText}>
          {text}
        </p>
        <Link className={styles.featureContactBtn} href={'/contact'}>Contact us</Link>
      </article>
      <article className={styles.feature}>
        <div className={styles.featureImageContainer}>
          <div className={styles.cardOverlay} />
          <Image width={400} height={500} src={image} alt={alt} className={styles.featureImage} />
        </div>
        <div className={styles.featureTextContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.cardText}>{text}</p>
        </div>
      </article>
    </section>
  )
}

export default Feature