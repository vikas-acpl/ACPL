import { useState, useEffect } from "react";
import styles from './ScrollToTop.module.css'
import TopArrow from '../../assets/svg/TopArrow.svg'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className={styles.scrollToTopBtn}
      aria-label="Scroll to top"
    >
      <img src={TopArrow} className={styles.scrollToTopIcon} alt="To top" />
    </button>
  ) : null;
};

export default ScrollToTop;
