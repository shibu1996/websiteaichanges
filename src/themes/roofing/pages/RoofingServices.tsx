
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { Home, Wrench, RotateCcw, Zap, Search, Shield, Phone, CheckCircle } from 'lucide-react';

const RoofingServices = () => {
  const services = [
    {
      icon: Home,
      title: 'Roof Installation',
      description: 'Complete new roof installation with premium materials and professional workmanship.',
      features: ['Asphalt Shingles', 'Metal Roofing', 'Tile Installation', 'Flat Roof Systems'],
      slug: 'roof-installation'
    },
    {
      icon: Wrench,
      title: 'Roof Repair',
      description: 'Expert repairs for leaks, storm damage, and general roof maintenance needs.',
      features: ['Leak Repair', 'Shingle Replacement', 'Flashing Repair', 'Gutter Repair'],
      slug: 'roof-repair'
    },
    {
      icon: RotateCcw,
      title: 'Roof Replacement',
      description: 'Full roof replacement services when repair is no longer cost-effective.',
      features: ['Complete Tear-off', 'New Underlayment', 'Updated Ventilation', 'Warranty Included'],
      slug: 'roof-replacement'
    },
    {
      icon: Zap,
      title: 'Emergency Service',
      description: '24/7 emergency roofing services for storm damage and urgent repairs.',
      features: ['Storm Damage', 'Emergency Tarping', 'Rapid Response', '24/7 Availability'],
      slug: 'emergency-roof-service'
    },
    {
      icon: Search,
      title: 'Roof Inspection',
      description: 'Comprehensive roof assessments to identify potential issues early.',
      features: ['Detailed Reports', 'Photo Documentation', 'Maintenance Plans', 'Insurance Claims'],
      slug: 'roof-inspection'
    },
    {
      icon: Shield,
      title: 'Roof Maintenance',
      description: 'Preventive maintenance services to extend your roof\'s lifespan.',
      features: ['Annual Inspections', 'Gutter Cleaning', 'Minor Repairs', 'Preventive Care'],
      slug: 'roof-maintenance'
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
              Professional Roofing Services
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Comprehensive roofing solutions from licensed contractors with over 20 years of experience protecting homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle size={16} className="text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`/roofing/services/${service.slug}`}
                  className="text-slate-600 hover:text-slate-500 font-semibold transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elite Roofing Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional roofing services backed by experience, quality, and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Licensed & Bonded</h4>
              <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h4>
              <p className="text-gray-600">Available around the clock for urgent roofing emergencies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Materials</h4>
              <p className="text-gray-600">Only the highest quality roofing materials from trusted manufacturers.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Free Estimates</h4>
              <p className="text-gray-600">Comprehensive inspections and no-obligation quotes for all services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Contact us today for your free roofing estimate and experience professional service that protects your investment.
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

export default RoofingServices;
