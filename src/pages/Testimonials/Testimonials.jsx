import React from 'react'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Testimonials.module.css'
import StarBorder from '../../components/StarBorder';
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard';
import { useState } from 'react';

const Testimonials = () => {

    const testimonialsData = [
        {
            text: (
                <>
                    ACPL team is extremely well versed with the cybersecurity landscape. Their advice has allowed us to be early adopters technologies like NDR, SASE and DSPM.
                    Their sense of urgency has allowed me to vouch for them for over a decade now.
                </>
            ),
            name: "CISO",
            title: "FSI Organisation",
            img: avatar,
        },
        {
            text: (
                <>
                    Some immense scale projects have been completed by the ACPL team within weeks. They helped us build a service platform that suits our organisation's needs. Our core ACPL representatives have not changed over 15 years which has added a lot of stability to our engagement.
                </>
            ),
            name: "CTO",
            title: "Phramacuetical Organisation",
            img: avatar2,
        },
        {
            text: (
                <>
                    The attention to detail and a vast partner ecosystem allowed me to really be confident about my procurement and deployment. I could focus on running the OT and IT portion while security was taken care of by team ACPL.
                </>
            ),
            name: "CRO",
            title: "Crypto Brokerage",
            img: avatar3,
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        loop: true,
        breakpoints: {
            "(min-width: 480px)": {
                slides: { perView: 1, spacing: 20 },
            },
             "(min-width: 768px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 20 },
            },
        },
        slides: { perView: 1, spacing: 20 },
    });


    return (
        <section className={styles.testimonials}>
            <div className={`container ${styles.testimonialsContainer}`}>
                <div className={`sectionHeader ${styles.partnerHeader}`}>   
                    <div className='badge'>
                        <StarBorder
                            as="button"
                            className="custom-class"
                            color="#fff"
                            speed="4s"
                        >
                            <span className={styles.badge}>
                                Testimonials
                            </span>
                        </StarBorder>
                    </div>
                    <h2 className="sectionTitle">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="sectionSubtitle">
                        Our customers speak for us — read how ACPL’s end-to-end cybersecurity services deliver
                        <br className="responsive-br" />
                        value, protection, and trust across industries and geographies.
                    </p>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {testimonialsData.map((t, i) => (
                        <SpotlightCard key={i} className={`keen-slider__slide custom-spotlight-card ${styles.card}`} spotlightColor="rgba(255, 255, 255, 0.3)">
                            <div><p className={styles.quoteMark}>“</p>
                                <p className={styles.text}>{t.text}</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <img src={t.img} alt={t.name} className={styles.avatar} />
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.title}>{t.title}</div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <div className="dots desktopView">
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Testimonials
