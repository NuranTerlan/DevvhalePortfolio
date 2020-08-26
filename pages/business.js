import React from "react";
import Head from "next/head";
import Layout from "./../components/layout/index";
// import useWindowSize from "./../hooks/useWindowSize";
import Section from "./../components/section/index";
import Bound from "./../components/bound";
import Title from "./../components/title/index";
import Quote from "./../components/quote/index";

import styles from "./../page-styles/business.module.css";

const Business = () => {
  return (
    <>
      <Head>
        <title>Business &sdot; DEVVHALE Contract</title>
        <meta
          name="description"
          content="DEVVHALE is Freelance Full Stack Developer and in this page you can order your dream website and enjoy our special offers just for you. DEVVHALE 2020 !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="iKC2hErCRhHDyAcM9g93KcaEYgPDTORTKjsCf6nzYas"
        />
      </Head>

      <Layout>
        <Section>
          <h1>
            Business Offers and <span className="theme">Job Promotion</span>
          </h1>
        </Section>
      </Layout>
    </>
  );
};

export default Business;
