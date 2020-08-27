import React from "react";
import cn from "classnames";
import { Key } from "../icons/index";

import styles from "./certificate.module.css";

const CertificateBox = ({
  name,
  issuer,
  credential,
  source,
  className,
  ...props
}) => {
  return (
    <button className={cn(styles.box, className)} {...props}>
      <div className={styles.image}>
        <img src={source} alt={name} />
      </div>
      <div className={styles.info}>
        <h1>{name}</h1>
        <h1>{issuer}</h1>
        <div className={styles.key}>
          <Key />
          <h2>{credential}</h2>
        </div>
      </div>
    </button>
  );
};

export default CertificateBox;
