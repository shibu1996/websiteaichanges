
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { CheckCircle, Users, Award, Shield, Phone, Clock } from 'lucide-react';

const RoofingAbout = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-slate-50 to-gray-50">
      <RoofingHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Elite Roofing Pro
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Your trusted roofing contractor with over 20 years of experience in professional roofing installation, repair, and maintenance services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Roofing Services Since 2004
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Elite Roofing Pro has been serving homeowners and businesses with top-quality roofing services for over two decades. Our team of licensed and bonded contractors specializes in roof installation, repair, replacement, and emergency services.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on using premium materials, providing exceptional workmanship, and delivering reliable service that protects your most valuable investment - your property.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Licensed & Bonded</h4>
                    <p className="text-gray-600 text-sm">Fully certified roofing contractors</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fully Insured</h4>
                    <p className="text-gray-600 text-sm">Complete liability coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Emergency</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock service</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">20+ Years Experience</h4>
                    <p className="text-gray-600 text-sm">Proven track record</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional roofing team at work"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every project receives the same attention to detail and premium materials.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with you to exceed expectations on every project.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600">
                Dependable, on-time service with emergency availability when you need it most.
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
            Contact Elite Roofing Pro today for your free estimate and experience the difference quality makes.
          </p>
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </section>

      <RoofingFooter />
    </div>
  );
};

export default RoofingAbout;
