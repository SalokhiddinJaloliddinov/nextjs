import React from "react";
import { useRouter } from "next/router";
import { NavButton } from "./NavButton";
import { NAVIGATION_LINKS } from "src/constants";

const Nav = () => {
  const router = useRouter();
  return (
    <nav
      className="hidden lg:py-2 lg:flex lg:space-x-1 lg:px-32"
      aria-label="Global"
    >
      {NAVIGATION_LINKS.map((item) => (
        <NavButton path={router.asPath} obj={item} key={item.name} />
      ))}
    </nav>
  );
};

export default Nav;
