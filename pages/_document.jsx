import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/Logo.svg" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="robots" content="index, follow" />
          {/* Chrome, Firefox OS and Opera */}
          <meta name="theme-color" content="#010101" />
          {/* Windows Phone */}
          <meta name="msapplication-navbutton-color" content="#010101" />
          {/* iOS Safari */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#010101"
          />
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
