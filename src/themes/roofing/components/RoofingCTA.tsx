
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const RoofingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Fix Your Roof?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
          Don't wait for roof problems to get worse. Get your free estimate today and protect your home with our expert roofing services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:5551234567"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: (555) 123-4567
          </a>
          <a
            href="mailto:info@eliteroofingpro.com"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoofingCTA;
