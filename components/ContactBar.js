
import ContactItem from "@/components/ContactItem";

import styles from './ContactBar.module.css';

function ContactBar(props) {
  return (
    <ul className={`${styles.listContainer} ${props.className}`}>
      <li className={styles.listItem}><ContactItem for='github' width={29} height={29} link=''/></li>
      <li className={styles.listItem}><ContactItem for='linkedin' width={29} height={29} link=''/></li>
      <li className={styles.listItem}><ContactItem for='instagram' width={29} height={29} link=''/></li>
      <li className={styles.listItem}><ContactItem for='gmail' width={29} height={29} link=''/></li>
    </ul>
  );
}


export default ContactBar;