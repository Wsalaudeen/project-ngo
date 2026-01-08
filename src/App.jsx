import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValuesStats from './components/sections/ValuesStats';
import Programs from './components/sections/Programs';

import Approach from './components/sections/Approach';
import ImpactData from './components/sections/ImpactData';
import AudienceCards from './components/sections/AudienceCards';
import Campaign from './components/sections/Campaign';
import Newsletter from './components/sections/Newsletter';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValuesStats />
        <Programs />

        <Approach />
        <ImpactData />
        <AudienceCards />
        <Campaign />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
