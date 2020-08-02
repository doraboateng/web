import App, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import theme from '../shared/theme';
import bootstrap from '../utils/bootstrap';
import GlobalStyle from '../shared/components/GlobalStyle';
import { getLocale, getLocalizedUrl } from '../utils/locale';

// Bootstrap application.
bootstrap();

export default class BoatengApp extends App<{err: any}> {
  static getInitialProps = async ({ ctx }: AppContext) => {
    const localizedUrl = getLocalizedUrl(ctx.req);

    if (ctx.req.url !== localizedUrl) {
      ctx.res.writeHead(302, { Location: `${localizedUrl}` });
      ctx.res.end();
    }

    return {
      pageProps: {
        locale: getLocale(ctx.req),
      },
    };
  };

  render = () => {
    const { Component, err, pageProps } = this.props;
    const title = 'Dora Boateng';
    const description = 'Languages and cultures reference.';
    const keywords = 'dictionary, encyclopedia, bilingual, multilingual, translation';

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{`${title}: ${description}`}</title>

          {/* <base href="https://www.doraboateng.com/" /> */}
          <meta name="description" content={description} />
          <meta name="topic" content="Culture, Languages" />
          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />
          <meta name="coverage" content="Worldwide" />
          <meta property="og:title" content={`${title}: ${description}`} />
          <meta property="og:desc" content={description} />
          <meta property="og:type" content="website" />
          <link type="text/plain" rel="author" href="/humans.txt" />
          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600"
            rel="stylesheet"
          />
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            href="https://www.doraboateng.com/osd.xml"
            title={title}
          />

          {/* <link rel="canonical" href="https://www.doraboateng.com/en" /> */}
        </Head>
        <GlobalStyle />
        <Component {...pageProps} err={err} />
      </ThemeProvider>
    );
  };
}
