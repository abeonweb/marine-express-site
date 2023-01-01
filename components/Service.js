import Link from "next/link"
import React from 'react'
import { services } from "../data"
import styles from "../styles/Service.module.css"

const Service = () => {
    return (
        <section className={styles.services}>
            <h2 className="title">Our Services</h2>
            <div className={styles.serviceContainer}>
                {
                    services.map(({ title, text, image }, i) => {
                        return (
                            <Link className={styles.link} href={`/services/${title}`}>
                                <article key={i} className={styles.article}>
                                    <img src={image} className={styles.image} alt="" />
                                    <div
                                        className={styles.textContainer}
                                    >
                                        <h2 className={styles.title}>{title}</h2>
                                        <p className={styles.text}>{text}</p>
                                    </div>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Service