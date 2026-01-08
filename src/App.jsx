import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Volunteer from './components/pages/Volunteer';
import Partner from './components/pages/Partner';
import Invite from './components/pages/Invite';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/invite" element={<Invite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
