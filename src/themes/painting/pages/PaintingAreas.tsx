import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import InteractiveMap from '../../../components/InteractiveMap';
import PaintingFooter from '../components/PaintingFooter';
import { MapPin } from 'lucide-react';

const PaintingAreas = () => {
  const localAreas = [
    { 
      name: 'Downtown District', 
      coordinates: { lat: 34.0522, lng: -118.2537 }, 
      description: 'Central business district painting services',
      responseTime: '15-30 min'
    },
    { 
      name: 'Westside Area', 
      coordinates: { lat: 33.9850, lng: -118.4695 }, 
      description: 'Residential and commercial painting',
      responseTime: '20-35 min'
    },
    { 
      name: 'North Valley', 
      coordinates: { lat: 34.0928, lng: -118.3267 }, 
      description: 'Valley area painting specialists',
      responseTime: '25-40 min'
    },
    { 
      name: 'East Side', 
      coordinates: { lat: 34.1478, lng: -118.1445 }, 
      description: 'Eastside painting services',
      responseTime: '30-45 min'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Areas Hero */}
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
            <MapPin className="w-8 h-8 text-pink-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Areas We Serve</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional painting services throughout the metropolitan area with same-day estimates.
          </p>
        </div>
      </section>

      <PaintingServiceAreas />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Local Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional painting services across all local areas with same-day estimates.
            </p>
          </div>
          
          <InteractiveMap
            centerCoordinates={[-118.2437, 34.0522]}
            zoom={11}
            locations={localAreas}
            areaName="Local Areas"
            className="h-[600px] rounded-2xl shadow-2xl"
            theme="painting"
          />
        </div>
      </section>
      
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingAreas;
