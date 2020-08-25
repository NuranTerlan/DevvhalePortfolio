import React from "react";
import { ChevronDown } from "../icons/index";

import cn from "classnames";

import styles from "./navigator-button.module.css";

const NavigatorButton = ({ children, className, ...props }) => {
  return (
    <nav className={cn(styles.button, className)} {...props}>
      {children}
      <ChevronDown className={styles.downSvg} />
    </nav>
  );
};

export default NavigatorButton;
