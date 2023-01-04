import App from "next/app";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import API from "@/api";
import { getStrapiURL } from "@/api/utils/request";
import reset from "@/style/reset";
import globalStyle from "@/style/global";
import UserProvider from "@/context/user";
import ModalsProvider from "@/context/modal";
config.autoAddCss = false;
/*
 strapi로 부터 받아온 Global object를 저장한다.
*/
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <UserProvider>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </UserProvider>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const globalRes = await API.getGlobalSeo();

  return { ...appProps, pageProps: { global: globalRes } };
};

export default MyApp;
