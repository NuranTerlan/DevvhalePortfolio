import React from "react";
import cn from "classnames";

import styles from "./privilege.module.css";
import { Bolt } from "../icons";

const Privilege = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.item, className)} {...props}>
      <Bolt />
      {children}
    </div>
  );
};

export default Privilege;
