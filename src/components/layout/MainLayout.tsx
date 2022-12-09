import React from "react";
import styles from "./Container.module.scss";

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
