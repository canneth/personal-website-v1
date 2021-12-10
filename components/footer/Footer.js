
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer(props) {
  return (
    <footer className={`${styles.overallContainer} ${props.className}`}>
      <p className={styles.text}>Designed and built by Canneth</p>
      <pre className={styles.text}>Built with NextJS    |    Deployed on Vercel</pre>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer;