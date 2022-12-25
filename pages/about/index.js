import React from 'react'
import Banner from "../../components/Banner"
import { about } from "../../data"
import styles from "../../styles/About.module.css"

const About = () => {
  return (
    <>
      <section className={`top-section ${styles.aboutSection}`}>
        <h1 className="title">Our years of <span className="highlight">experience</span> says a lot <span className="highlight">About us.</span></h1>
        {
          about.map(({ title, text, image }, i) => {
            return (
              <article className={styles.article}>
                <h2 className={styles.title}>{title}</h2>
                <img src={image} alt="" className={styles.image} />
                {text.map((paragraph, index) => <p key={index} className={styles.text}>{paragraph}</p>)}
              </article>
            )
          })
        }
      </section>
      <Banner bannerText={"Ready for your next great business decision?"} link={"/contact"}/>
    </>
  )
}

export default About