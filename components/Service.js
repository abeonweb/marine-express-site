import Image from "next/image"
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
                            <article key={i} className={styles.article}>
                                <Image src={image} className={styles.image} alt="" />
                                <div
                                    className={styles.textContainer}
                                >
                                    <h2 className={styles.title}>{title}</h2>
                                    <p className={styles.text}>{text}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Service