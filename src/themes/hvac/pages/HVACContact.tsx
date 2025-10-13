
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACCTA from '../components/HVACCTA';
import HVACFooter from '../components/HVACFooter';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const HVACContact = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      {/* Contact Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/85 to-red-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <MessageSquare className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in touch with our HVAC experts for immediate assistance or to schedule a service appointment.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">24/7 Emergency Service</p>
              <a href="tel:5551234567" className="text-orange-600 font-semibold hover:text-red-600 transition-colors">
                (555) 123-4567
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a Free Quote</p>
              <a href="mailto:info@coolheatpro.com" className="text-orange-600 font-semibold hover:text-red-600 transition-colors">
                info@coolheatpro.com
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our Location</p>
              <p className="text-orange-600 font-semibold">
                123 HVAC Street<br />Los Angeles, CA 90210
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Hours</h3>
              <p className="text-gray-600 mb-4">We're Always Available</p>
              <p className="text-orange-600 font-semibold">
                24/7 Emergency<br />Mon-Fri: 8AM-6PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <HVACCTA />
      <HVACFooter />
    </div>
  );
};

export default HVACContact;
