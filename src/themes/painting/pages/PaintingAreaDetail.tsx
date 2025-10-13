
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
import ServiceMap from '../../../components/ServiceMap';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';
import { MapPin, Clock } from 'lucide-react';

const PaintingAreaDetail = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Area Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-pink-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">Downtown Metro</h1>
              </div>
              <p className="text-xl text-purple-100 mb-8">
                Professional painting services in Downtown Metro with same-day estimates and expert color consultation.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-pink-400" />
                <span className="text-lg">Same-day estimates available</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Downtown Metro painting services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
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
      <ServiceMap theme="painting" />
      <PaintingFAQ />
      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingAreaDetail;
