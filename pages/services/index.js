import React from 'react'
import { services } from "../../data"
import styles from "../../styles/Services.module.css"
import Link from "next/link"

const Services = (props) => {
  return (
    <section className="top-section">
      <h1 className="title">What is your next project?</h1>
      <ul className={styles.list}>
        {props.services.map(service => (
          <li className={styles.listItem} key={service.id}>
            <Link className={styles.link} href={`/services/${service.title}`}>
              <article className={styles.article}>
                <img className={styles.image} src={service.image} alt="" />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}



export async function getStaticProps() {
  return {
    props: {
      services
    },
  }
}

export default Services