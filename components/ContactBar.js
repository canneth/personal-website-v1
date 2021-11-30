
import ContactItem from "@/components/ContactItem";

import styles from './ContactBar.module.css';

function ContactBar() {
  return (
    <ul className={styles.listContainer}>
      <li className={styles.listItem}><ContactItem for='github' width={24} height={24} link=''/></li>
      <li className={styles.listItem}><ContactItem for='linkedin' width={24} height={24} link=''/></li>
      <li className={styles.listItem}><ContactItem for='instagram' width={24} height={24} link=''/></li>
      <li className={styles.listItem}><ContactItem for='gmail' width={24} height={24} link=''/></li>
    </ul>
  );
}


export default ContactBar;