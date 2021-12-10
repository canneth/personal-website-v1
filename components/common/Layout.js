
import NavBar from '@/components/nav-bar/NavBar';
import Footer from '@/components/footer/Footer';
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
      <Footer />
    </div>
  );
}

export default Layout;