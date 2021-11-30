
import { Fragment } from 'react';

import NavBar from '@/components/NavBar';
import HeroBackground from '@/components/HeroBackground';

function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <HeroBackground />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;