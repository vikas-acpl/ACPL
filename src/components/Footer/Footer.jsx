import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/acpl-logo.png';
import Linkedin from '../../assets/svg/Linkedin.svg'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="ACPL" className={styles.logoImage} />
                </div>
                <nav className={styles.footerLinks}>
                    <a href="#services" className={styles.footerLink}>Services</a>
                    <a href="#products" className={styles.footerLink}>Products</a>
                    <a href="https://acpl.com/" target="_blank"
                        rel="noopener noreferrer" className={styles.footerLink}>About ACPL</a>
                </nav>
                <div className={styles.social}>
                    <a
                        href="https://www.linkedin.com/company/acplsystems/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="LinkedIn"
                    >
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                </div>
                <div className={styles.copyright}>
                    © 2025 ACPL Systems All rights reserved.
                </div>
            </div>
        </section >
    )
}

export default Footer
