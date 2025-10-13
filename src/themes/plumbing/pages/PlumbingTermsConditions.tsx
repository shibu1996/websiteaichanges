
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import { Shield, CheckCircle, FileText, Wrench } from 'lucide-react';

const PlumbingTermsConditions = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="w-6 h-6 text-blue-500 mr-3" />
                  Service Agreement
                </h2>
                <p className="leading-relaxed">
                  By hiring ProFlow Plumbing for plumbing services, you agree to these terms and conditions. 
                  Our services include emergency plumbing, drain cleaning, water heater services, pipe installation, 
                  bathroom plumbing, and general plumbing repairs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  Pricing and Payment
                </h2>
                <p className="leading-relaxed mb-3">
                  All pricing is based on the scope of work, materials needed, and complexity of the job. 
                  Payment is due upon completion of service unless other arrangements have been made in advance.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>We accept cash, check, and major credit cards</li>
                  <li>Free estimates for major projects</li>
                  <li>Emergency service rates apply after hours</li>
                  <li>Written estimates provided for jobs over $500</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  Liability and Insurance
                </h2>
                <p className="leading-relaxed">
                  ProFlow Plumbing is fully licensed, bonded, and insured. We maintain comprehensive general 
                  liability insurance and workers' compensation coverage. Our work is guaranteed and we 
                  stand behind our craftsmanship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  Emergency Services
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>24/7 emergency service available</li>
                  <li>Same-day service for urgent issues</li>
                  <li>Licensed and experienced technicians</li>
                  <li>Fully stocked service vehicles</li>
                  <li>Upfront pricing with no hidden fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  Warranty and Guarantee
                </h2>
                <p className="leading-relaxed">
                  We provide warranties on parts and labor. Labor warranty periods vary by type of work. 
                  Parts are covered by manufacturer warranties. We guarantee our workmanship and will 
                  return to address any issues at no charge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  Safety and Compliance
                </h2>
                <p className="leading-relaxed">
                  All work is performed in accordance with local plumbing codes and regulations. 
                  We obtain all necessary permits and schedule required inspections when applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at (555) 123-4567 or 
                  info@proflowplumbing.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <PlumbingFooter />
    </div>
  );
};

export default PlumbingTermsConditions;
