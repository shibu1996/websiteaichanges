
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingAboutUs from '../components/PlumbingAboutUs';
import PlumbingServices from '../components/PlumbingServices';
import PlumbingWhyChooseUs from '../components/PlumbingWhyChooseUs';
import PlumbingProcess from '../components/PlumbingProcess';
import PlumbingGuarantee from '../components/PlumbingGuarantee';
import PlumbingTestimonials from '../components/PlumbingTestimonials';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingAreaMap from '../../../components/PlumbingAreaMap';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';
import { Home } from 'lucide-react';

const PlumbingLocalArea = () => {
  // Single location for local area (no pins needed, just the area itself)
  const localAreaLocation = [
    { name: 'Downtown LA', coordinates: [-118.2537, 34.0522] as [number, number], type: 'local' as const }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Local Area Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-600/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Home className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Downtown LA Plumbing Services</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Specialized plumbing services in Downtown Los Angeles with immediate response 
            and deep local knowledge of the area's unique plumbing challenges.
          </p>
        </div>
      </section>

      <PlumbingCTA />
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
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Downtown LA Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing coverage throughout Downtown Los Angeles with rapid response teams.
            </p>
          </div>
          
          <PlumbingAreaMap
            centerCoordinates={[-118.2537, 34.0522]}
            zoom={13}
            locations={localAreaLocation}
            areaName="Downtown LA"
            areaType="local"
            className="h-[600px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingLocalArea;
