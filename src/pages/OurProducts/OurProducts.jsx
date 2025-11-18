import styles from './OurProducts.module.css'
import StarBorder from '../../components/StarBorder';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, } from 'motion/react';
import Klassify from '../../assets/products/Klassify.png'
import Attackfence from '../../assets/products/Attackfence.png'
import Cvehub from '../../assets/products/Cvehub.png'
import Points from '../../assets/points1.png'

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= breakpoint);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);
    return isMobile;
}

const OurProducts = () => {

    const isMobile = useIsMobile(480);

    const products = [
        {
            productsTitle: "Klassify — Data Knows Its Place",
            productsDesc:
                "Klassify helps enterprises identify, classify, and protect sensitive data across endpoints and cloud, ensuring compliance, visibility, and strong governance.",
            img: Klassify,
            productsTags: [
                "Data Discovery",
                "Data Classification",
                "Data Protection",
                "Regulatory Compliance"
            ],
            actionBtn: {
                label: "Explore Klassify",
                link: "https://klassify.io/"
            },
            features: [
                "Auto-discover and tag scattered sensitive data across endpoints, servers, and cloud drives.",
                "Real-time email classification to prevent accidental or malicious data leakage.",
                "AI-powered screenshot and image DLP to detect and block sensitive content in visual formats.",
                "Enforce data handling policies at source — before files are shared, copied, or uploaded.",
                "Seamless metadata labelling that integrates with DLP, CASB, and M365 for end-to-end policy enforcement."
            ]
        },
        {
            productsTitle: "AttackFence",
            productsDesc:
                "Intelligent NDR and log management with unified visibility, threat detection, and automated response across enterprise environments.",
            img: Attackfence,
            productsTags: [
                "NDR",
                "XDR",
                "Log Manager",
                "NBAD"
            ],
            actionBtn: {
                label: "Explore Attackfence",
                link: "https://www.attackfence.com/"
            },
            features: [
                "Enriches SIEM/XDR with high-fidelity network telemetry to cut false positives.",
                "Prioritises high-risk threats so SOC teams focus only on what matters.",
                "Exposes lateral movement that EDR alone can’t see.",
                "Feeds clean, contextual logs to SOAR for faster automated playbooks and auto-remediation.",
                "Acts as a unified sensor layer powering MDR/SOC efficiency across IT, OT, IoT, and cloud."
            ]
        },
        {
            productsTitle: "CVE Hub",
            productsDesc:
                "Klassify helps enterprises identify, classify, and protect sensitive data across endpoints and cloud, ensuring compliance, visibility, and strong governance.",
            img: Cvehub,
            productsTags: [
                "Data Discovery",
                "Data Classification",
                "Data Protection",
                "Regulatory Compliance"
            ],
            actionBtn: {
                label: "Find Out More",
                link: "#contact-form"
            },
            features: [
                "Centralised CVE Hub – One unified dashboard to view all critical and high-severity vulnerabilities across every platform.",
                "Track & Patch – We don’t just list CVEs — our SOC monitors, prioritises, and helps remediate them before they turn into incidents.",
                "Auto-Enrichment & Deep Intel – Every CVE is enriched with context on affected devices, tools, networks, and users to accelerate response and decision-making."
            ]
        }
    ];

    const sectionRef = useRef(null);
    const clampedScroll = useMotionValue(0);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const centerTextTop = useTransform(
        clampedScroll,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        ['20%', '32%', '44%', '56%', '68%', '70%']
    );

    const panelWidth = useTransform(scrollYProgress, [0, 1], ['0vw', '100vw']);

    const textColor = useTransform(scrollYProgress, [0.25, 0.45, 0.5], ['#5c5c5c', '#bbb', '#fff'])
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(latest => {
            clampedScroll.set(Math.min(latest, 0.9));
        });
        return () => unsubscribe();
    }, [scrollYProgress, clampedScroll]);

    return (
        <>
            <section id="products" className={styles.ourProducts} ref={sectionRef}>
                <div className={styles.panelContainer}>
                    <motion.div
                        className={styles.panel}
                        style={{
                            width: panelWidth,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                        }}
                    />
                    <motion.div
                        className={styles.panel}
                        style={{
                            width: panelWidth,
                            right: 0,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                        }}
                    />
                    <div className={`container ${styles.productContainer}`}>
                        <motion.div
                            className={styles.centerText}
                            style={{
                                color: textColor,
                                top: centerTextTop,
                                left: '50%',
                                translateX: '-50%'
                            }}
                        >
                            <div className={styles.partnerHeader}>
                                <div className='badge'>
                                    <StarBorder
                                        as="button"
                                        className="custom-class"
                                        color="#fff"
                                        speed="4s"
                                    >
                                        <span className={styles.badge}>
                                            Our Products
                                        </span>
                                    </StarBorder>
                                </div>
                                <h2 className={styles.sectionTitle}>
                                    The ACPL <span className={styles.highlight}>Differentiator</span>
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    From data classification to network defense, ACPL’s product suite ensures visibility,
                                    <br className="responsive-br" />
                                    compliance, and control across hybrid, cloud, and on-prem environments.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className={styles.products}>
                <div className={`container ${styles.productsContainer}`}>
                    {products.map((product, idx) => (
                        <div className={styles.productRow} key={product.productsTitle}>
                            {isMobile ? (<>
                                <div className={styles.left}>
                                    <h3 className={styles.productsTitle}>{product.productsTitle}</h3>
                                    <p className={styles.productsDesc}>{product.productsDesc}</p>
                                    <img src={product.img} alt={product.productsTitle} className={styles.productsImage} />
                                    <div className={styles.productsTags}>
                                        {product.productsTags.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.actionBtn}>
                                        {product.actionBtn.link.startsWith('http') ? (
                                            <a
                                                href={product.actionBtn.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn--primary"
                                            >
                                                {product.actionBtn.label}
                                            </a>
                                        ) : (
                                            <a
                                                href={product.actionBtn.link}
                                                className="btn btn--primary"
                                            >
                                                {product.actionBtn.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <hr className={styles.verticalLine} />
                                <div className={styles.right}>
                                    {product.features.map((feature, fIdx) => (
                                        <div className={styles.partner} key={fIdx}>
                                            <div className={styles.box1}></div>
                                            <div className={styles.box2}></div>
                                            <div className={styles.box3}></div>
                                            <div className={styles.box4}></div>
                                            <div className={styles.background}>
                                                <img src={Points} alt="points" />
                                            </div>
                                            <p>{feature}</p>
                                        </div>
                                    ))}
                                </div></>) : (
                                idx % 2 === 1 ? (<>
                                    <div className={styles.right}>
                                        {product.features.map((feature, fIdx) => (
                                            <div className={styles.partner} key={fIdx}>
                                                <div className={styles.box1}></div>
                                                <div className={styles.box2}></div>
                                                <div className={styles.box3}></div>
                                                <div className={styles.box4}></div>
                                                <div className={styles.background}>
                                                    <img src={Points} alt="points" />
                                                </div>
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <hr className={styles.verticalLine} />
                                    <div className={styles.left}>
                                        <h3 className={styles.productsTitle}>{product.productsTitle}</h3>
                                        <p className={styles.productsDesc}>{product.productsDesc}</p>
                                        <img src={product.img} alt={product.productsTitle} className={styles.productsImage} />
                                        <div className={styles.productsTags}>
                                            {product.productsTags.map(tag => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className={styles.actionBtn}>
                                            {product.actionBtn.link.startsWith('http') ? (
                                                <a
                                                    href={product.actionBtn.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn--primary"
                                                >
                                                    {product.actionBtn.label}
                                                </a>
                                            ) : (
                                                <a
                                                    href={product.actionBtn.link}
                                                    className="btn btn--primary"
                                                >
                                                    {product.actionBtn.label}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>) : (<>
                                    <div className={styles.left}>
                                        <h3 className={styles.productsTitle}>{product.productsTitle}</h3>
                                        <p className={styles.productsDesc}>{product.productsDesc}</p>
                                        <img src={product.img} alt={product.productsTitle} className={styles.productsImage} />
                                        <div className={styles.productsTags}>
                                            {product.productsTags.map(tag => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className={styles.actionBtn}>
                                            {product.actionBtn.link.startsWith('http') ? (
                                                <a
                                                    href={product.actionBtn.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn--primary"
                                                >
                                                    {product.actionBtn.label}
                                                </a>
                                            ) : (
                                                <a
                                                    href={product.actionBtn.link}
                                                    className="btn btn--primary"
                                                >
                                                    {product.actionBtn.label}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <hr className={styles.verticalLine} />
                                    <div className={styles.right}>
                                        {product.features.map((feature, fIdx) => (
                                            <div className={styles.partner} key={fIdx}>
                                                <div className={styles.box1}></div>
                                                <div className={styles.box2}></div>
                                                <div className={styles.box3}></div>
                                                <div className={styles.box4}></div>
                                                <div className={styles.background}>
                                                    <img src={Points} alt="points" />
                                                </div>
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>)
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurProducts
