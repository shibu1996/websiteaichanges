
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingHero from '../components/PlumbingHero';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingTestimonials from '../components/PlumbingTestimonials';
import PlumbingFooter from '../components/PlumbingFooter';
import PlumbingMissionVision from '../components/PlumbingMissionVision';
import PlumbingValues from '../components/PlumbingValues';
import PlumbingUSP from '../components/PlumbingUSP';

const PlumbingAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      <PlumbingHero />
      <PlumbingAboutUs />
      <PlumbingCTA />
      <PlumbingMissionVision />
      <PlumbingCTA />
      <PlumbingValues />
      <PlumbingCTA />
      <PlumbingUSP />
      <PlumbingCTA />
      <PlumbingTestimonials />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingAbout;
