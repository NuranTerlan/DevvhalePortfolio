import React from "react";
import Head from "next/head";
import Layout from "./../components/layout/index";
// import useWindowSize from "./../hooks/useWindowSize";
import Section from "./../components/section/index";
import Bound from "./../components/bound";
import Title from "./../components/title/index";
import Quote from "./../components/quote/index";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About &sdot; DEVVHALE Info</title>
        <meta
          name="description"
          content="About the Creator and Founder of DEVVHALE. DEVVHALE 2020 !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="iKC2hErCRhHDyAcM9g93KcaEYgPDTORTKjsCf6nzYas"
        />
      </Head>

      <Layout>
        <Section></Section>
      </Layout>
    </>
  );
};

export default AboutMe;
