import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.primary}>{children}</button>;
};
