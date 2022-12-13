import React from 'react';
import { useRouter } from 'next/router';
import { NavButton } from './NavButton';
import { NAVIGATION_LINKS } from 'src/constants';
import Container from 'src/components/layout/Container';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="hidden lg:py-2 lg:flex lg:space-x-1" aria-label="Global">
      <Container>
        {NAVIGATION_LINKS.map((item) => (
          <NavButton path={router.asPath} obj={item} key={item.name} />
        ))}
      </Container>
    </nav>
  );
};

export default Nav;
