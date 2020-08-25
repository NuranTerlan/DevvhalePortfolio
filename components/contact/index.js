import React from "react";
import cn from "classnames";

import styles from "./contact.module.css";

const Contact = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.button, className)} {...props}>
      {children}
    </div>
  );
};

export default Contact;
