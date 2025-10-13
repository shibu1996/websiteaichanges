
import React from 'react';
import HVACHeader from '../components/HVACHeader';
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
import { Building } from 'lucide-react';

const HVACCity = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* City Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <Building className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Los Angeles HVAC Services</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional HVAC services in Los Angeles with fast response times 
            and local expertise for all neighborhoods and districts.
          </p>
        </div>
      </section>

      <HVACCTA />
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

export default HVACCity;
