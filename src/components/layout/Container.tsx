import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default Container;
