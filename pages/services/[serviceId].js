import React from 'react'
import { services } from "../../data"
import { useRouter } from "next/router"
import styles from "../../styles/ServiceId.module.css"

const ServiceDetails = () => {
    const router = useRouter()
    const id = router.query.serviceId
    const service = services.find(service => service.title == id)
    const { title, image, list } = service
    return (
        <article className={styles.article}>
            <h1 className={`title ${styles.serviceTitle}`}>{title}</h1>
            <img className={styles.image} src={image} alt="" />
            <ul className={styles.list}>
                {list.map((item, i) => <li className={styles.listItem} key={i}>{item}</li>)}
            </ul>
        </article>
    )
}

export default ServiceDetails