import React from "react";
import cn from "classnames";
import { Quotation } from "../icons";

import styles from "./quote.module.css";

const Quote = ({ quote = true, children, className, ...props }) => {
  return (
    <article className={cn(styles.article, className)} {...props}>
      {quote && <Quotation />}
      <h1>{children}</h1>
    </article>
  );
};

export default Quote;
