// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/acpl-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <a href="/"><img src={logo} alt="ACPL" className={styles.logoImage} /></a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#services" className={styles.navLink}>Services</a></li>
            <li><a href="#products" className={styles.navLink}>Products</a></li>
            <li>
              <a
                href="https://acpl.com/"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                ACPL Global
              </a>
            </li>
          </ul>
          <div className={styles.ctaButton}>
            <a href="#contact-form" className="btn btn--primary">Contact Us</a>
          </div>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.mobileNavLinks}>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#products" onClick={closeMenu}>Products</a></li>
              <li>
                <a
                  href="https://acpl.com/"
                  onClick={closeMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACPL Global Website
                </a>
              </li>
              <li>
                <a href="#assessment" className="btn btn--primary" onClick={closeMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;