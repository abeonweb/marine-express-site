import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { services } from "../data"
import styles from "../styles/Service.module.css"

const Service = () => {
    return (
        <section className={styles.services}>
            <h2 className={`title ${styles.heading}`}>Clearing and Forwarding</h2>
            <p className={styles.titleSubtext}>We provide high quality services that give our client value. </p>
            <div className={styles.serviceContainer}>
                {
                    services.map(({ title, text, image, icon, id }, i) => {
                        return (
                            <article key={i} className={styles.serviceArticle}>
                                <Link  className={styles.link} href={`/services/${id}`}>
                                    <Image
                                        width={600}
                                        height={500}
                                        src={image}
                                        className={styles.image}
                                        alt=""
                                    />
                                    <div
                                        className={styles.textContainer}
                                    >
                                        <Image width={50} height={50} className={styles.icon} src={icon} alt="" />
                                        <h2 className={styles.serviceTitle}>{title}</h2>
                                        <p className={styles.serviceText}>{text}</p>
                                    </div>
                                </Link>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Service