import React from 'react'
import styles from './OurPartners.module.css'
import StarBorder from '../../components/StarBorder';
import Netskope from '../../assets/partnerslogo/Netskope.png'
import Points from '../../assets/points.png'
import Lines from '../../components/Lines/Lines';
import logo from '../../assets/acpl-logo-2.png'
import LinesBottom from '../../components/Lines/LinesBottom';

const partners = [
    { name: "Netskope", logo: Netskope },
    { name: "Symantec", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
    { name: "Fortinet", logo: Netskope },
];

const OurPartners = () => {
    return (
        <section className={styles.ourPartners}>
            <div className={`container ${styles.partnerContainer}`}>
                <div className={`sectionHeader ${styles.partnerHeader}`}>
                    <div className='badge'>
                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="#fff"
                            speed="4s"
                        >
                            <span className={styles.badge}>
                                Partners & Expertise
                            </span>
                        </StarBorder>
                    </div>
                    <h2 className="sectionTitle">
                        Powerful Solutions
                        <br />
                        with Trusted Partners
                    </h2>
                    <p className="sectionSubtitle">
                        ACPL partners with the world’s top cybersecurity innovators to deliver integrated,
                        <br />
                        best-in-class solutions across cloud, data, identity, and network security ecosystems.
                    </p>
                </div>
                <div className={styles.partners}>
                    <div className={styles.logoGrid}>
                        {partners.map((partner) => (
                            <div className={styles.partner} key={partner.name}>
                                <div className={styles.box1}>
                                </div>
                                <div className={styles.box2}>
                                </div>
                                <div className={styles.box3}>
                                </div>
                                <div className={styles.box4}>
                                </div>
                                <div className={styles.background}>
                                    <img src={Points} alt="points" />
                                </div>
                                <img className={styles.partnerLogo} src={partner.logo} alt={`${partner.name} logo`} />
                                <h3>{partner.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.lines}>
                    <Lines />
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="acpl=-logo" />
                </div>
                <div className={styles.linesBottom}>
                    <LinesBottom />
                </div>
                <div className={styles.partners}>
                    <div className={styles.logoGrid}>
                        {partners.map((partner) => (
                            <div className={styles.partner} key={partner.name}>
                                <div className={styles.box1}>
                                </div>
                                <div className={styles.box2}>
                                </div>
                                <div className={styles.box3}>
                                </div>
                                <div className={styles.box4}>
                                </div>
                                <div className={styles.background}>
                                    <img src={Points} alt="points" />
                                </div>
                                <img className={styles.partnerLogo} src={partner.logo} alt={`${partner.name} logo`} />
                                <h3>{partner.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPartners
