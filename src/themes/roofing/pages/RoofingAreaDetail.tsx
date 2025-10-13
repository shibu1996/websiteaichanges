import React from 'react';
import { useParams } from 'react-router-dom';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import EnhancedMapboxMap from '@/components/EnhancedMapboxMap';
import { MapPin, Phone, CheckCircle, Clock, Home, Shield, Award } from 'lucide-react';

const RoofingAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const areas = {
    'central-business-district': {
      name: 'Central Business District',
      description: 'Professional roofing services for commercial and residential properties in the downtown core.',
      longDescription: 'The Central Business District represents the heart of our city, and Elite Roofing Pro is proud to serve both commercial buildings and residential properties in this vital area. Our experienced team understands the unique challenges of urban roofing, from high-rise access to noise restrictions.',
      population: '25,000+',
      coverage: 'Complete District',
      responseTime: '30 minutes',
      services: [
        'Commercial Roof Installation',
        'Emergency Roof Repair',
        'High-Rise Roofing',
        'Flat Roof Systems',
        'Roof Maintenance',
        'Insurance Claims'
      ],
      features: [
        '24/7 Emergency Response',
        'Licensed & Bonded',
        'Commercial Experience',
        'Urban Specialists',
        'Free Estimates',
        'Same-Day Service'
      ],
      coordinates: [-122.4194, 37.7749] as [number, number]
    },
    'highland-park': {
      name: 'Highland Park',
      description: 'Quality roofing solutions for Highland Park homes and businesses.',
      longDescription: 'Highland Park is known for its beautiful homes and family-friendly atmosphere. Our roofing services help maintain the character and value of your property while providing modern protection and energy efficiency.',
      population: '18,500',
      coverage: 'Full Neighborhood',
      responseTime: '25 minutes',
      services: [
        'Residential Roof Installation',
        'Roof Replacement',
        'Storm Damage Repair',
        'Gutter Services',
        'Roof Inspection',
        'Warranty Service'
      ],
      features: [
        'Residential Specialists',
        'Family-Owned Business',
        'Local References',
        'Quality Materials',
        'Competitive Pricing',
        'Customer Satisfaction'
      ],
      coordinates: [-122.4094, 37.7849] as [number, number]
    },
    'riverside-commons': {
      name: 'Riverside Commons',
      description: 'Trusted roofing contractors serving the Riverside Commons community.',
      longDescription: 'Riverside Commons enjoys beautiful waterfront views and a close-knit community atmosphere. Our roofing services are designed to protect your investment while maintaining the aesthetic appeal of this desirable neighborhood.',
      population: '12,800',
      coverage: 'Complete Area',
      responseTime: '20 minutes',
      services: [
        'Roof Installation',
        'Leak Repair',
        'Metal Roofing',
        'Tile Roofing',
        'Emergency Service',
        'Maintenance Plans'
      ],
      features: [
        'Waterfront Experience',
        'Weather Specialists',
        'Local Team',
        'Premium Materials',
        'Quick Response',
        'Community Focused'
      ],
      coordinates: [-122.3994, 37.7649] as [number, number]
    },
    'summit-ridge': {
      name: 'Summit Ridge',
      description: 'Expert roofing services for Summit Ridge residents and businesses.',
      longDescription: 'Summit Ridge offers stunning views and upscale properties that require premium roofing solutions. Our team specializes in high-end materials and custom installations that match the quality expectations of this exclusive area.',
      population: '8,200',
      coverage: 'Full Ridge Area',
      responseTime: '25 minutes',
      services: [
        'Premium Roof Installation',
        'Custom Metal Roofing',
        'Slate & Tile Work',
        'Roof Inspection',
        'Luxury Materials',
        'Architectural Roofing'
      ],
      features: [
        'Luxury Specialists',
        'Premium Materials',
        'Custom Solutions',
        'Architectural Expertise',
        'High-End Service',
        'Quality Guarantee'
      ],
      coordinates: [-122.4294, 37.7949] as [number, number]
    },
    'valley-view': {
      name: 'Valley View',
      description: 'Professional roofing installation and repair throughout Valley View.',
      longDescription: 'Valley View combines suburban comfort with convenient access to city amenities. Our comprehensive roofing services help protect family homes and local businesses with reliable, long-lasting solutions.',
      population: '22,100',
      coverage: 'Entire Valley',
      responseTime: '30 minutes',
      services: [
        'Residential Roofing',
        'Commercial Service',
        'Roof Replacement',
        'Storm Damage',
        'Emergency Repair',
        'Maintenance Programs'
      ],
      features: [
        'Suburban Specialists',
        'Family Service',
        'Local Contractors',
        'Reliable Service',
        'Fair Pricing',
        'Community Trust'
      ],
      coordinates: [-122.3894, 37.7549] as [number, number]
    },
    'westside-plaza': {
      name: 'Westside Plaza',
      description: 'Comprehensive roofing solutions for Westside Plaza properties.',
      longDescription: 'Westside Plaza is a thriving commercial and residential district that requires diverse roofing expertise. From shopping centers to apartment complexes, our team handles all types of roofing projects with professional excellence.',
      population: '16,700',
      coverage: 'Complete Plaza District',
      responseTime: '25 minutes',
      services: [
        'Commercial Roofing',
        'Multi-Unit Housing',
        'Flat Roof Systems',
        'Roof Repair',
        'Maintenance Contracts',
        'Emergency Service'
      ],
      features: [
        'Commercial Expertise',
        'Multi-Unit Specialists',
        'Contract Services',
        'Professional Team',
        'Flexible Scheduling',
        'Business Focus'
      ],
      coordinates: [-122.4394, 37.7449] as [number, number]
    }
  };

  const area = areas[slug as keyof typeof areas];

  if (!area) {
    return (
      <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
        <RoofingHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Area Not Found</h1>
            <p className="text-gray-600 mb-8">The requested service area could not be found.</p>
            <a href="/roofing/areas" className="bg-gradient-to-r from-slate-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-slate-400 hover:to-orange-400 transition-all">
              View All Areas
            </a>
          </div>
        </div>
        <RoofingFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={48} className="text-orange-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Roofing Services in {area.name}</h1>
            </div>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto mb-8">{area.description}</p>
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
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {area.name}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{area.longDescription}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{area.population}</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{area.responseTime}</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{area.coverage}</div>
                  <div className="text-sm text-gray-600">Coverage</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {area.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us in {area.name}?</h3>
              <div className="space-y-4 mb-8">
                {area.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock size={32} className="text-orange-400 mx-auto mb-2" />
                    <p className="font-semibold">24/7</p>
                    <p className="text-sm text-slate-100">Emergency</p>
                  </div>
                  <div className="text-center">
                    <Shield size={32} className="text-orange-400 mx-auto mb-2" />
                    <p className="font-semibold">Licensed</p>
                    <p className="text-sm text-slate-100">& Bonded</p>
                  </div>
                  <div className="text-center">
                    <Award size={32} className="text-orange-400 mx-auto mb-2" />
                    <p className="font-semibold">20+ Years</p>
                    <p className="text-sm text-slate-100">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Area: {area.name}
            </h2>
            <p className="text-xl text-gray-600">
              Professional roofing services throughout {area.name} and surrounding areas.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <EnhancedMapboxMap className="h-96" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Roofing in {area.name}?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Contact Elite Roofing Pro today for your free estimate. We're proud to serve the {area.name} community with quality roofing solutions.
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
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <RoofingFooter />
    </div>
  );
};

export default RoofingAreaDetail;
