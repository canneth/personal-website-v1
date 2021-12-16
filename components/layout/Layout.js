
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
      const main = document.getElementById('main');
      if (windowWidth > breakpoint) main.classList.remove('blur');
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='layout-container' className={`${styles.layoutContainer} ${props.className}`}>
      {
        mobileLayout ?
          <NavBarMobile className={styles.navBar} />
          :
          <NavBar className={styles.navBar} />
      }
      <main id='main' className={styles.main}>
        {props.children}
      <Footer className={styles.footer} />
      </main>
    </div>
  );
}

Layout.propTypes = {
  className: PropTypes.string
}

export default Layout;