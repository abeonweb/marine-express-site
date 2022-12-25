import styles from "../styles/Testimonials.module.css"

function Testimonial({ image, text, info }) {
    return (
        <article className={styles.testimonial}>
            <div className={styles.container}>
                {image && <img className={styles.image} src={image} alt="" />}
                <blockquote className={styles.quote}>
                    "{text}"
                </blockquote>
            </div>
            <div className={styles.info}>{info}</div>
        </article>
    )
}

export default Testimonial
