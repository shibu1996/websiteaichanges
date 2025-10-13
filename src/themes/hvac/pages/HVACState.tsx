
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
import { MapPin } from 'lucide-react';

const HVACState = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* State Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <MapPin className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">California HVAC Services</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive HVAC services throughout California with certified professionals 
            and emergency response teams in every major city.
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

export default HVACState;
