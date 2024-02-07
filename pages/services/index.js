import React from 'react'
import { services } from "../../data"
import styles from "../../styles/Services.module.css"
import Link from "next/link"
import Service from "../../components/Service"

const Services = (props) => {
  return (
    <section className={`top-section ${styles.serviceSection}`}>
      <div className={styles.titleContainer}>
        <h1 className={`${styles.pageTitle}`}>What&apos;s your next project?</h1>
      </div>
      <p className={styles.serviceText}>There are a lot of reasons to choose us for your logistics need. We pride ourselves on our reliability.</p>
      <p className={styles.serviceText}>At Marine Express, we have years of experience delivering quality to our clients. You can be rest assured of our commitment.</p>
      {/* <ul className={styles.list}>
        {props.services.map(service => (
          <li className={styles.listItem} key={service.id}>
            <article className={styles.article}>
              <div className={styles.overlay} />
              <Link className={styles.link} href={`/services/${service.title}`}>
                <Image width={300} className={styles.image} src={service.image} alt="" />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceSubText}>{service.text}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul> */}
      <Service />
      <p className={styles.serviceText}>For a consultation or more information, <Link href={"/contact"} className={styles.contactLink}>contact us</Link> now.</p>
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