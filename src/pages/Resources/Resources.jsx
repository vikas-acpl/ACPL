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
                            <span className="badgeItem">
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
                        <video
                            src="https://www.acpl.com/website/docs/video.mp4"
                            className={styles.mainMedia}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <p className={styles.readTime}>20 MINS READ</p>
                        <h3 className={styles.cardTitle}>35 Years of Cybersecurity Excellence</h3>
                        <p className={styles.description}>
                            As a Managed Service Provider, we know the challenges of keeping businesses secure in an ever-evolving digital world, but with this incredible team, there's no problem we can't solve.
                        </p>
                        <p className={styles.dateText}>Jan 12, 2022</p>
                    </div>
                    <div className={styles.cards}>
                        <a href="https://www.acpl.com/website/docs/BCCL-embraces-advanced-security-7-feb-2025-mv-v2.pdf" target="_blank"
                            rel="noopener noreferrer" className={styles.card}>
                            <div><img src={Blog2} alt="Blog2" /></div>
                            <div>
                                <p className={styles.readTime}>10 MINS READ</p>
                                <h4 className={styles.cardTitle}>BCCL Embraces Advanced Security</h4>
                                <p className={styles.dateText}>Apr 8, 2022</p>
                            </div>
                        </a>
                        <a href="https://www.attackfence.com/storage/resource/files/WxeamOViiJuclR2kg7ZoCvGLoRYAJpH6y5ZHYUiX.pdf" target="_blank"
                            rel="noopener noreferrer" className={styles.card}>
                            <div>
                                <img src={Blog2} alt="Blog3" />
                            </div>
                            <div>
                                <p className={styles.readTime}>10 MINS READ</p>
                                <h4 className={styles.cardTitle}>AttackFence NDR</h4>
                                <p className={styles.dateText}>Apr 8, 2022</p>
                            </div>
                        </a>
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
