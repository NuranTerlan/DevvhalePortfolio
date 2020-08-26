import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavigatorButton from "../navigator/index";
import SocialMedias from "../socmedias/index";
import { Logo, Cancel } from "../icons/index";
import { MENU } from "../../constants/index";
import useWindowSize from "./../../hooks/useWindowSize";
import { SIZE } from "./../../constants/index";
import Contact from "../contact";

import styles from "./header.module.css";

const Header = () => {
  const router = useRouter();
  const size = useWindowSize();

  const item = MENU.find((menuItem) => menuItem.path === router.pathname);
  const menuItems = MENU.filter(
    (menuItem) => menuItem.path !== router.pathname
  );

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    const layer = document.getElementById("layer");

    if (open === true) {
      layer.style.visibility = "hidden";
      layer.style.opacity = "0";
    }

    if (open === false) {
      layer.style.visibility = "visible";
      layer.style.opacity = "100%";
    }

    setOpen(!open);
  };

  return (
    <>
      <header className={styles.header}>
        <NavigatorButton onClick={() => toggleModal()}>
          <div className={styles.box}>
            {item.icon}
            {!(size.width < SIZE.MOBILE_SIZE) && <span>{item.title}</span>}
          </div>
        </NavigatorButton>
        <Link href="/home">
          <Logo className={styles.logo} />
        </Link>
        <SocialMedias />
      </header>
      <div className={styles.layer} id="layer" onClick={() => toggleModal()}>
        <div className={styles.menuModal}>
          <h1>Pages</h1>
          <div className={styles.menu}>
            {menuItems.map((menuItem) => {
              return (
                <Link key={menuItem.key} href={menuItem.path}>
                  <NavigatorButton down={false}>
                    <div className={styles.box}>
                      {menuItem.icon}
                      {!(size.width < SIZE.MOBILE_SIZE) && (
                        <span>{menuItem.title}</span>
                      )}
                    </div>
                  </NavigatorButton>
                </Link>
              );
            })}
          </div>
          <Contact className={styles.cancel} onClick={() => toggleModal()}>
            <Cancel />
          </Contact>
        </div>
      </div>
    </>
  );
};

export default Header;
