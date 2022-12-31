import React from 'react'
import { services } from "../../data"
import styles from "../../styles/Services.module.css"
import Link from "next/link"
import Image from "next/image"

const Services = () => {
  return (
    <section className="top-section">
      <h1 className="title">What is your next project?</h1>
      <ul className={styles.list}>
        {services.map(service => (
          <li className={styles.listItem} key={service.title}>
            <Link className={styles.link} href={`/services/${service.title}`}>
              <article className={styles.article}>
                <Image className={styles.image} src={service.image} alt="" />
                <h3 className={styles.subtitle}>{service.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services