import {
  BankIcon,
  HomeIcon,
  NavigatorIcon,
  UserIcon,
} from "src/components/icons";

export const NAVIGATION_LINKS = [
  {
    name: "Дашборд",
    icon: HomeIcon,
    href: "/",
    drop: false,
    current: true,
  },
  {
    name: "Расположения",
    icon: NavigatorIcon,
    href: "/test",
    drop: false,
    current: false,
  },
  {
    name: "Пользователи",
    icon: UserIcon,
    href: "/users",
    drop: false,
    current: false,
  },
  {
    name: "Банк",
    icon: BankIcon,
    href: "/bank",
    drop: true,
    current: false,
  },
];

export const USER_NAVIGATIONS = [
  { name: "Мой профиль", href: "#" },
  { name: "Настройки", href: "#" },
  { name: "Выйти", href: "#" },
];
