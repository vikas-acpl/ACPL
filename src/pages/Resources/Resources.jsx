import React from 'react'
import styles from './Resources.module.css'
import StarBorder from '../../components/StarBorder';
import Blog1 from '../../assets/Resources/Blog1.png'
import Blog2 from '../../assets/Resources/Blog2.png'

const Resources = () => {
    return (
        <section id="resources" className={styles.resources}>
            <div className={`container ${styles.resourcesContainer}`}>
                <div className={`sectionHeader ${styles.partnerHeader}`}>
                    <div className='badge'>
                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="#fff"
                            speed="4s"
                        >
                            <span className={styles.badge}>
                                Resources
                            </span>
                        </StarBorder>
                    </div>
                    <h2 className="sectionTitle">
                        Insights That Drive Security <span className={styles.highlight}>Forward</span>
                    </h2>
                    <p className="sectionSubtitle">
                        Explore ACPL’s expert-led whitepapers, reports, and playbooks designed to help CISOs,
                        <br className="responsive-br" />
                        CIOs, and security leaders make informed, strategic decisions in a complex threat landscape.
                    </p>
                </div>
                <div className={styles.resourcesCard}>
                    <div className={styles.mainCard}>
                        <img src={Blog1} alt="Blog1" />
                        <p className={styles.readTime}>20 MINS READ</p>
                        <h3 className={styles.cardTitle}>BCCL Embraces Advanced Security</h3>
                        <p className={styles.description}>
                            As BCCL looked to the future, it recognised the need for a critical evolution to revitalise its ageing IT infrastructure, which had become a bottleneck to its operational agility and security.
                        </p>
                        <p className={styles.dateText}>Jan 12, 2022</p>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div><img src={Blog2} alt="Blog2" /></div>
                            <div>
                                <p className={styles.readTime}>10 MINS READ</p>
                                <h4 className={styles.cardTitle}>What is Dark Data and approach to regain control over it.</h4>
                                <p className={styles.dateText}>Apr 8, 2022</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={Blog2} alt="Blog3" />
                            </div>
                            <div>
                                <p className={styles.readTime}>10 MINS READ</p>
                                <h4 className={styles.cardTitle}>AttackFence NDR</h4>
                                <p className={styles.dateText}>Apr 8, 2022</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <img src={Blog2} alt="Blog3" />
                            </div>
                            <div>
                                <p className={styles.readTime}>10 MINS READ</p>
                                <h4 className={styles.cardTitle}>7 Building Blocks of Data Classification Program for Effective Data Security.</h4>
                                <p className={styles.dateText}>Apr 8, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources
