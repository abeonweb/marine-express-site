import Image from "next/image"
import styles from "../styles/Testimonials.module.css"

function Testimonial({ image, text, info }) {
    return (
        <article className={styles.testimonial}>
            <div className={styles.container}>
                {image && <Image className={styles.image} src={image} alt="" />}
                <blockquote className={styles.quote}>
                    &quot;{text}&quot;
                </blockquote>
            </div>
            <div className={styles.info}>{info}</div>
        </article>
    )
}

export default Testimonial
