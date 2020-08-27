import React from "react";
import cn from "classnames";

import styles from "./bound.module.css";
import { ChevronDown } from "../icons";

const Bound = ({ isPink = false, isDown = false, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      {isDown && (
        <span className={cn([styles.down, isPink && styles.pink])}>
          <ChevronDown />
        </span>
      )}
      <div className={styles.line}></div>
    </div>
  );
};

export default Bound;
