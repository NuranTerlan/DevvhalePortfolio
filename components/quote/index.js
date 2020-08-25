import React from "react";
import cn from "classnames";
import { Quotation } from "../icons";

import styles from "./quote.module.css";

const Quote = ({ children, className, ...props }) => {
  return (
    <article className={cn(styles.article, className)} {...props}>
      <Quotation />
      {children}
    </article>
  );
};

export default Quote;
