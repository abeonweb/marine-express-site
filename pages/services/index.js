import React from 'react'
import { services } from "../../data"
import styles from "../../styles/Services.module.css"
import Link from "next/link"

const Services = (props) => {
  return (
    <section className={`top-section ${styles.serviceSection}`}>
      <h1 className="title">What is your next project?</h1>
      <p className={styles.serviceText}>There are a lot of reasons to choose us for your logistics need. We pride ourselves on our reliability.</p>
      <p className={styles.serviceText}>At Marine Express, we have years of experience delivering quality to our clients. You can be rest assured of our commitment.</p>
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
      <p className={styles.serviceText}>For an in depth consultation or information, <Link href={"/contact"} className={styles.contactLink}>contact us</Link> now.</p>
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