
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div id='layout-container'>
      <NavBar className={styles.navBar}/>
      <main>
        <div className={styles.mainColumn}>
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default Layout;