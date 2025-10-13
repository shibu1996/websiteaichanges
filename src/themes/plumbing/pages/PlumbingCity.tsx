
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
import { Building } from 'lucide-react';

const PlumbingCity = () => {
  const localAreas = [
    { name: 'Downtown LA', coordinates: [-118.2537, 34.0522] as [number, number], type: 'local' as const },
    { name: 'Hollywood', coordinates: [-118.3267, 34.0928] as [number, number], type: 'local' as const },
    { name: 'Beverly Hills', coordinates: [-118.4004, 34.0736] as [number, number], type: 'local' as const },
    { name: 'Santa Monica', coordinates: [-118.4912, 34.0195] as [number, number], type: 'local' as const },
    { name: 'Venice', coordinates: [-118.4695, 33.9850] as [number, number], type: 'local' as const },
    { name: 'Pasadena', coordinates: [-118.1445, 34.1478] as [number, number], type: 'local' as const }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* City Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Building className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Los Angeles Plumbing Services</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional plumbing services in Los Angeles with fast response times 
            and local expertise for all neighborhoods and districts.
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
              Los Angeles Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all major neighborhoods and districts in Los Angeles with dedicated local teams.
            </p>
          </div>
          
          <PlumbingAreaMap
            centerCoordinates={[-118.2437, 34.0522]}
            zoom={10}
            locations={localAreas}
            areaName="Los Angeles"
            areaType="city"
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

export default PlumbingCity;
