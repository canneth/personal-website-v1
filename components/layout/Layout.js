
import { useState, useEffect } from 'react';
import NavBar from '@/components/nav-bar/NavBar';
import NavBarMobile from '@/components/nav-bar/NavBarMobile';
import Footer from '@/components/footer/Footer';
import styles from './Layout.module.css';

function Layout(props) {

  const [mobileLayout, setMobileLayout] = useState(false);

  useEffect(() => {
    const breakpoint = 800;
    function handleResize() {
      const { innerWidth: windowWidth } = window;
      setMobileLayout(windowWidth <= breakpoint);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='layout-container' className={styles.layoutContainer}>
      {
        mobileLayout ?
          <NavBarMobile className={styles.navBar} />
          :
          <NavBar className={styles.navBar} />
      }
      <main className={styles.mainColumn}>
        {props.children}
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Layout;