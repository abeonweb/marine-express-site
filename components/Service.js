import Image from "next/image"
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
                    services.map(({ title, text, image, icon }, i) => {
                        return (
                            <Link key={i} className={styles.link} href={`/services/${title}`}>
                                <article className={styles.serviceArticle}>
                                    <Image width={300} height={500} src={image} className={styles.image} alt="" />
                                    <div
                                        className={styles.textContainer}
                                    >
                                        <Image width={50} height={50} className={styles.icon} src={icon} alt=""/>
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