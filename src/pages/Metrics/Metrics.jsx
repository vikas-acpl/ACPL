import styles from './Metrics.module.css'
import Partners from '../../assets/svg/Partners.svg'
import Certificates from '../../assets/svg/Certificates.svg'
import Engineers from '../../assets/svg/Engineers.svg'
import Clients from '../../assets/svg/Clients.svg'


const Metrics = () => {
    return (
        <section className={styles.metrics}>
            <div className='container'>
                <div className={styles.statsGrid}>
                    <div className={styles.card}>
                        <img
                            src={Partners}
                            alt="Partners"
                            className={styles.statIcon}
                        />
                        <h3 className={styles.statNumber}>1M+</h3>
                        <p className={styles.statLabel}>Professional Services Hours</p>
                    </div>

                    <div className={styles.card}>
                        <img
                            src={Certificates}
                            alt="Certificates"
                            className={styles.statIcon}
                        />
                        <h3 className={styles.statNumber}>2100+</h3>
                        <p className={styles.statLabel}>Industry Certifications</p>
                    </div>

                    <div className={styles.card}>
                        <img
                            src={Engineers}
                            alt="Engineers"
                            className={styles.statIcon}
                        />
                        <h3 className={styles.statNumber}>350+</h3>
                        <p className={styles.statLabel}>Certified Engineers</p>
                    </div>

                    <div className={styles.card}>
                        <img
                            src={Clients}
                            alt="Clients"
                            className={styles.statIcon}
                        />
                        <h3 className={styles.statNumber}>400+</h3>
                        <p className={styles.statLabel}>Active Clients</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Metrics
