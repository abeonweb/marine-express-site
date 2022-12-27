import React from 'react'
import styles from "../styles/Contact.module.css"
const Form = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Name"/>
      <input className={styles.input} type="email" placeholder="Email"/>
      <textarea className={`${styles.input} ${styles.textarea}`} cols={400} rows={3} placeholder="Message..."/>
      <button className={styles.formButton} type="submit">Submit</button>
    </form>
  )
}

export default Form