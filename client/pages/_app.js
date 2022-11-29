import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import request, { getStrapiURL } from "../lib/request";
import { Global } from "@emotion/react";
import reset from "client/style/reset";
import globalStyle from "client/style/global";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
/*
 strapi로 부터 받아온 Global object를 저장한다.
*/
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiURL(global.attributes.favicon.data.attributes.url)}
        />
      </Head>
      <Global styles={reset} />
      <Global styles={globalStyle} />
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await request("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
