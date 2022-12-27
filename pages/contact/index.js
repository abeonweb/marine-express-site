import React from 'react'
import Form from "../../components/Form"
import Banner from "../../components/Banner"
import styles from "../../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact</h1>
      <section className={`top-section ${styles.contact}`}>
        <div className={styles.workHoursContainer}>
          <div className={styles.imageContainer}>
            <img src="../images/headset-man.webp" alt="" className={styles.image} />
          </div>
          <div className={styles.workHours}>
            <div className={styles.workHoursTextContainer}>
              <h3 className={styles.subtitle}>Open Hours</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Monday: 9:00AM - 6:00PM</li>
                <li className={styles.listItem}>Tuesday: 9:00AM - 6:00PM</li>
                <li className={styles.listItem}>Wednesday: 9:00AM - 6:00PM</li>
                <li className={styles.listItem}>Thursday: 9:00AM - 6:00PM</li>
                <li className={styles.listItem}>Friday: 9:00AM - 6:00PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Banner bannerText="Want to know what we do?" link="/services" />
      <section className={`top-section ${styles.contact}`}>
        <div className={styles.contactFormContainer}>
          <h3 className={styles.subtitle}>Contact us</h3>
          <div className={styles.imageContainer}>
            <img src="../images/woman-phone.webp" alt="" className={styles.image} />
            <div className={styles.formContainer}>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact