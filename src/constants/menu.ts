import {
  BankIcon,
  CaseIcon,
  FileIcon,
  HomeIcon,
  IncidentIcon,
  NavigatorIcon,
  UserIcon,
} from 'src/components/icons';
import { LocationIcon } from 'src/components/icons/LocationIcon';

const MENU_ITEM_DASHBOARD = {
  name: 'Дашборд',
  icon: HomeIcon,
  href: '/',
  drop: false,
  current: true,
};

const MENU_ITEM_LOCATIONS = {
  name: 'Расположения',
  icon: LocationIcon,
  href: '/locations',
  drop: false,
  current: false,
};

const MENU_ITEM_USERS = {
  name: 'Пользователи',
  icon: UserIcon,
  href: '/users',
  drop: true,
  current: false,
};

const MENU_ITEM_BANK = {
  name: 'Банк',
  icon: BankIcon,
  href: '/bank',
  drop: true,
  current: false,
};

const MENU_ITEM_RAPORTS = {
  name: 'Рапорты',
  icon: FileIcon,
  href: '/bank',
  drop: true,
  current: false,
};
const MENU_ITEM_INCIDENTS = {
  name: 'Инциденты',
  icon: IncidentIcon,
  href: '/bank',
  drop: true,
  current: false,
};

const MENU_ITEM_WORK = {
  name: 'Моя Работа',
  icon: CaseIcon,
  href: '/my-work',
  drop: true,
  current: false,
};

export {
  MENU_ITEM_DASHBOARD,
  MENU_ITEM_LOCATIONS,
  MENU_ITEM_INCIDENTS,
  MENU_ITEM_RAPORTS,
  MENU_ITEM_USERS,
  MENU_ITEM_BANK,
  MENU_ITEM_WORK,
};
