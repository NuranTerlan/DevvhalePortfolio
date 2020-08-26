import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/Logo.svg" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
