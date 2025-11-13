import React from 'react'
import styles from './Banner.module.css'
import Arrow from '../../assets/svg/right-arrow.svg'

const Banner = () => {
    return (
        <section className={styles.Banner}>
            <div className={`container ${styles.bannerContainer}`}>
                <div className={styles.partnerHeader}>
                    <h2 className={`sectionTitle ${styles.headingTitle}`}>
                        Ready to Leverage ACPL’s IP Platforms
                        <br />
                        for Deeper Security Insights!!
                    </h2>
                    <div className={styles.actionBtn}>
                        <a href="#experts" className="btn btn--primary">Request a Demo<img src={Arrow} alt="Right-Arrow" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
