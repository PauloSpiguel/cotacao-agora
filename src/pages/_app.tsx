import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "~/styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate - NextJs</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simples project started to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
