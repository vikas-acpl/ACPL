import React from 'react'
import styles from './OurPartners.module.css'
import StarBorder from '../../components/StarBorder';
import Points from '../../assets/points.png'
import Lines from '../../components/Lines/Lines';
import logo from '../../assets/acpl-logo-2.png'
import LinesBottom from '../../components/Lines/LinesBottom';
import Netskope from '../../assets/partnerslogo/Netskope.svg'
import Zscaler from '../../assets/partnerslogo/Zscaler.svg'
import Fortinet from '../../assets/partnerslogo/Fortinet.svg'
import Cloudflare from '../../assets/partnerslogo/Cloudflare.svg'
import PaloAlto from '../../assets/partnerslogo/PaloAlto.svg'
import Okta from '../../assets/partnerslogo/okta.svg'
import Crowdstrike from '../../assets/partnerslogo/Crowdstrike.svg'
import Microsoft from '../../assets/partnerslogo/Microsoft.svg'
import Qualys from '../../assets/partnerslogo/Qualys.svg'
import Wiz from '../../assets/partnerslogo/Wiz.svg'
import NetworkSecurity from '../../assets/partnerslogo/Network-Security.svg'
import EndpointSecurity from '../../assets/partnerslogo/Endpoint-Security.svg'
import IdentityAccess from '../../assets/partnerslogo/Identity-Access.svg'
import CloudSecurity from '../../assets/partnerslogo/Cloud-Security.svg'
import ZeroTrust from '../../assets/partnerslogo/Zero-Trust.svg'
import ApplicationSecurity from '../../assets/partnerslogo/Application-Security.svg'
import SIEMSOAR from '../../assets/partnerslogo/SIEM-SOAR.svg'
import DataClassification from '../../assets/partnerslogo/Data-Classification.svg'
import DataSecurity from '../../assets/partnerslogo/Data-Security.svg'
import EmailSecurity from '../../assets/partnerslogo/Email-Security.svg'

const partners = [
    { name: "Netskope", logo: Netskope },
    { name: "Zscaler", logo: Zscaler },
    { name: "Fortinet", logo: Fortinet },
    { name: "Cloudflare", logo: Cloudflare },
    { name: "Palo Alto Networks", logo: PaloAlto },
    { name: "Okta", logo: Okta },
    { name: "Crowdstrike", logo: Crowdstrike },
    { name: "Microsoft", logo: Microsoft },
    { name: "Qualys", logo: Qualys },
    { name: "Wiz", logo: Wiz },
];

const Companies = [
    { name: "Network Security", logo: NetworkSecurity },
    { name: "Endpoint Security", logo: EndpointSecurity },
    { name: "Identity & Access Management", logo: IdentityAccess },
    { name: "Cloud Security", logo: CloudSecurity },
    { name: "Zero Trust", logo: ZeroTrust },
    { name: "Application Security", logo: ApplicationSecurity },
    { name: "SIEM & SOAR", logo: SIEMSOAR },
    { name: "Data Classification", logo: DataClassification },
    { name: "Data Security  ", logo: DataSecurity },
    { name: "Email Security", logo: EmailSecurity },
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
                            <span className="badgeItem">
                                Partners & Expertise
                            </span>
                        </StarBorder>
                    </div>
                    <h2 className="sectionTitle">
                        Powerful Solutions<br className="responsive-br" /> with Trusted Partners
                    </h2>
                    <p className="sectionSubtitle">
                        ACPL partners with the world’s top cybersecurity innovators to deliver integrated,
                        <br className="responsive-br" />
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
                        {Companies.map((partner) => (
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
