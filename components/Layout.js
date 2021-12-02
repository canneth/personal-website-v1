
import NavBar from '@/components/NavBar';

import styles from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <NavBar className={styles.navBar}/>
      <div className={styles.mainColumn}>
        <main>
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout;