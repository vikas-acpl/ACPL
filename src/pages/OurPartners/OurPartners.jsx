import React from 'react'
import styles from './OurPartners.module.css'
import StarBorder from '../../components/StarBorder';
import Points from '../../assets/points.png'
import Lines from '../../components/Lines/Lines';
import logo from '../../assets/acpl-logo-2.png'
import LinesBottom from '../../components/Lines/LinesBottom';
import Netskope from '../../assets/partnerslogo/Netskope.png'
import Zscaler from '../../assets/partnerslogo/Zscaler.png'
import Fortinet from '../../assets/partnerslogo/Fortinet.png'
import Cloudflare from '../../assets/partnerslogo/Cloudflare.png'
import PaloAlto from '../../assets/partnerslogo/PaloAlto.png'
import Okta from '../../assets/partnerslogo/Okta.png'
import Crowdstrike from '../../assets/partnerslogo/Crowdstrike.png'
import Microsoft from '../../assets/partnerslogo/Microsoft.png'
import Klassify from '../../assets/partnerslogo/Klassify.png'
import Attackfence from '../../assets/partnerslogo/Attackfence.png'
import NetworkSecurity from '../../assets/partnerslogo/Network-Security.png'
import EndpointSecurity from '../../assets/partnerslogo/Endpoint-Security.png'
import IdentityAccess from '../../assets/partnerslogo/Identity-Access.png'
import CloudSecurity from '../../assets/partnerslogo/Cloud-Security.png'
import ZeroTrust from '../../assets/partnerslogo/Zero-Trust.png'
import ApplicationSecurity from '../../assets/partnerslogo/Application-Security.png'
import SIEMSOAR from '../../assets/partnerslogo/SIEM-SOAR.png'
import DataClassification from '../../assets/partnerslogo/Data-Classification.png'
import DataSecurity from '../../assets/partnerslogo/Data-Security.png'
import EmailSecurity from '../../assets/partnerslogo/Email-Security.png'

const partners = [
    { name: "Netskope", logo: Netskope },
    { name: "Zscaler", logo: Zscaler },
    { name: "Fortinet", logo: Fortinet },
    { name: "Cloudflare", logo: Cloudflare },
    { name: "Palo Alto Networks", logo: PaloAlto },
    { name: "Okta", logo: Okta },
    { name: "Crowdstrike", logo: Crowdstrike },
    { name: "Microsoft", logo: Microsoft },
    { name: "Klassify", logo: Klassify },
    { name: "Attackfence", logo: Attackfence },
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
                            <span className={styles.badge}>
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
