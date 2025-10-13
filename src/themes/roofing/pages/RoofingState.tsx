
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingHero from '../components/RoofingHero';
import RoofingAboutUs from '../components/RoofingAboutUs';
import RoofingServices from '../components/RoofingServices';
import RoofingGuarantee from '../components/RoofingGuarantee';
import RoofingProcess from '../components/RoofingProcess';
import RoofingWhyChooseUs from '../components/RoofingWhyChooseUs';
import RoofingTestimonials from '../components/RoofingTestimonials';
import RoofingServiceAreas from '../components/RoofingServiceAreas';
import ServiceMap from '../../../components/ServiceMap';
import RoofingFAQ from '../components/RoofingFAQ';
import RoofingFooter from '../components/RoofingFooter';

const RoofingState = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      <RoofingHero />
      <RoofingAboutUs />
      <RoofingServices />
      <RoofingGuarantee />
      <RoofingWhyChooseUs />
      <RoofingProcess />
      <RoofingGuarantee />
      <RoofingTestimonials />
      <RoofingGuarantee />
      <RoofingServiceAreas />
      <ServiceMap theme="roofing" />
      <RoofingFAQ />
      <RoofingGuarantee />
      <RoofingFooter />
    </div>
  );
};

export default RoofingState;
