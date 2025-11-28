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
import MicrosoftClR from '../../assets/PartnersLogoClr/Microsoft-color.svg'
import PaloAltoClR from '../../assets/PartnersLogoClr/PaloAlto-color.svg'
import FortinetClr from '../../assets/PartnersLogoClr/Fortinet-color.svg'
import ZscalerClr from '../../assets/PartnersLogoClr/Zscaler-color.svg'
import CrowdstrikeClr from '../../assets/PartnersLogoClr/Crowdstrike-color.svg'
import NetskopeClr from '../../assets/PartnersLogoClr/Netskope-color.svg'
import CloudflareClr from '../../assets/PartnersLogoClr/Cloudflare-color.svg'
import OktaClr from '../../assets/PartnersLogoClr/okta-color.svg'
import WizClr from '../../assets/PartnersLogoClr/Wiz-color.svg'
import QualysClr from '../../assets/PartnersLogoClr/Qualys-color.svg'
import { useState } from 'react';
import NetworkSecurityClr from '../../assets/CompaniesLogoClr/Network-Security-Color.svg'
import EndpointSecurityClr from '../../assets/CompaniesLogoClr/Endpoint-Security-Color.svg'
import IdentityAccessClr from '../../assets/CompaniesLogoClr/Identity-Access-Color.svg'
import CloudSecurityClr from '../../assets/CompaniesLogoClr/Cloud-Security-Color.svg'
import ZeroTrustClr from '../../assets/CompaniesLogoClr/Zero-Trust-Color.svg'
import ApplicationSecurityClr from '../../assets/CompaniesLogoClr/Application-Security-Color.svg'
import SIEMSOARClr from '../../assets/CompaniesLogoClr/SIEM-SOAR-Color.svg'
import DataClassificationClr from '../../assets/CompaniesLogoClr/Data-Classification-Color.svg'
import DataSecurityClr from '../../assets/CompaniesLogoClr/Data-Security-Color.svg'
import EmailSecurityClr from '../../assets/CompaniesLogoClr/Email-Security-Color.svg'


const partners = [
    { name: "Microsoft", logo: Microsoft },
    { name: "Palo Alto Networks", logo: PaloAlto },
    { name: "Fortinet", logo: Fortinet },
    { name: "Zscaler", logo: Zscaler },
    { name: "Crowdstrike", logo: Crowdstrike },
    { name: "Netskope", logo: Netskope },
    { name: "Cloudflare", logo: Cloudflare },
    { name: "Okta", logo: Okta },
    { name: "Wiz", logo: Wiz },
    { name: "Qualys", logo: Qualys },
];

const partnersClr = [
    { name: "Microsoft", logo: MicrosoftClR },
    { name: "Palo Alto Networks", logo: PaloAltoClR },
    { name: "Fortinet", logo: FortinetClr },
    { name: "Zscaler", logo: ZscalerClr },
    { name: "Crowdstrike", logo: CrowdstrikeClr },
    { name: "Netskope", logo: NetskopeClr },
    { name: "Cloudflare", logo: CloudflareClr },
    { name: "Okta", logo: OktaClr },
    { name: "Wiz", logo: WizClr },
    { name: "Qualys", logo: QualysClr },
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

const CompaniesCLR = [
    { name: "Network Security", logo: NetworkSecurityClr },
    { name: "Endpoint Security", logo: EndpointSecurityClr },
    { name: "Identity & Access Management", logo: IdentityAccessClr },
    { name: "Cloud Security", logo: CloudSecurityClr },
    { name: "Zero Trust", logo: ZeroTrustClr },
    { name: "Application Security", logo: ApplicationSecurityClr },
    { name: "SIEM & SOAR", logo: SIEMSOARClr },
    { name: "Data Classification", logo: DataClassificationClr },
    { name: "Data Security  ", logo: DataSecurityClr },
    { name: "Email Security", logo: EmailSecurityClr },
];

const OurPartners = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                        {partners.map((partner, index) => {
                            const colorLogo = partnersClr[index]?.logo;
                            const isHovered = hoveredIndex === index;
                            return (
                                <div className={styles.partner} key={partner.name} onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}>
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
                                    <img
                                        className={styles.partnerLogo}
                                        src={isHovered && colorLogo ? colorLogo : partner.logo}
                                        alt={`${partner.name} logo`}
                                    />
                                    <h3>{partner.name}</h3>
                                </div>
                            )
                        })}
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
                        {Companies.map((partner, index) => {
                            const colorLogo = CompaniesCLR[index]?.logo;
                            const isHovered = hoveredIndex === index;
                            return (
                                <div className={styles.partner} key={partner.name} onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}>
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
                                    <img
                                        className={styles.partnerLogo}
                                        src={isHovered && colorLogo ? colorLogo : partner.logo}
                                        alt={`${partner.name} logo`}
                                    />
                                    <h3>{partner.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPartners
