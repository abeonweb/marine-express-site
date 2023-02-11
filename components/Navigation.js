import { useEffect } from "react"
import Link from "next/link"
import useOpen from "../hooks/useOpen"
import { links } from "../data"
import styles from "../styles/Navigation.module.css"

export default function Navigation() {
    const { open, handleClick } = useOpen()

    useEffect(() => {
        window.addEventListener("scroll", iScrolled)

        return function () {
            window.removeEventListener("scroll", iScrolled)
        }
    }, [])

    function iScrolled() {
        const header = document.querySelector("#header")
        const main = document.querySelector("#main")
        if (window.pageYOffset > (header.clientHeight))
            main.classList.add("sticky")
        else
            main.classList.remove("sticky")
    }

    return (
        <header id="header" className={`${styles.header} ${open ? styles.navOpen : null}`} >
            <div className={styles.navContent}>
                <div className={styles.navLogo} >
                    <Link href="/" className={styles.navTitleLink}>
                        <img src="./images/menl.png" className={styles.logoImage} alt="" />
                        <h1 className={styles.navTitle}>
                            <span className={styles.logoName}>Marine </span>
                            <span className={styles.logoName}>Express</span>
                        </h1>
                    </Link>
                </div>
                <div onClick={handleClick} className={styles.menuIcon}>
                    <span className={styles.hamburger}></span>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {
                            links.map(({ name, path }, i) => <li
                                key={i}><Link
                                    href={path}
                                    className={styles.navLink}
                                    onClick={handleClick}>{name}</Link></li>)
                        }
                    </ul>

                </nav>
            </div>
        </header>
    )
}