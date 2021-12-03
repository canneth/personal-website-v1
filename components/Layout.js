
import NavBar from '@/components/nav-bar/NavBar';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div id='layout-container'>
      <NavBar className={styles.navBar}/>
      <div className={styles.mainColumn}>
        <main>
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;