import React from 'react'
import { services } from "../../data"
import { useRouter } from "next/router"
import styles from "../../styles/ServiceId.module.css"
import Image from "next/image"

const ServiceDetails = () => {
    const router = useRouter()
    const id = router.query.serviceId
    const { title, image, list } = services.find(service => service.id == id)

    return (
        <article className={styles.article}>
            <h1 className={`title ${styles.serviceTitle}`}>{title}</h1>
            <Image className={styles.image} src={image} alt="" />
            <ul className={styles.list}>
                {list.map((item, i) => <li className={styles.listItem} key={i}>{item}</li>)}
            </ul>
        </article>
    )
}

export default ServiceDetails