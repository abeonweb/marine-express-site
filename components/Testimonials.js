import React from 'react'
import { testimonials } from "../data"
import Testimonial from "./Testimonial"
import styles from "../styles/Testimonials.module.css"

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.overlay} />
      <h2 className={styles.title}>Testimonials</h2>
      <h3 className={styles.subtitle}>What our clients have to say</h3>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, i) => (<div key={i} className={styles.carouselItem}>
          <Testimonial  {...testimonial} />
        </div>))}
      </div>
    </section>
  )
}

export default Testimonials