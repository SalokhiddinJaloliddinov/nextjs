import React from "react";
import {
  HomeIcon,
  NavigatorIcon,
  ArrowDropdownIcon,
  UserIcon,
  BankIcon,
} from "src/components/icons";
import { useRouter } from "next/router";
import Link from "next/link";

//styles
import styles from "./Menu.module.scss";
import variables from "styles/variables.module.scss";

const menu_items = [
  {
    text: "Dashboard",
    icon: HomeIcon,
    path: "/",
    drop: false,
  },
  {
    text: "Расположения",
    icon: NavigatorIcon,
    path: "/test",
    drop: false,
  },
  {
    text: "Пользователи",
    icon: UserIcon,
    path: "/users",
    drop: false,
  },
  {
    text: "Банк",
    icon: BankIcon,
    path: "/bank",
    drop: true,
  },
];

const Menu = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className={styles.sticky}>
      <div className={styles.app_menu}>
        <div className={styles.main_menu}>
          <ul className={styles.menu}>
            {menu_items.map((obj, id) => (
              <li className={styles.slide} key={id}>
                <Link
                  className={
                    router.asPath === obj.path
                      ? styles.menu__item__active
                      : styles.menu__item
                  }
                  href={obj.path}
                >
                  <obj.icon
                    color={
                      router.asPath === obj.path
                        ? variables.primaryColor
                        : "#4a4a69 "
                    }
                    size={20}
                  />
                  <span className={styles.menu__label}>{obj.text}</span>
                  {obj.drop ? (
                    <ArrowDropdownIcon size={15} color={"#9ca2a9"} />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
