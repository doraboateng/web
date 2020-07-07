import Error from 'next/error';
import React from 'react';

import SearchSection from './components/Search';
import { LanguagePageProps } from './types';
import { Footer, Header } from '../shared';

const LanguagePage = ({ code, name, errorCode }: LanguagePageProps) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <Header />
      <SearchSection code={code} name={name} />
      <Footer />
    </>
  );
};

export default LanguagePage;
