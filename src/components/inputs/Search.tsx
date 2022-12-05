import React from 'react';
import styles from './Inputs.module.scss';

import SearchIcon from '../icons/SearchIcon';

const Search = () => {
  return (
    <div className={styles.search_main_header}>
      <input className={styles.search_input} placeholder="Поиск..." />
      <button className={styles.search_button}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
