import React from 'react';

import styles from './Inputs.module.scss';

export const PasswordField = () => {
  return (
    <input className={styles.password_field} placeholder={'Введите пароль'} type={'password'} />
  );
};
