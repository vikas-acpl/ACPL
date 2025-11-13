import React from 'react'
import styles from './Partners.module.css'
import partnersLogo from "../../assets/svg/partners-logo.svg";

const Partners = () => {
    return (
        <section className={styles.Partners}>
            <div className={styles.background}></div>
            <div className={`container ${styles.partnersContainer}`}>
                <div className={styles.partnerHeading}>
                    <h3>
                        Our Technology Partners and Expertise
                    </h3>
                </div>
                <div className={styles.partnerStripWrap}>
                    <div className={styles.partnerStripTrack}>
                        <img
                            src={partnersLogo}
                            alt="Our technology partners"
                            className={styles.partnerStripImg}
                        />
                        <img
                            src={partnersLogo}
                            alt=""
                            aria-hidden="true"
                            className={styles.partnerStripImg}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
