
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingCTA from '../components/PlumbingCTA';
import PlumbingServiceAreas from '../components/PlumbingServiceAreas';
import PlumbingAreaMap from '../../../components/PlumbingAreaMap';
import PlumbingFooter from '../components/PlumbingFooter';
import { MapPin } from 'lucide-react';

const PlumbingAreas = () => {
  const localAreas = [
    { name: 'Downtown District', coordinates: [-118.2537, 34.0522] as [number, number], type: 'local' as const },
    { name: 'Westside Area', coordinates: [-118.4695, 33.9850] as [number, number], type: 'local' as const },
    { name: 'North Valley', coordinates: [-118.3267, 34.0928] as [number, number], type: 'local' as const },
    { name: 'East Side', coordinates: [-118.1445, 34.1478] as [number, number], type: 'local' as const }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Areas Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Areas We Serve</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional plumbing services throughout the metropolitan area with fast response times.
          </p>
        </div>
      </section>

      <PlumbingServiceAreas />
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Local Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional plumbing services across all local areas with fast response times.
            </p>
          </div>
          
          <PlumbingAreaMap
            centerCoordinates={[-118.2437, 34.0522]}
            zoom={11}
            locations={localAreas}
            areaName="Local Areas"
            areaType="local"
            className="h-[600px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingAreas;
