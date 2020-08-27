import React from "react";
import cn from "classnames";
import Head from "next/head";
import Layout from "./../components/layout/index";
// import useWindowSize from "./../hooks/useWindowSize";
import Section from "./../components/section/index";
import Bound from "./../components/bound";
import Title from "./../components/title/index";
import Quote from "./../components/quote/index";
import Skill from "../components/skill";
import { Percentages, Job, Ride, Programmer } from "../components/icons/index";
import { SKILLS, CERTIFICATES, HOBBIES } from "../constants";
import CertificateBox from "../components/certificate-box/index";
import ProfileBox from "./../components/profile/index";

import styles from "./../page-styles/about.module.css";
import Contact from "../components/contact";

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
        <Section className={styles.section1}>
          <Title>
            <span className="pink">Who</span> am I ?
          </Title>
          <Section className={styles.subSection}>
            <ProfileBox />
            <article>
              <h1>
                I’m <span className="theme">Nuran Terlan</span> from Azerbaijan.
                Now I’m studying at Azerbaijan State Oil and Industry University
                ( <span className="pink">ASOIU</span> ). My profession is{" "}
                <span className="theme">Information Technology</span> and I’ve
                probably 1 year of experience on that <br />“{" "}
                <span className="blue">Software Industry</span> ”
              </h1>
            </article>
          </Section>
        </Section>
        <Bound isDown isPink />
        <Section className={styles.section2}>
          <Title>Skills</Title>
          <Section className={styles.subSection}>
            <div className={styles.skills}>
              {SKILLS.map((skill) => {
                return <Skill key={skill.name}>{skill.name}</Skill>;
              })}
            </div>
            <Percentages className={styles.skillIllustration} />
          </Section>
        </Section>
        <Section className={styles.section3}>
          <Quote>
            Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away <br />
            <span className="white">- Antoine de Saint-Exupery</span>
          </Quote>
        </Section>
        <Bound />
        <Section className={styles.section4}>
          <Title>
            <span className="theme">Certificates</span> I've earned
          </Title>
          <Section className={styles.subSection}>
            {CERTIFICATES.map((certificate) => {
              return (
                <a
                  key={certificate.credential}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener"
                >
                  <CertificateBox
                    name={certificate.name}
                    issuer={certificate.issuer}
                    credential={certificate.credential}
                    source={certificate.source}
                  />
                </a>
              );
            })}
            <Job className={styles.job} />
          </Section>
        </Section>
        <Bound />
        <Section className={styles.section5}>
          <Title>
            My <span className="pink">Hobbies</span>
          </Title>
          <Section className={cn([styles.subSection, styles.sub1])}>
            <Ride className={styles.hobbyIllustration} />
            <div className={styles.hobbylist}>
              {HOBBIES.slice(0, 5).map((hobby) => {
                return <div key={hobby.key}>{hobby.icon}</div>;
              })}
            </div>
          </Section>
          <Bound className={styles.shortBound} />
          <Section className={cn([styles.subSection, styles.sub2])}>
            <div className={styles.hobbylist}>
              {HOBBIES.slice(5, 10).map((hobby) => {
                return <div key={hobby.key}>{hobby.icon}</div>;
              })}
            </div>
            <Programmer className={styles.hobbyIllustration} />
          </Section>
        </Section>
      </Layout>
    </>
  );
};

export default AboutMe;
