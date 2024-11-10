// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionDivider from './components/SectionDivider';
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SectionDivider />
      <SocialProofSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <TestimonialSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
