
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACHero from '../components/HVACHero';
import HVACCTA from '../components/HVACCTA';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACTestimonials from '../components/HVACTestimonials';
import HVACFooter from '../components/HVACFooter';
import HVACMissionVision from '../components/HVACMissionVision';
import HVACValues from '../components/HVACValues';
import HVACUSP from '../components/HVACUSP';

const HVACAbout = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      <HVACHero />
      <HVACAboutUs />
      <HVACCTA />
      <HVACMissionVision />
      <HVACCTA />
      <HVACValues />
      <HVACCTA />
      <HVACUSP />
      <HVACCTA />
      <HVACTestimonials />
      <HVACFooter />
    </div>
  );
};

export default HVACAbout;
