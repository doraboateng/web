import React from 'react';

// import AppPromo from './components/AppPromo';
import Latest from './components/Mission';
// import Mission from './components/MissionBak';
import Search from './components/Search';
import { Footer, Header } from '../shared';

const HomePage = () => (
  <>
    <Header />
    <Search />
    <Latest />
    {/* <Mission /> */}
    {/* <AppPromo /> */}
    <Footer />
  </>
);

export default HomePage;
