import React from "react";

import styles from "./LoginPage.module.scss";
import AnorLogo from "../../logos/AnorLogo";

interface LoginPageLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({
  children,
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <AnorLogo />
          <h2>Добро пожаловать!</h2>
          <h6>Войдите, чтобы продолжить</h6>
          <div className={styles.form}>{children}</div>
          <div className={styles.card_footer}>
            <p>
              <a href="#">Забыли пароль?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
