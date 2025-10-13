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
import { Building } from 'lucide-react';

const PaintingCity = () => {
  const localAreas = [
    { 
      name: 'Downtown LA', 
      coordinates: { lat: 34.0522, lng: -118.2537 }, 
      description: 'Downtown LA painting services',
      responseTime: '15-30 min'
    },
    { 
      name: 'Hollywood', 
      coordinates: { lat: 34.0928, lng: -118.3267 }, 
      description: 'Hollywood area painting',
      responseTime: '20-35 min'
    },
    { 
      name: 'Beverly Hills', 
      coordinates: { lat: 34.0736, lng: -118.4004 }, 
      description: 'Beverly Hills painting services',
      responseTime: '25-40 min'
    },
    { 
      name: 'Santa Monica', 
      coordinates: { lat: 34.0195, lng: -118.4912 }, 
      description: 'Santa Monica painting',
      responseTime: '30-45 min'
    },
    { 
      name: 'Venice', 
      coordinates: { lat: 33.9850, lng: -118.4695 }, 
      description: 'Venice area painting services',
      responseTime: '35-50 min'
    },
    { 
      name: 'Pasadena', 
      coordinates: { lat: 34.1478, lng: -118.1445 }, 
      description: 'Pasadena painting services',
      responseTime: '40-55 min'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* City Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4">
            <Building className="w-8 h-8 text-pink-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Los Angeles Painting Services</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional painting services in Los Angeles with same-day estimates 
            and local expertise for all neighborhoods and districts.
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
              Los Angeles Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all major neighborhoods and districts in Los Angeles with dedicated local teams.
            </p>
          </div>
          
          <InteractiveMap
            centerCoordinates={[-118.2437, 34.0522]}
            zoom={10}
            locations={localAreas}
            areaName="Los Angeles"
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

export default PaintingCity;
