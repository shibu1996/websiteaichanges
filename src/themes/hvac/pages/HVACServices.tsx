
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACCTA from '../components/HVACCTA';
import HVACServices from '../components/HVACServices';
import HVACWhyChooseUs from '../components/HVACWhyChooseUs';
import HVACGuarantee from '../components/HVACGuarantee';
import HVACProcess from '../components/HVACProcess';
import HVACServiceAreas from '../components/HVACServiceAreas';
import HVACFAQ from '../components/HVACFAQ';
import HVACFooter from '../components/HVACFooter';
import { Thermometer } from 'lucide-react';

const HVACServicesPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* Services Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <Thermometer className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Professional HVAC Services</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive heating, ventilation, and air conditioning solutions from emergency repairs to complete installations. 
            Available 24/7 with expert technicians and guaranteed satisfaction.
          </p>
        </div>
      </section>
      
      <HVACServices />
      <HVACWhyChooseUs />
      <HVACCTA />
      <HVACGuarantee />
      <HVACProcess />
      <HVACCTA />
      <HVACServiceAreas />
      <HVACFAQ />
      <HVACCTA />
      <HVACFooter />
    </div>
  );
};

export default HVACServicesPage;
