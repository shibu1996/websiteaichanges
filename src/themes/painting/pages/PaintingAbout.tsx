
import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingHero from '../components/PaintingHero';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingTestimonials from '../components/PaintingTestimonials';
import PaintingFooter from '../components/PaintingFooter';
import PaintingMissionVision from '../components/PaintingMissionVision';
import PaintingValues from '../components/PaintingValues';
import PaintingUSP from '../components/PaintingUSP';

const PaintingAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      <PaintingHero />
      <PaintingAboutUs />
      <PaintingCTA />
      <PaintingMissionVision />
      <PaintingCTA />
      <PaintingValues />
      <PaintingCTA />
      <PaintingUSP />
      <PaintingCTA />
      <PaintingTestimonials />
      <PaintingFooter />
    </div>
  );
};

export default PaintingAbout;
