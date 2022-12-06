import React from "react";
import Container from "./Container";
import Header from "../navigations/header/Header";
import Menu from "../navigations/menu/Menu";
import { inspect } from "util";
import styles from "./Container.module.scss";

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <Menu />
      {children}
    </div>
  );
};
