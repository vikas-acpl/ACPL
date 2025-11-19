import styles from "./HeroSection.module.css";
import Badge from '../../assets/svg/badge.svg'
import View from '../../assets/svg/view.svg'
import Arrow from '../../assets/svg/right-arrow.svg'
import StarBorder from '../../components/StarBorder';
import BlurText from "../../components/BlurText";
// import Globe from "../../components/Globe/Globe";
import ausMap from '../../assets/svg/ausmap.svg'
import { useEffect } from "react";

const HeroSection = () => {

    useEffect(() => {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
        // Optional cleanup function to dispose popovers on unmount
        return () => {
            popoverList.forEach(pop => pop.dispose());
        };
    }, []);


    const mapPoints = [
        { id: "darwin", label: "Darwin", threats: 28, left: "45%", top: "10%" },
        { id: "perth", label: "Perth", threats: 12, left: "8%", top: "60%" },
        { id: "adelaide", label: "Adelaide", threats: 19, left: "64%", top: "70%" },
        {
            id: "melbourne",
            label: "Melbourne",
            threats: 22,
            left: "78%",
            top: "79%",
        },
        { id: "brisbane", label: "Brisbane", threats: 18, left: "95%", top: "49%" },
    ];
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.background}></div>
                <div className={styles.content}>
                    <StarBorder
                        as="button"
                        className="custom-class"
                        color="#fff"
                        speed="4s"
                    >
                        <span className="badgeItem">
                            <img src={Badge} alt="Badge" />35 Years of Excellence
                        </span>
                    </StarBorder>
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
                    <div className={styles.actions}>
                        <a href="#contact-form" className="btn btn--primary">Talk to Our Experts<img src={Arrow} alt="Right-Arrow" /></a>
                        <a href="#resources" className="btn btn--secondary">
                            <img src={View} alt="View" />View Our Resources
                        </a>
                    </div>
                </div>
                {/* <div className={styles.globe}>
                    <Globe />
                </div> */}
                <div className={styles.map}>
                    <img
                        src={ausMap}
                        alt="Australia map"
                        className={styles.trustMapImg}
                    />
                    {mapPoints.map((p) => (
                        <button
                            key={p.id}
                            type="button"
                            className={`ripple ${styles.mapPin}`}
                            style={{ left: p.left, top: p.top }}
                            data-bs-toggle="popover"
                            data-bs-trigger="hover focus"
                            data-bs-placement="top"
                            title={p.label}
                            data-bs-content={`${p.threats} active threats`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
