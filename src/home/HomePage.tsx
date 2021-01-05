import React from 'react';

// import AppPromo from './components/AppPromo';
import Mission from './components/Mission';
// import Mission from './components/MissionBak';
import Search from './components/Search';
import { Footer, Header } from '../shared';

export default function HomePage() {
  return (
    <>
      <Header />
      <Search />
      <Mission />
      {/* <AppPromo /> */}
      <Footer />
    </>
  );
}
