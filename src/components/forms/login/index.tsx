import React from "react";

import styles from "./Login.module.scss";
import { Button } from "../../buttons/Button";

export const LoginForm = () => {
  return (
    <form>
      <div className={styles.form_group}>
        <label>Логин</label>
        <input className={styles.form_control} placeholder={"Введите логин"} />
      </div>
      <div className={styles.form_group}>
        <label>Пароль</label>
        <input
          className={styles.form_control}
          placeholder={"Введите пароль"}
          type={"password"}
        />
      </div>
      <button
        className={
          "bg-gray-800 text-white rounded py-2 w-full hover:bg-gray-900 transition-colors"
        }
      >
        Войти
      </button>
    </form>
  );
};
