import React from "react";
import Head from "next/head";
import Layout from "./../components/layout/index";
// import useWindowSize from "./../hooks/useWindowSize";
import Section from "./../components/section/index";
import Bound from "./../components/bound";
import Title from "./../components/title/index";
import Quote from "./../components/quote/index";

import styles from "./../page-styles/business.module.css";
import OfferCard from "../components/offer";
import { Time, Sync, Monitors } from "../components/icons";

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
        <Section className={styles.section1}>
          <Title>
            My <span className="theme">Specific</span> offers for you
          </Title>
          <Section className={styles.cards}>
            <OfferCard>
              <h1>Basic</h1>
              <h2>
                Package : <span className="pink">Weaksite</span>
              </h2>
              <p>
                Your Website'll be good, but layout'll look like other common
                web layouts
              </p>
              <div>
                <div>
                  <Time />
                  <h3>2 Days Delivery</h3>
                </div>
              </div>
              <h1 className={styles.price}>$25</h1>
            </OfferCard>
            <OfferCard>
              <h1>Standard</h1>
              <h2>
                Package : <span className="pink">Special</span>
              </h2>
              <p>
                Special Design'll be better rather than common ones. Make your
                product more attractive !
              </p>
              <div>
                <div>
                  <Time />
                  <h3>5 Days Delivery</h3>
                </div>
              </div>
              <h1 className={styles.price}>$50</h1>
            </OfferCard>
            <OfferCard>
              <h1>Premium</h1>
              <h2>
                Package : <span className="pink">Ultimate</span>
              </h2>
              <p>
                This premium package offer Amazing Website just fit your dream.
                Package include revision as well
              </p>
              <div>
                <div>
                  <Time />
                  <h3>7 Days Delivery</h3>
                </div>
                <div>
                  <Sync />
                  <h3>1 Revision</h3>
                </div>
              </div>
              <h1 className={styles.price}>$100</h1>
            </OfferCard>
          </Section>
          <Quote quote={false} className={styles.extrainfo}>
            You can get an extra <span className="white">fast delivery</span>,{" "}
            <span className="white">revision</span> and{" "}
            <span className="white">source code</span> for an extra paid !
          </Quote>
        </Section>
        <Bound isDown />
        <Section className={styles.section2}>
          <h1>
            Now I’m working on <span className="pink">Fiverr</span> as{" "}
            <span className="theme">Freelance Front-End Developer</span>, and I
            give you some paid Web Services such as{" "}
            <span className="theme">Single Page Applications</span> with{" "}
            <span className="blue">React</span> or{" "}
            <span className="pink">NextJs</span> etc. My goal on that offers is
            to convert my skills the <span className="theme">revenue</span> and
            gain <span className="theme">more experience</span> ...
          </h1>
          <Monitors />
        </Section>
      </Layout>
    </>
  );
};

export default Business;
