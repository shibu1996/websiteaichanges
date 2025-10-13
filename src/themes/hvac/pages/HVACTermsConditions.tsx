
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACFooter from '../components/HVACFooter';
import { Shield, CheckCircle, FileText, Thermometer } from 'lucide-react';

const HVACTermsConditions = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      <div className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Thermometer className="w-6 h-6 text-orange-500 mr-3" />
                  Service Agreement
                </h2>
                <p className="leading-relaxed">
                  By hiring CoolHeat Pro for HVAC services, you agree to these terms and conditions. 
                  Our services include emergency HVAC repair, air conditioning services, heating systems, 
                  HVAC installation, duct cleaning, and thermostat services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3" />
                  Pricing and Payment
                </h2>
                <p className="leading-relaxed mb-3">
                  All pricing is based on the scope of work, equipment needed, and system complexity. 
                  Payment is due upon completion of service unless financing arrangements have been made.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>We accept cash, check, and major credit cards</li>
                  <li>Free estimates for system installations</li>
                  <li>Financing options available for qualified customers</li>
                  <li>Emergency service rates apply after hours and weekends</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-orange-500 mr-3" />
                  Liability and Insurance
                </h2>
                <p className="leading-relaxed">
                  CoolHeat Pro is fully licensed, bonded, and insured. We maintain comprehensive general 
                  liability insurance, workers' compensation coverage, and professional liability insurance. 
                  Our work is guaranteed and backed by manufacturer warranties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3" />
                  Emergency Services
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>24/7 emergency HVAC service available</li>
                  <li>Same-day service for urgent heating/cooling issues</li>
                  <li>EPA certified and licensed technicians</li>
                  <li>Fully equipped service vehicles</li>
                  <li>Transparent pricing with written estimates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3" />
                  Warranty and Guarantee
                </h2>
                <p className="leading-relaxed">
                  We provide comprehensive warranties on parts and labor. Installation work carries 
                  extended warranties. Equipment is covered by manufacturer warranties. We guarantee 
                  our workmanship and will address any issues promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3" />
                  Energy Efficiency
                </h2>
                <p className="leading-relaxed">
                  We are committed to installing and maintaining energy-efficient HVAC systems. 
                  All installations comply with current energy codes and efficiency standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-3" />
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at (555) 123-4567 or 
                  info@coolheatpro.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <HVACFooter />
    </div>
  );
};

export default HVACTermsConditions;
