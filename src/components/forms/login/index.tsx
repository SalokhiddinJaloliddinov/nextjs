import React from 'react';
import { Button } from '../../buttons/Button';

import styles from './Login.module.scss';

export const LoginForm = () => {
  return (
    <form>
      <div className={styles.form_group}>
        <label>Логин</label>
        <input className={styles.form_control} placeholder={'Введите логин'} />
      </div>
      <div className={styles.form_group}>
        <label>Пароль</label>
        <input className={styles.form_control} placeholder={'Введите пароль'} type={'password'} />
      </div>
      <Button>Войти</Button>
    </form>
  );
};
