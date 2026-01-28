
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import ScrollToTop from '@/components/ScrollToTop';
import ContactPopup from '@/components/ContactPopup';
import { Toaster } from '@/components/ui/toaster';
import StructuredData from '@/components/StructuredData';

// Pages
import Home from '@/pages/Home';
import ServicePage from '@/pages/ServicePage';
import PolitiqueConfidentialite from '@/pages/PolitiqueConfidentialite';
import ConditionsGenerales from '@/pages/ConditionsGenerales';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <StructuredData />
        <AnnouncementBanner />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:type" element={<ServicePage />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
        </Routes>

        <Footer />
        
        {/* Floating Widgets */}
        <WhatsAppWidget />
        <ScrollToTop />
        <ContactPopup />
        
        {/* Toast Notifications */}
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
