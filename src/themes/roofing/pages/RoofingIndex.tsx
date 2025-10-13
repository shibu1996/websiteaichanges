
import React, { useState, useEffect } from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingHero from '../components/RoofingHero';
import RoofingAboutUs from '../components/RoofingAboutUs';
import RoofingServices from '../components/RoofingServices';
import RoofingWhyChooseUs from '../components/RoofingWhyChooseUs';
import RoofingProcess from '../components/RoofingProcess';
import RoofingGuarantee from '../components/RoofingGuarantee';
import RoofingTestimonials from '../components/RoofingTestimonials';
import RoofingServiceAreas from '../components/RoofingServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import RoofingFAQ from '../components/RoofingFAQ';
import RoofingFooter from '../components/RoofingFooter';
import RoofingLoader from '../components/RoofingLoader';

const RoofingIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RoofingLoader />;
  }

  return (
    <div className="min-h-screen font-poppins">
      <RoofingHeader />
      <RoofingHero />
      <RoofingAboutUs />
      <RoofingServices />
      <RoofingWhyChooseUs />
      <RoofingProcess />
      <RoofingGuarantee />
      <RoofingTestimonials />
      <RoofingServiceAreas />
      <ServiceMap theme="roofing" />
      <RoofingFAQ />
      <RoofingFooter />
    </div>
  );
};

export default RoofingIndex;
