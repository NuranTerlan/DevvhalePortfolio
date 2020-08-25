import React from "react";
import cn from "classnames";

import styles from "./title.module.css";

const Title = ({ children, className, ...props }) => {
  return (
    <h1 className={cn(styles.title, className)} {...props}>
      {children}
    </h1>
  );
};

export default Title;
