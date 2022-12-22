import React from 'react'
import { testimonials } from "../data"
import Testimonial from "./Testimonial"
import styles from "../styles/Testimonials.module.css"

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What our clients have to say</h2>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, i) => (<div key={i} className={styles.carouselImageItem}>
          <Testimonial  {...testimonial} />
        </div>))}
      </div>
    </section>
  )
}

export default Testimonials