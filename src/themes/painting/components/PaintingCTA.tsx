
import React from 'react';
import { Phone, Palette } from 'lucide-react';

const PaintingCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
          Get professional painting services with premium materials and expert craftsmanship. 
          Free estimates and satisfaction guaranteed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:5551234567"
            className="group bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
          >
            <Phone size={24} className="group-hover:animate-pulse" />
            <span>Call Now: (555) 123-4567</span>
          </a>
          
          <a 
            href="/painting/contact"
            className="group bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
          >
            <Palette size={24} />
            <span>Free Estimate</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaintingCTA;
