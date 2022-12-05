import React from 'react';
import styles from './Navigations.module.scss';
import { Navbar } from './Navbar';

const Header = () => {
  return (
    <div className={styles.main_header}>
      <Navbar />
    </div>
  );
};

export default Header;
