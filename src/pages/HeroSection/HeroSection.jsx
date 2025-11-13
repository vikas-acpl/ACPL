import styles from "./HeroSection.module.css";
import Badge from '../../assets/svg/badge.svg'
import View from '../../assets/svg/view.svg'
import Arrow from '../../assets/svg/right-arrow.svg'
import StarBorder from '../../components/StarBorder';
import BlurText from "../../components/BlurText";
import Globe from "../../components/Globe/Globe";

const HeroSection = () => {
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
                        <span className={styles.badge}>
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
                        <a href="#experts" className="btn btn--primary">Talk to Our Experts<img src={Arrow} alt="Right-Arrow" /></a>
                        <a href="#resources" className="btn btn--secondary">
                            <img src={View} alt="View" />View Our Resources
                        </a>
                    </div>
                </div>
                <div className={styles.globe}>
                    <Globe />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
