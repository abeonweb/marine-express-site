import React from 'react'
import styles from "../styles/Navigation.module.css"
import { links } from "../data"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* links */}
      <div>
        <h3 className={styles.subtitle}>Links</h3>
        <ul className={styles.footerLinksList}>
          {links.map((link, i) => (<li key={i} className={styles.footerLinksItem}>
            <Link className={styles.footerLink} href={link.path}>
              {link.name}
            </Link></li>))}
        </ul>
      </div>
      {/* social media */}

      {/* logo */}
      <div className={styles.footerLogoContainer}>
        <Link href="/"> <h4 className={styles.footerTitle}>Marine Express <br /> Nigeria Limited</h4></Link>
        <div className={styles.footerLogo}>
          <Image src="..\images\nacc.png" alt="" className={styles.image} />
          <Image src="..\images\ancla.png" alt="" className={styles.image} />
        </div>
      </div>

    </footer>
  )
}

export default Footer