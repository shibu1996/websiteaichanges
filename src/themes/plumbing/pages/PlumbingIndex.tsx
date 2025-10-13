
import React, { useState, useEffect } from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingHero from '../components/PlumbingHero';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingTestimonials from '../components/PlumbingTestimonials';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';
import PlumbingLoader from '../components/PlumbingLoader';

const PlumbingIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PlumbingLoader />;
  }

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      <PlumbingHero />
      <PlumbingAboutUs />
      <PlumbingServices />
      <PlumbingCTA />
      <PlumbingWhyChooseUs />
      <PlumbingProcess />
      <PlumbingCTA />
      <PlumbingGuarantee />
      <PlumbingTestimonials />
      <PlumbingCTA />
      <PlumbingServiceAreas />
      <ServiceMap theme="plumbing" />
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingIndex;
