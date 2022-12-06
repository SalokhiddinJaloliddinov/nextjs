import React from "react";
import Search from "src/components/inputs/Search";
import Logo from "src/components/logos/Logo";
import NavItems from "./NavItems";
import { SdLogo } from "src/components/logos/SdLogo";
import Container from "src/components/layout/Container";

// styles
import styles from "./Navigations.module.scss";
import variables from "styles/variables.module.scss";

export const Navbar = () => {
  return (
    <Container>
      <div className={styles.header_left}>
        <SdLogo color={variables.primaryColor} />
        <Search />
      </div>
      <div className={styles.header_right}>
        <div className={styles.navbar_right}>
          <div className={styles.navbar_collapse}>
            <NavItems />
          </div>
        </div>
      </div>
    </Container>
  );
};
