import React from "react";
import Head from "next/head";
import Layout from "./../components/layout/index";
// import useWindowSize from "./../hooks/useWindowSize";
import Section from "./../components/section/index";
import Bound from "./../components/bound";
import Title from "./../components/title/index";
import Quote from "./../components/quote/index";

import {
  Stepping,
  Html5,
  Javascript,
  Css3,
  Marketing,
  Helpful,
} from "../components/icons";

import styles from "./home.module.css";
import SvgReact from "./../components/icons/React";
import Privilege from "../components/privilege";

const HomePage = () => {
  // const size = useWindowSize();

  return (
    <>
      <Head>
        <title>Home &sdot; DEVVHALE Promotional Announcements</title>
        <meta
          name="description"
          content="This is the official Promotional Website of DEVVHALE. DEVVHALE is a new brand. Creator and Founder of that brand is Nuran Terlan from Azerbaijan !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="iKC2hErCRhHDyAcM9g93KcaEYgPDTORTKjsCf6nzYas"
        />
      </Head>

      <Layout>
        {/* FULL SCREEN SIZE */}
        {/* <h1>
          full screen width:
          <span className="theme">{JSON.stringify(size.width)}</span>
        </h1> */}
        <Section className={styles.section1}>
          <h1>
            Are you ready to have an <span className="theme">attractive</span>{" "}
            and <span className="theme">brand new design</span> Website ?
          </h1>
          <Stepping />
        </Section>
        <Bound isDown />
        <Section className={styles.section2}>
          <h1>
            Static Websites for your <span className="theme">Portfolio</span>,
            <span className="theme">Fitness Coaching Contact</span> or{" "}
            <span className="theme">Product Promotion</span> with
          </h1>
          <div className={styles.tools}>
            <Html5 />
            <Javascript />
            <Css3 />
            <SvgReact />
          </div>
        </Section>
        <Bound />
        <Section className={styles.section3}>
          <Marketing />
          <h1>
            With <span className="pink">NextJS</span> and{" "}
            <span className="blue">React</span> I’ll make your dream Website{" "}
            <span className="pink">faster</span> than <s>traditional</s>{" "}
            <span className="theme">Html</span> and{" "}
            <span className="theme">Css</span>
          </h1>
        </Section>
        <Bound />
        <Section className={styles.section4}>
          <Title>
            Why ch<span className="theme">oo</span>se me ?
          </Title>
          <h2>
            <span className="theme">Your Website will be</span>
          </h2>
          <Section className={styles.subSection}>
            <div className={styles.privileges}>
              <Privilege>
                <h1>Fast</h1>
              </Privilege>
              <Privilege>
                <h1>
                  <span className="white">SEO</span> Friendly
                </h1>
              </Privilege>
              <Privilege>
                <h1>Clean Architectural</h1>
              </Privilege>
              <Privilege>
                <h1>
                  <span className="white">Attractive</span> and{" "}
                  <span className="white">Modern</span> ( Design )
                </h1>
              </Privilege>
              <Privilege>
                <h1>
                  Created with <span className="white">brand new TECH</span>s.
                </h1>
              </Privilege>
              <Privilege>
                <h1>
                  <span className="white">Affordable</span> prices
                </h1>
              </Privilege>
              <Privilege>
                <h1>
                  <span className="white">Component</span>-
                  <span className="white">Instance</span> Based
                </h1>
              </Privilege>
              <Privilege>
                <h1>
                  Responsive ( <span className="white">Mobile</span> Friendly )
                </h1>
              </Privilege>
            </div>
            <Helpful />
          </Section>
        </Section>
        <Bound />
        <Section className={styles.section5}>
          <Quote>
            <h1>
              Your orders aren’t just revenue for me ! They are support, moral
              and experience for my future as well ...
              <br />
              <span className="white">- Nuran Terlan</span>
            </h1>
          </Quote>
        </Section>
      </Layout>
    </>
  );
};

export default HomePage;
