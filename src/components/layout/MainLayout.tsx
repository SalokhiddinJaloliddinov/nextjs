import React from 'react';
import Container from './Container';
import Header from '../navigations/header/Header';
import Menu from '../navigations/menu/Menu';

type MainLayoutProps = {
  children: JSX.Element;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Menu />
      {children}
    </Container>
  );
};
