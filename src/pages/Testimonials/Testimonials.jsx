import React from 'react'
import styles from './Testimonials.module.css'
import StarBorder from '../../components/StarBorder';
import avatar from '../../assets/avatar.png'

const Testimonials = () => {

    const testimonialsData = [
        {
            text: (
                <>
                    ACPL team is extremely well versed with the cybersecurity landscape. Their advice has allowed us to be early adopters technologies like NDR, SASE and DSPM.
                    Their sense of urgency has allowed me to vouch for them for over a decade now.
                </>
            ),
            name: "John Williams",
            title: "Lead designer",
            img: avatar,
        },
        {
            text: (
                <>
                    Some immense scale projects have been completed by the ACPL team within weeks. They helped us build a service platform that suits our organisation's needs. Our core ACPL representatives have not changed over 15 years which has added a lot of stability to our engagement.
                </>
            ),
            name: "John Williams",
            title: "Lead designer",
            img: avatar,
        },
        {
            text: (
                <>
                    The attention to detail and a vast partner ecosystem allowed me to really be confident about my procurement and deployment. I could focus on running the OT and IT portion while security was taken care of by team ACPL.
                </>
            ),
            name: "John Williams",
            title: "Lead designer",
            img: avatar,
        }
    ]

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
                        <br />
                        value, protection, and trust across industries and geographies.
                    </p>
                </div>
                <div className={styles.testimonialsCards}>
                    {testimonialsData.map((t, i) => (
                        <div className={styles.card} key={i}>
                            <div><p className={styles.quoteMark}>“</p>
                                <p className={styles.text}>{t.text}</p></div>
                            <div className={styles.cardFooter}>
                                <img src={t.img} alt={t.name} className={styles.avatar} />
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.title}>{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
