import App, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import GlobalStyle from '../shared/components/GlobalStyle';

export default class BoatengApp extends App {
  // Temporarily redirect all traffic to landing page.
  static async getInitialProps({ ctx, router }: AppContext) {
    if (ctx.req.url !== '/') {
      ctx.res.writeHead(302, { 'Location': '/' });
      ctx.res.end();
    }

    return {pageProps: {}};
  }

  render() {
    const { Component, pageProps } = this.props;
    const title = 'Dora Boateng';
    const description = 'A reference of cultures past and present.';

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{`${title}: ${description}`}</title>

          {/* <base href="https://www.doraboateng.com/" /> */}
          <meta name="description" content={description} />
          <meta name="topic" content="Culture, Languages" />
          <meta name="keywords" content="dictionary, encyclopedia, bilingual, multilingual, translation" />
          <meta name="robots" content="index, follow" />
          <meta name="coverage" content="Worldwide" />
          <meta property="og:title" content={`${title}: ${description}`} />
          <meta property="og:desc" content={description} />
          <meta property="og:type" content="website" />
          <link type="text/plain" rel="author" href="/humans.txt" />
          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600"
            rel="stylesheet" />
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            href="https://www.doraboateng.com/osd.xml" title={title} />


          {/* <link rel="canonical" href="https://www.doraboateng.com/en" /> */}
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
