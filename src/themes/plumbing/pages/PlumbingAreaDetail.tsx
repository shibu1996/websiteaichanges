
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
import ServiceMap from '../../../components/ServiceMap';
import PlumbingFAQ from '../components/PlumbingFAQ';
import PlumbingFooter from '../components/PlumbingFooter';
import { MapPin, Clock } from 'lucide-react';

const PlumbingAreaDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Area Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-cyan-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">Downtown Metro</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Professional plumbing services in Downtown Metro with 24/7 emergency response.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">Average response time: 15-30 minutes</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Downtown Metro plumbing services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
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
      <ServiceMap theme="plumbing" />
      <PlumbingFAQ />
      <PlumbingCTA />
      <PlumbingFooter />
    </div>
  );
};

export default PlumbingAreaDetail;
