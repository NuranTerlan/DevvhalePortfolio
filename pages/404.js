import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "./../page-styles/error.module.css";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>ERROR &sdot; DEVVHALE 2020</title>
        <meta
          name="description"
          content="About the Creator and Founder of DEVVHALE. DEVVHALE 2020 !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
    </>
  );
};

export default ErrorPage;
