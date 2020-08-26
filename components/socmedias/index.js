import React, { useState } from "react";
import Contact from "./../contact/index";
import { CONTACTS } from "./../../constants/index";
import useWindowSize from "./../../hooks/useWindowSize";
import { Burger, Cancel } from "../icons/index";

import cn from "classnames";

import styles from "./socmedias.module.css";

const SocialMedias = ({ className, ...props }) => {
  const size = useWindowSize();

  const [open, setOpen] = useState(false);

  const toggleMediaModal = () => {
    const layer = document.getElementById("mediaLayer");

    if (open === true) {
      layer.style.visibility = "hidden";
      layer.style.opacity = "0";
    }

    if (open === false) {
      layer.style.visibility = "visible";
      layer.style.opacity = "100%";
    }

    setOpen(!open);
  };

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
    <>
      <Contact className={styles.burger} onClick={() => toggleMediaModal()}>
        <Burger />
      </Contact>
      <div
        className={styles.layer}
        id="mediaLayer"
        onClick={() => toggleMediaModal()}
      >
        <div className={styles.menuModal}>
          <h1>Social Medias</h1>
          <div className={styles.menu}>
            {CONTACTS.map((contact) => {
              return (
                <a href={contact.link} target="_blank" rel="noopener">
                  <Contact aria-label={contact.key} key={contact.key}>
                    {contact.icon}
                  </Contact>
                </a>
              );
            })}
          </div>
          <Contact className={styles.cancel} onClick={() => toggleMediaModal()}>
            <Cancel />
          </Contact>
        </div>
      </div>
    </>
  );
};

export default SocialMedias;
