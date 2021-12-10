
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.overallContainer}>
      <p className={styles.text}>
        Designed and built by Canneth
        <pre>Built with NextJS    |    Deployed on Vercel</pre>
      </p>
    </footer>
  );
}

export default Footer;