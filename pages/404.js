import React from "react";
import Link from "next/link";

import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>
        <span className="theme">Opss</span>{" "}
      </h1>
      <h1>
        Something <span className="white">wrong</span> here !
      </h1>
      <Link href="/home">
        <button className={styles.button}>Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
