import React from 'react'
import { services } from "../../data"
import styles from "../../styles/Services.module.css"
import Link from "next/link"

const Services = (props) => {
  return (
    <section className={`top-section ${styles.serviceSection}`}>
      <h1 className="title">What is your next project?</h1>
      <ul className={styles.list}>
        {props.services.map(service => (
          <li className={styles.listItem} key={service.id}>
            <article className={styles.article}>
              <Link className={styles.link} href={`/services/${service.title}`}>
                <img className={styles.image} src={service.image} alt="" />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </Link>
            </article>
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