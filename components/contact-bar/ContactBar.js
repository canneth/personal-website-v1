
import ContactItem from "@/components/contact-bar/ContactItem";
import styles from './ContactBar.module.css';

function ContactBar(props) {
  return (
    <ul className={`${styles.listContainer} ${props.className}`}>
      <li className={styles.listItem}><ContactItem for='github' width={20} height={20} link=''/></li>
      <li className={styles.listItem}><ContactItem for='linkedin' width={20} height={20} link=''/></li>
      <li className={styles.listItem}><ContactItem for='instagram' width={20} height={20} link=''/></li>
      <li className={styles.listItem}><ContactItem for='gmail' width={20} height={20} link=''/></li>
    </ul>
  );
}


export default ContactBar;