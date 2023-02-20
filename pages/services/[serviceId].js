import React from 'react'
import { services } from "../../data"
import { useRouter } from "next/router"
import styles from "../../styles/ServiceId.module.css"
import Link from "next/link"
import Image from "next/image"
import backArrow from "../../public/images/backArrow.png"
import contact from "../../public/images/contact.png"

const ServiceDetails = ({ services }) => {
    const router = useRouter()
    const serviceId = router.query.serviceId
    const service = services.find(service => service.id == serviceId)

    return (
        <article className={styles.article}>
            <h1 className={`title ${styles.serviceTitle}`}>{service.title}</h1>
            <div className={styles.imageContainer}>
                <Image
                    priority
                    fill
                    sizes="(min-width: 390px) 33vw, 100vw"
                    className={styles.image}
                    src={service.image}
                    alt=""
                />
            </div>
            <ul className={styles.list}>
                {service.list.map((item, i) => <li className={styles.listItem} key={i}>{item}</li>)}
            </ul>
            <div className={styles.pageLinks}>
                <Link className={styles.pageLink} href="/services">
                    <Image width={24} src={backArrow} className={styles.pageLinkImage} alt="" />
                    <span className={styles.pageLinkText}>
                        Back to Services
                    </span>
                </Link>
                <Link className={styles.pageLink} href="/contact">
                    <span className={styles.pageLinkText}>
                        Contact us
                    </span>
                    <Image width={24} src={contact} className={styles.pageLinkImage} alt="" />
                </Link>
            </div>
        </article>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { serviceId: 'maritime' } },
            { params: { serviceId: 'air' } },
            { params: { serviceId: 'other' } },
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