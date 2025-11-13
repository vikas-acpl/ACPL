import React from 'react'
import styles from './CyberCare.module.css'
import Arrow from '../../assets/svg/right-arrow.svg'
import StarBorder from '../../components/StarBorder';
import { useState, useEffect } from 'react';
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import LogoLoop from '../../components/logo/LogoLoop';
import logo1 from '../../assets/svg/logo1.svg'
import logo2 from '../../assets/svg/logo2.svg'
import logo3 from '../../assets/svg/logo3.svg'
import logo4 from '../../assets/svg/logo4.svg'


const CyberCare = () => {
    const items = [
        "One Engineering Bench",
        "Multi-Vendor Expertise",
        "All-in-One Security Hub",
        "Customer Led Engagments",
    ];

    const imageLogos = [
        { src: logo1, alt: "Company 1" },
        { src: logo2, alt: "Company 2" },
        { src: logo3, alt: "Company 3" },
        { src: logo4, alt: "Company 3" },
    ];

    const imageLogos1 = [
        { src: logo3, alt: "Company 1" },
        { src: logo1, alt: "Company 2" },
        { src: logo4, alt: "Company 3" },
        { src: logo2, alt: "Company 3" },
    ];

    const imageLogos2 = [
        { src: logo2, alt: "Company 1" },
        { src: logo4, alt: "Company 2" },
        { src: logo1, alt: "Company 3" },
        { src: logo3, alt: "Company 3" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setActiveIndex((prev) =>
                prev === items.length ? 0 : prev + 1
            );
        }, 1800);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.cyberCare}>
            <div className={`container ${styles.cyberContainer}`}>
                <div className={styles.left}>
                    <div className={`sectionHeader ${styles.partnerHeader}`}>
                        <div className='badge'>
                            <StarBorder
                                as="button"
                                className="custom-class"
                                color="#fff"
                                speed="4s"
                            >
                                <span className={styles.badge}>
                                    CyberCare Pro
                                </span>
                            </StarBorder>
                        </div>
                        <h2 className="sectionTitle">
                            One Bench, One <span className={styles.highlight}>Banner</span>
                        </h2>
                        <p className="sectionSubtitle">
                            At the heart of ACPL is CyberCare — a unified services framework that seamlessly integrates advisory, implementation, and managed security, ensuring resilient, scalable, and outcome-driven protection across your enterprise.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        {items.map((label, idx) => (
                            <div
                                key={idx}
                                className={cn(styles.timelineItem, idx === activeIndex && styles.active)}
                            >
                                <motion.div
                                    className={styles.circleWrapper}
                                    animate={idx === activeIndex ? "active" : "inactive"}
                                    variants={{
                                        active: { scale: 1.2 },
                                        inactive: { scale: 1 },
                                    }}
                                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                                >
                                    <span className={styles.circle} />
                                    {idx === activeIndex && (
                                        <motion.span
                                            className={styles.ripple}
                                            initial={{ scale: 0, opacity: 1 }}
                                            animate={{ scale: 2, opacity: 0 }}
                                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                                        />
                                    )}
                                </motion.div>
                                <motion.span
                                    className={styles.label}
                                    animate={{
                                        color: idx === activeIndex ? "#ff3b37" : "#a1262a",
                                        fontSize: idx === activeIndex ? "28px" : "22px",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {label}
                                </motion.span>
                                {idx !== items.length - 1 && (
                                    <span className={styles.lineWrapper}>
                                        <span className={styles.lineBg} />
                                        <motion.span
                                            key={activeIndex === items.length ? "reset" : "anim"}
                                            className={styles.lineFill}
                                            animate={{
                                                height:
                                                    activeIndex === items.length
                                                        ? "0%"
                                                        : activeIndex > idx
                                                            ? "100%"
                                                            : "0%",
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20,
                                                mass: 0.5,
                                            }}
                                        />
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.actionBtn}>
                        <a href="#experts" className="btn btn--primary">Request a Demo<img src={Arrow} alt="Right-Arrow" /></a>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.logosLoop}>
                        <LogoLoop
                            logos={imageLogos}
                            speed={80}
                            direction="up"
                            logoHeight={100}
                            gap={20}
                            hoverSpeed={20}
                            fadeOut
                        />
                    </div>
                    <div className={styles.logosLoop}>
                        <LogoLoop
                            logos={imageLogos1}
                            speed={80}
                            direction="down"
                            logoHeight={100}
                            gap={20}
                            hoverSpeed={20}
                            fadeOut
                        />
                    </div>
                    <div className={styles.logosLoop}>
                        <LogoLoop
                            logos={imageLogos2}
                            speed={80}
                            direction="up"
                            logoHeight={100}
                            gap={20}
                            hoverSpeed={20}
                            fadeOut
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CyberCare
