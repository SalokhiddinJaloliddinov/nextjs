import React from 'react';
import Search from 'components/inputs/Search';
import Logo from 'components/logos/Logo';
import NavItems from './NavItems';

// styles
import styles from './Navigations.module.scss';
import { SdLogo } from '../../logos/SdLogo';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_left}>
        <SdLogo />
        <Search />
      </div>
      <div className={styles.header_right}>
        <div className={styles.navbar_right}>
          <div className={styles.navbar_collapse}>
            <NavItems />
          </div>
        </div>
      </div>
    </div>
  );
};
