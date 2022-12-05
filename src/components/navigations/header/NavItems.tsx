import React from 'react';
import { UserAvatar } from 'components/avatars/UserAvatar';
import {
  BellIcon,
  FullScreenIcon,
  GlobusIcon,
  MailIcon,
  MoonIcon,
  SettingsIcon,
} from 'components/icons';

import styles from './Navigations.module.scss';

interface NavigationType {
  href: string;
  icon: JSX.Element | JSX.Element[];
}

const navigation = [
  {
    path: '',
    icon: GlobusIcon,
  },
  {
    path: '',
    icon: MoonIcon,
  },
  {
    path: '',
    icon: MailIcon,
  },
  {
    path: '',
    icon: BellIcon,
  },
  {
    path: '',
    icon: FullScreenIcon,
  },
  {
    path: '',
    icon: UserAvatar,
  },
  {
    path: '',
    icon: SettingsIcon,
  },
];

const NavItems = () => {
  return (
    <ul className={styles.nav}>
      {navigation.map((obj, id) => (
        <li className={styles.nav_item} key={id}>
          <a className={styles.nav_link}>
            <obj.icon color="#7b8191" size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
