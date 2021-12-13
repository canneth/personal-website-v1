
import PropTypes from 'prop-types';
import ContactItem from "@/components/contact-bar/ContactItem";
import styles from './ContactBar.module.css';

function ContactBar(props) {
  return (
    <ul className={`${styles.listContainer} ${props.className}`}>
      <li className={styles.listItem}>
        <ContactItem
          for='github'
          widthExpression='clamp(18px, 2.5vw, 26px)'
          link='https://github.com/canneth'
        />
      </li>
      <li className={styles.listItem}>
        <ContactItem
          for='linkedin'
          widthExpression='clamp(18px, 2.5vw, 26px)'
          link='https://www.linkedin.com/in/canneth-ho-1bb754160/'
        />
      </li>
      <li className={styles.listItem}>
        <ContactItem
          for='instagram'
          widthExpression='clamp(18px, 2.5vw, 26px)'
          link='https://www.instagram.com/chjrwithac/'
        />
      </li>
      <li className={styles.listItem}>
        <ContactItem
          for='gmail'
          widthExpression='clamp(18px, 2.5vw, 26px)'
          link='mailto:canneth.ho@gmail.com?subject=Hello%20From%20The%20Other%20Side!'
        />
      </li>
    </ul>
  );
}

ContactBar.propTypes = {
  className: PropTypes.string
}

export default ContactBar;