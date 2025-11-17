import React from 'react'
import styles from './Services.module.css'
import StarBorder from '../../components/StarBorder';
import ManagedServices from '../../assets/svg/Managed-Services.svg'
import Assessment from '../../assets/svg/Assessment.svg'
import Implementation from '../../assets/svg/Implementation.svg'
import HealthChecks from '../../assets/svg/Health-Checks.svg'
import StackingCards, {StackingCardItem} from '../../components/StackingCards/StackingCards'

const cards = [
    {
        number: "01",
        title: "Managed Services",
        description:
            "ACPL’s Managed Security Services provide 24×7 protection, monitoring, and optimization across networks, cloud, and endpoints—reducing risks, ensuring compliance, and maintaining resilient security with expert SOC support and measurable outcomes.",
        icon: ManagedServices
    },
    {
        number: "02",
        title: "Assessment & POCs",
        description:
            "We assess your existing security posture and validate new solutions through hands-on Proofs of Concept, uncovering gaps, benchmarking performance, and ensuring measurable outcomes before large-scale implementation or investment decisions.",
        icon: Assessment
    },
    {
        number: "03",
        title: "Implementation",
        description:
            "ACPL’s certified engineers deploy and integrate leading cybersecurity platforms seamlessly into your environment — ensuring secure configurations, policy alignment, and optimized performance for faster time-to-value and minimal business disruption.",
        icon: Implementation
    },
    {
        number: "04",
        title: "Health Checks",
        description:
            "Our Health Checks identify configuration gaps, performance issues, and security blind spots — enabling fine-tuned optimization, risk reduction, and continuous improvement across networks, endpoints, and cloud environments.",
        icon: HealthChecks
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
                            <span className={styles.badge}>
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
