
import React, { useState, useEffect } from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACHero from '../components/HVACHero';
import HVACCTA from '../components/HVACCTA';
import HVACAboutUs from '../components/HVACAboutUs';
import HVACServices from '../components/HVACServices';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACProcess from '../components/HVACProcess';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACTestimonials from '../components/HVACTestimonials';
import HVACServiceAreas from '../components/HVACServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import HVACFAQ from '../components/HVACFAQ';
import HVACFooter from '../components/HVACFooter';
import HVACLoader from '../components/HVACLoader';

const HVACIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HVACLoader />;
  }

  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      <HVACHero />
      <HVACAboutUs />
      <HVACServices />
      <HVACCTA />
      <HVACWhyChooseUs />
      <HVACProcess />
      <HVACCTA />
      <HVACGuarantee />
      <HVACTestimonials />
      <HVACCTA />
      <HVACServiceAreas />
      <ServiceMap theme="hvac" />
      <HVACFAQ />
      <HVACCTA />
      <HVACFooter />
    </div>
  );
};

export default HVACIndex;
