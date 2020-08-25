import React from "react";
import NavigatorButton from "../navigator/index";
import SocialMedias from "../socmedias/index";
import { Logo } from "../icons/index";
import { MENU } from "../../constants/index";
import useWindowSize from "./../../hooks/useWindowSize";
import { SIZE } from "./../../constants/index";

import styles from "./header.module.css";

const Header = () => {
  const item = MENU.find((menuItem) => menuItem.key === "home");

  const size = useWindowSize();

  return (
    <header className={styles.header}>
      {
        <NavigatorButton>
          <div className={styles.box}>
            {item.icon}
            {!(size.width < SIZE.MOBILE_SIZE) && <span>{item.title}</span>}
          </div>
        </NavigatorButton>
      }
      <Logo className={styles.logo} />
      <SocialMedias />
    </header>
  );
};

export default Header;
