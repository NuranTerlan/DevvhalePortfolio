import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>
        Nuran Terlan Design |{" "}
        <Link href="/home">
          <span className="theme">DEVVHALE</span>
        </Link>{" "}
        2020
      </h1>
    </footer>
  );
};

export default Footer;
