import React from "react";
import Contact from "./../contact/index";
import { CONTACTS } from "./../../constants/index";

import cn from "classnames";

import styles from "./socmedias.module.css";

const SocialMedias = ({ className, ...props }) => {
  return (
    <nav className={cn(styles.contacts, className)} {...props}>
      {CONTACTS.map((contact) => {
        return <Contact key={contact.key}>{contact.icon}</Contact>;
      })}
    </nav>
  );
};

export default SocialMedias;
