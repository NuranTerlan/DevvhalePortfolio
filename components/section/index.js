import React from "react";
import cn from "classnames";
import useWindowSize from "./../../hooks/useWindowSize";

import styles from "./section.module.css";

const Section = ({ children, className, ...props }) => {
  return (
    <section className={cn(styles.section, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
