import React from 'react'
import Form from "../../components/Form"
import Banner from "../../components/Banner"
import styles from "../../styles/Contact.module.css"
import { days } from "../../data"

const Contact = ({ days }) => {
  return (
    <div className={styles.contact}>
      <h1 className="title">Contact</h1>
      <p className={styles.text}>Logistics done right grows business and increases profits. We can help.</p>
      <section className={`top-section ${styles.contact}`}>
        <div className={styles.workHoursContainer}>
          <div className={styles.imageContainer}>
            <img src="../images/headset-man.png" alt="" className={styles.image} />
          </div>
          <div className={styles.workHours}>
            <div className={styles.workHoursTextContainer}>
              <h3 className={styles.subtitle}>Open Hours</h3>
              <ul className={styles.list}>
                {days.map(day => <li key={day} className={styles.listItem}>{day}: 9:00AM - 6:00PM</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Banner bannerText="Want to know what we do?" link="/services" />
      <section className={`top-section ${styles.contact}`}>
        <div className={styles.contactFormContainer}>
          <h3 className={styles.subtitle}>Send us a message</h3>
          <div className={styles.imageContainer}>
            <img src="../images/woman-phone.webp" alt="" className={styles.image} />
            <div className={styles.formContainer}>
              <p className={styles.text}>Have questions before you make a decision? We are happy to help.</p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(){
  return {
    props: {
      days
    }
  }
}


export default Contact