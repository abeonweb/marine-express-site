import React from 'react'
import { services } from "../../data"
import { useRouter } from "next/router"
import styles from "../../styles/ServiceId.module.css"
import Link from "next/link"

const ServiceDetails = ({ services }) => {
    const router = useRouter()
    const serviceId = router.query.serviceId
    const service = services.find(service => service.title == serviceId)

    return (
        <article className={styles.article}>
            <h1 className={styles.serviceTitle}>{service.title}</h1>
            <img className={styles.image} src={service.image} alt="" />
            <ul className={styles.list}>
                {service.list.map((item, i) => <li className={styles.listItem} key={i}>{item}</li>)}
            </ul>
            <div className={styles.pageLinks}>
                <Link className={styles.pageLink} href="/services">
                    <img src={"../images/backArrow.png"} className={styles.pageLinkImage} alt="" />
                    <span className={styles.pageLinkText}>
                        Back to Services
                    </span>
                </Link>
                <Link className={styles.pageLink} href="/contact">
                    <span className={styles.pageLinkText}>
                        Contact us
                    </span>
                    <img src={"../images/contact.png"} className={styles.pageLinkImage} alt="" />
                </Link>
            </div>
        </article>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { serviceId: 'Clearing' } },
            { params: { serviceId: 'Forwarding' } },
            { params: { serviceId: 'Haulage' } },
            { params: { serviceId: 'Ro-Ro' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps() {
    return {
        props: {
            services
        },
    }
}

export default ServiceDetails