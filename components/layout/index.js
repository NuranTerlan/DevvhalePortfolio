import React from "react";
import Header from "./../header/index";
import Footer from "./../footer/index";
import cn from "classnames";

import styles from "./layout.module.css";

const Layout = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.layout, className)} {...props}>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
