import React from 'react';

import AppPromo from './components/AppPromo';
import Latest from './components/Latest';
import Mission from './components/Mission';
import Search from './components/Search';
import { Footer, Header } from '../shared';

const HomePage = () => (
  <>
    <Header />
    <Search />
    <Latest />
    <Mission />
    <AppPromo />
    <Footer />
  </>
);

export default HomePage;
