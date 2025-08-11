import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickCategories from './components/QuickCategories';
import AboutPreview from './components/AboutPreview';
import BulkSupplies from './components/BulkSupplies';
import WhyChooseUs from './components/WhyChooseUs';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import CategoriesPage from './pages/CategoriesPage';
import BulkSuppliesPage from './pages/BulkSuppliesPage';
import ContactPage from './pages/ContactPage';

// Note: Using HashRouter, so no need for basename configuration

function HomePage() {
  return (
    <>
      <Hero />
      <QuickCategories />
      <AboutPreview />
      <BulkSupplies />
      <WhyChooseUs />
      <ClientLogos />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/bulk-supplies" element={<BulkSuppliesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;