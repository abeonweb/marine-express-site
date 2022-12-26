import React from 'react'
import Form from "../../components/Form"
import styles from "../../styles/Contact.module.css"

const Contact = () => {
  return (
    <section className="top-section">
      <h1 className="title">Contact</h1>
      <div className={styles.workHoursContainer}>
        <div className={styles.imageContainer}>
          <img src="../images/headset-man.webp" alt="" className={styles.image} />
        </div>
        <div className={styles.workHours}>
            <h3 className={styles.subtitle}>Opening Hours</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Monday: 9:00AM - 6:00PM</li>
              <li className={styles.listItem}>Tuesday: 9:00AM - 6:00PM</li>
              <li className={styles.listItem}>Wednesday: 9:00AM - 6:00PM</li>
              <li className={styles.listItem}>Thursday: 9:00AM - 6:00PM</li>
              <li className={styles.listItem}>Friday: 9:00AM - 6:00PM</li>
            </ul>
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <div className={styles.imageContainer}>
          <img src="../images/woman-phone.webp" alt="" className={styles.image} />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Contact