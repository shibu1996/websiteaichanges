
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { MapPin, Phone, CheckCircle, Clock, Home } from 'lucide-react';

const RoofingAreas = () => {
  const areas = [
    {
      name: 'Central Business District',
      slug: 'central-business-district',
      description: 'Professional roofing services for commercial and residential properties in the heart of the city.',
      services: ['Roof Installation', 'Emergency Repair', 'Commercial Roofing', 'Roof Maintenance']
    },
    {
      name: 'Highland Park',
      slug: 'highland-park',
      description: 'Quality roofing solutions for Highland Park homes and businesses with same-day service.',
      services: ['Roof Replacement', 'Storm Damage Repair', 'Residential Roofing', 'Free Inspections']
    },
    {
      name: 'Riverside Commons',
      slug: 'riverside-commons',
      description: 'Trusted roofing contractors serving Riverside Commons with 24/7 emergency response.',
      services: ['Roof Installation', 'Leak Repair', 'Gutter Services', 'Insurance Claims']
    },
    {
      name: 'Summit Ridge',
      slug: 'summit-ridge',
      description: 'Expert roofing services for Summit Ridge residents with premium materials and workmanship.',
      services: ['Metal Roofing', 'Shingle Installation', 'Roof Inspection', 'Warranty Service']
    },
    {
      name: 'Valley View',
      slug: 'valley-view',
      description: 'Professional roofing installation and repair services throughout Valley View area.',
      services: ['Roof Replacement', 'Emergency Service', 'Commercial Roofing', 'Maintenance Plans']
    },
    {
      name: 'Westside Plaza',
      slug: 'westside-plaza',
      description: 'Comprehensive roofing solutions for Westside Plaza commercial and residential properties.',
      services: ['Flat Roof Systems', 'Tile Roofing', 'Roof Repair', 'Storm Response']
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Service Areas
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Professional roofing services throughout the metropolitan area. Licensed, bonded, and ready to serve your community.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Available Services:</h4>
                  {area.services.map((service, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-orange-500 mr-2" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <a
                    href={`/roofing/areas/${area.slug}`}
                    className="block w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-4 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:5551234567"
                    className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Coverage Across the Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our licensed roofing contractors provide professional service throughout the metropolitan area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Emergency roofing services available around the clock in all service areas for storm damage and urgent repairs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Bonded</h3>
              <p className="text-gray-600">
                Fully licensed and bonded roofing contractors with comprehensive insurance coverage in all areas we serve.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Estimates</h3>
              <p className="text-gray-600">
                No-obligation estimates and inspections available in all service areas with detailed assessments and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Roofing Services?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Contact Elite Roofing Pro today to schedule your free estimate. We're here to serve your community with quality roofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
            <a
              href="/roofing/contact"
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <RoofingFooter />
    </div>
  );
};

export default RoofingAreas;
