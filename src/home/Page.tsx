import React from 'react';

// import AppPromo from './components/AppPromo';
import MissionSection from './components/Mission';
import SearchSection from './components/Search';
import { Footer, Header } from '../shared';

const HomePage = () => (
  <>
    <Header />
    <SearchSection />
    <MissionSection />
    {/* <AppPromo /> */}
    <Footer />
  </>
);

export default HomePage;
