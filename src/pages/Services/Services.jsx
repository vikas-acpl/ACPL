import React from 'react'
import styles from './Services.module.css'
import StarBorder from '../../components/StarBorder';
import ArchitecturalDesign from '../../assets/svg/ArchitecturalDesign.svg'
import VulnerabilityAssessment from '../../assets/svg/VulnerabilityAssessment.svg'
import Assessment from '../../assets/svg/Assessment.svg'
import ManagedServices from '../../assets/svg/ManagedServices.svg'
import MDR from '../../assets/svg/MDR.svg'
import StackingCards, {StackingCardItem} from '../../components/StackingCards/StackingCards'

const cards = [
    {
        number: "01",
        title: "Architectural design",
        description:
            "Design secure, scalable, and future-ready security architectures aligned with your business goals. From Zero Trust models to multi-cloud blueprints, we build frameworks that reduce risk, optimize performance, and enable long-term cyber resilience.",
        icon: ArchitecturalDesign
    },
    {
        number: "02",
        title: "Vulnerability Assessment",
        description:
            "Identify weaknesses before attackers do. Our comprehensive assessments uncover system, network, and configuration gaps—delivering actionable insights and prioritized remediation to strengthen your organization’s overall security posture.",
        icon: VulnerabilityAssessment
    },
    {
        number: "03",
        title: "Assessments & POCs",
        description:
            "Validate the right technologies with confidence. We conduct real-world assessments and tailored proof-of-concepts, ensuring every solution meets your operational, compliance, and security requirements before full deployment.",
        icon: Assessment
    },
    {
        number: "04",
        title: "Managed Services",
        description:
            "Outsource complexity, not control. Our 24×7 managed services provide continuous monitoring, configuration management, optimization, and compliance reporting—ensuring uninterrupted protection across cloud, network, and endpoint ecosystems.",
        icon: ManagedServices
    },
     {
        number: "05",
        title: "Managed Detection & Response",
        description:
            "Detect, investigate, and neutralize threats in real time. Our MDR services combine advanced analytics, threat intelligence, and expert SOC analysts to deliver rapid containment and proactive defense against evolving cyber attacks.",
        icon: MDR
    },
];

const Services = () => {
    return (
        <section id="services" className={styles.ourServices}>
            <div className={`container ${styles.serviceContainer}`}>
                <div className={`sectionHeader ${styles.partnerHeader}`}>
                    <div className='badge'>
                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="#fff"
                            speed="4s"
                        >
                            <span className="badgeItem">
                                Our Services
                            </span>
                        </StarBorder>
                    </div>
                    <h2 className="sectionTitle">
                        Precision-Engineered Cybersecurity<br className="responsive-br" /> for Complex <span className={styles.highlight}>Environments</span>
                    </h2>
                    <p className="sectionSubtitle">
                        From architecture to managed services, we partner with enterprises to implement security<br className="responsive-br" /> frameworks that deliver continuous visibility, resilience, and measurable business outcomes.
                    </p>
                </div>
                <StackingCards totalCards={cards.length} scaleMultiplier={0.07}>
                    {cards.map((card, idx) => (
                        <StackingCardItem key={idx} index={idx}
                            topPosition={`${3 + idx * 2}%`} >
                            <div className={styles.managedServiceCard}>
                                <div className={styles.iconSection}>
                                    <img src={card.icon} alt={card.title} className={styles.icon} />
                                </div>
                                <div className={styles.contentSection}>
                                    <p className={styles.number}>{card.number}</p>
                                    <h3 className={styles.title}>{card.title}</h3>
                                    <p className={styles.description}>{card.description}</p>
                                </div>
                            </div>
                        </StackingCardItem>
                    ))}
                </StackingCards>
            </div>
        </section>
    )
}

export default Services
