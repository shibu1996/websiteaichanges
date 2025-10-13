
import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingServices from '../components/PaintingServices';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingProcess from '../components/PaintingProcess';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';
import { Paintbrush } from 'lucide-react';

const PaintingServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Services Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Paintbrush className="w-8 h-8 text-pink-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Professional Painting Services</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive interior and exterior painting solutions with premium materials and expert craftsmanship. 
            Same-day estimates and satisfaction guaranteed.
          </p>
        </div>
      </section>
      
      <PaintingServices />
      <PaintingWhyChooseUs />
      <PaintingCTA />
      <PaintingGuarantee />
      <PaintingProcess />
      <PaintingCTA />
      <PaintingServiceAreas />
      <PaintingFAQ />
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingServicesPage;
