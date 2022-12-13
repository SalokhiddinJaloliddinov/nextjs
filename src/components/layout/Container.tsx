import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`lg:px-32 ${className}`}>{children}</div>;
};

export default Container;
