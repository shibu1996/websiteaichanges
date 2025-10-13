
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const RoofingContact = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Elite Roofing Pro
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Get your free roofing estimate today. Professional service, quality materials, and reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us Now</h3>
                    <a href="tel:5551234567" className="text-2xl font-bold text-slate-600 hover:text-slate-500 transition-colors">
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <a href="mailto:info@eliteroofingpro.com" className="text-lg text-slate-600 hover:text-slate-500 transition-colors">
                      info@eliteroofingpro.com
                    </a>
                    <p className="text-gray-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-lg text-gray-700">Metro Area & Surrounding Communities</p>
                    <p className="text-gray-600 mt-1">Licensed & Bonded in all service areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Request Free Estimate</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-100 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-100 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option value="">Select a service</option>
                    <option value="installation">Roof Installation</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Describe your roofing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Call Elite Roofing Pro?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Bonded</h3>
              <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage for your protection.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">Quick response times for estimates and emergency service when you need it most.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Estimates</h3>
              <p className="text-gray-600">No-obligation estimates with detailed assessments and transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <RoofingFooter />
    </div>
  );
};

export default RoofingContact;
