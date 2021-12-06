
import ContactItem from "@/components/contact-bar/ContactItem";
import styles from './ContactBar.module.css';

function ContactBar(props) {
  return (
    <ul className={`${styles.listContainer} ${props.className}`}>
      <li className={styles.listItem}>
        <ContactItem for='github' widthExpression='clamp(22px, 1.8vw, 26px)' link=''/>
      </li>
      <li className={styles.listItem}>
        <ContactItem for='linkedin' widthExpression='clamp(22px, 1.8vw, 26px)' link=''/>
      </li>
      <li className={styles.listItem}>
        <ContactItem for='instagram' widthExpression='clamp(22px, 1.8vw, 26px)' link=''/>
      </li>
      <li className={styles.listItem}>
        <ContactItem for='gmail' widthExpression='clamp(22px, 1.8vw, 26px)' link=''/>
      </li>
    </ul>
  );
}


export default ContactBar;