import React from "react";
import cn from "classnames";

import styles from "./contact.module.css";

const Contact = ({ isRef = true, children, className, ...props }) => {
  return isRef === true ? (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  ) : (
    <div className={cn(styles.button, className)} {...props}>
      {children}
    </div>
  );
};

export default Contact;
