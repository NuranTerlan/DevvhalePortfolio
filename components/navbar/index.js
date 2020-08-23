import React from "react";
import { Logo } from "../icons/index";

import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />
    </div>
  );
};

export default NavBar;
