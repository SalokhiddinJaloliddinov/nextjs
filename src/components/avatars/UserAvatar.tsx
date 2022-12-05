import React from 'react';
import styles from 'components/navigations/header/Navigations.module.scss';

import avatar from '__assets__/olimjon.jpg';

export const UserAvatar = () => {
  return <img alt="" src={avatar.src} className={styles.profile_image} />;
};
