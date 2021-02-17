import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        />
        <title>Base Apparel - We're comming soon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
