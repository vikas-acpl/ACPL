    import styles from "./HeroSection.module.css";
    import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
    import Badge from '../../assets/svg/badge.svg'
    import View from '../../assets/svg/view.svg'
    import Arrow from '../../assets/svg/right-arrow.svg'
    // import AnimationBadge from "../../Animation/AnimationBadge";
    // import { AnimatedGradientBorderTW } from "../../Animation/AnimatedGradientBorderTW";
    import StarBorder from '../../components/StarBorder';
    // import SplitText from "../../components/SplitText";
    import BlurText from "../../components/BlurText";
    // const MapRightSide = lazy(() => import('./MapRightSide'));

    const HeroSection = () => {

        // const [isVisible, setIsVisible] = useState(false);
        // const ref = useRef();

        // const handleAnimationComplete = () => {
        //     console.log('All letters have animated!');
        // };

        // useEffect(() => {
        //     const observer = new IntersectionObserver(([entry]) => {
        //         if (entry.isIntersecting) {
        //             setIsVisible(true);
        //             observer.disconnect();
        //         }
        //     });
        //     if (ref.current) observer.observe(ref.current);
        //     return () => observer.disconnect();
        // }, []);

        return (
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.background}></div>
                    <div className={styles.content}>
                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="#fff"
                            speed="3s"
                        >
                            <span className={styles.badge}>
                                <img src={Badge} alt="Badge" />35 Years of Excellence
                            </span>
                        </StarBorder>
                        {/* <AnimatedGradientBorderTW>
                            <span className={styles.badge}>
                                <img src={Badge} alt="Badge" />35 Years of Excellence
                            </span>
                        </AnimatedGradientBorderTW> */}
                        {/* <AnimationBadge>
                            <span className={styles.badge}>
                                <img src={Badge} alt="Badge" />35 Years of Excellence
                            </span>
                        </AnimationBadge> */}
                        {/* <span className={styles.badge}>
                            <img src={Badge} alt="Badge" />35 Years of Excellence
                        </span> */}
                        {/* <SplitText
                            text={
                                <>Where Tomorrow’s <span className={styles.highlight}>Security</span> Meets <br />
                                    Today’s <span className={styles.highlight}>Precision</span>.</>
                            }
                            className={styles.heading}
                            delay={100}
                            duration={0.6}
                            ease="power3.out"   
                            splitType="words"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="start"
                            tag="h1"
                            onLetterAnimationComplete={handleAnimationComplete}
                        /> */}
                        <h1 className={styles.heading}>
                            <BlurText
                                text="Where Tomorrow’s Security Meets Today’s Precision."
                                delay={400}
                                animateBy="words"
                                direction="bottom"
                                tag="span"
                                className={styles.textHeading}
                            />
                        </h1>
                        {/* <h1 className={styles.heading}>
                            Where Tomorrow’s <span className={styles.highlight}>Security</span> Meets <br />
                            Today’s <span className={styles.highlight}>Precision</span>.
                        </h1> */}
                        <div className={styles.actions}>
                            <a href="#experts" className="btn btn--primary">Talk to Our Experts<img src={Arrow} alt="Right-Arrow" /></a>
                            <a href="#resources" className="btn btn--secondary">
                                <img src={View} alt="View" />View Our Resources
                            </a>
                        </div>
                    </div>
                    <div className="globe">

                    </div>
                    {/* <div ref={ref} style={{ minHeight: '1px' }}>
                        {isVisible && (
                            <Suspense fallback={<div>Loading Globe...</div>}>
                                <MapRightSide />
                            </Suspense>
                        )}
                    </div> */}
                </div>
            </section>
        )
    }

    export default HeroSection
