import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const FirstPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      router.push("/home");
    }
  });
  return (
    <Head>
      <title>Welcome &sdot; DEVVHALE</title>
        <meta
          name="description"
          content="This is an official Promotional Website of DEVVHALE. DEVVHALE is a new brand. Creator and Founder of that brand is Nuran Terlan from Azerbaijan !"
        />
        <meta name="google-site-verification" content="iKC2hErCRhHDyAcM9g93KcaEYgPDTORTKjsCf6nzYas" />
    </Head>
  );
};

export default FirstPage;
