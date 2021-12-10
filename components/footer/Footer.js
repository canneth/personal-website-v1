
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.overallContainer}>
      <p className={styles.text}>Designed and built by Canneth</p>
      <pre className={styles.text}>Built with NextJS    |    Deployed on Vercel</pre>
    </footer>
  );
}

export default Footer;