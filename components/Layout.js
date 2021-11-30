
import NavBar from '@/components/NavBar';
import HeroBackground from '@/components/HeroBackground';

import styles from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <NavBar />
      <HeroBackground />
      <div className={styles.mainColumn}>
        <main>
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout;