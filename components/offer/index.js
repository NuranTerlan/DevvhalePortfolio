import React from "react";
import cn from "classnames";

import styles from "./offer.module.css";

const OfferCard = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
      <a
        href="https://www.fiverr.com/devvha13/create-static-spa-website-with-react-or-nextjs-for-you"
        target="_blank"
        rel="noopener"
      >
        <button>Order Now</button>
      </a>
    </div>
  );
};

export default OfferCard;
