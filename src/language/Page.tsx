import React from 'react';

import SearchSection from './components/Search';
import { LanguagePageProps } from './types';
import { Footer, Header } from '../shared';

const LanguagePage = ({ code, name }: LanguagePageProps) => (
  <>
    <Header />
    <SearchSection code={code} name={name} />
    <Footer />
  </>
);

export default LanguagePage;
