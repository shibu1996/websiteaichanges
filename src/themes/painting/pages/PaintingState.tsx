import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingServices from '../components/PaintingServices';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingProcess from '../components/PaintingProcess';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingTestimonials from '../components/PaintingTestimonials';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import InteractiveMap from '../../../components/InteractiveMap';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';
import { MapPin } from 'lucide-react';

const PaintingState = () => {
  const cityLocations = [
    { 
      name: 'Los Angeles', 
      coordinates: { lat: 34.0522, lng: -118.2437 }, 
      description: 'Los Angeles painting services',
      responseTime: '15-30 min'
    },
    { 
      name: 'San Francisco', 
      coordinates: { lat: 37.7749, lng: -122.4194 }, 
      description: 'San Francisco painting services',
      responseTime: '20-35 min'
    },
    { 
      name: 'San Diego', 
      coordinates: { lat: 32.7157, lng: -117.1611 }, 
      description: 'San Diego painting services',
      responseTime: '25-40 min'
    },
    { 
      name: 'Sacramento', 
      coordinates: { lat: 38.5767, lng: -121.4687 }, 
      description: 'Sacramento painting services',
      responseTime: '30-45 min'
    },
    { 
      name: 'Fresno', 
      coordinates: { lat: 36.7378, lng: -119.7871 }, 
      description: 'Fresno painting services',
      responseTime: '35-50 min'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* State Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-pink-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">California Painting Services</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive painting services throughout California with certified professionals 
            and same-day estimates in every major city.
          </p>
        </div>
      </section>

      <PaintingCTA />
      <PaintingAboutUs />
      <PaintingServices />
      <PaintingCTA />
      <PaintingWhyChooseUs />
      <PaintingProcess />
      <PaintingCTA />
      <PaintingGuarantee />
      <PaintingTestimonials />
      <PaintingCTA />
      <PaintingServiceAreas />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              California Service Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional painting services in major California cities with local teams and same-day estimates.
            </p>
          </div>
          
          <InteractiveMap
            centerCoordinates={[-119.4179, 36.7783]}
            zoom={6}
            locations={cityLocations}
            areaName="California"
            className="h-[600px] rounded-2xl shadow-2xl"
            theme="painting"
          />
        </div>
      </section>
      
      <PaintingFAQ />
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingState;
