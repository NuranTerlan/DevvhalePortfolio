import React from "react";
import { ChevronDown } from "../icons/index";

import cn from "classnames";

import styles from "./navigator-button.module.css";

const NavigatorButton = ({ down = true, children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
      {down && <ChevronDown className={styles.downSvg} />}
    </button>
  );
};

export default NavigatorButton;
