
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';
import HeroSection from '../components/digital-cv/HeroSection';
import WhyChooseSection from '../components/digital-cv/WhyChooseSection';
import WhatsIncludedSection from '../components/digital-cv/WhatsIncludedSection';
import PricingSection from '../components/digital-cv/PricingSection';
import WhatYouProvideSection from '../components/digital-cv/WhatYouProvideSection';
import AboutSection from '../components/digital-cv/AboutSection';
import FooterCta from '../components/digital-cv/FooterCta';

const DigitalCV = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <HeroSection />
          <WhyChooseSection />
          <WhatsIncludedSection />
          <PricingSection />
          <WhatYouProvideSection />
          <AboutSection />
          <FooterCta />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalCV;
