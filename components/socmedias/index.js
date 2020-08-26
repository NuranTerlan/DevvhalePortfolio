import React from "react";
import Contact from "./../contact/index";
import { CONTACTS } from "./../../constants/index";
import useWindowSize from "./../../hooks/useWindowSize";
import { Burger } from "../icons";

import cn from "classnames";

import styles from "./socmedias.module.css";

const SocialMedias = ({ className, ...props }) => {
  const size = useWindowSize();

  return size.width > 880 ? (
    <nav className={cn(styles.contacts, className)} {...props}>
      {CONTACTS.map((contact) => {
        return (
          <a href={contact.link} target="_blank" rel="noopener">
            <Contact aria-label={contact.key} key={contact.key}>
              {contact.icon}
            </Contact>
          </a>
        );
      })}
    </nav>
  ) : (
    <Contact className={styles.burger}>
      <Burger />
    </Contact>
  );
};

export default SocialMedias;
