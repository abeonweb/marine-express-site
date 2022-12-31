import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
    },[])

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
                    {/* <Image src="" className={styles.logoImage} alt="" /> */}
                    <Link href="/"><h1 className={styles.navTitle}>MENL</h1></Link>
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