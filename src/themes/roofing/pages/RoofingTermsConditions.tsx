
import React from 'react';
import RoofingHeader from '../components/RoofingHeader';
import RoofingFooter from '../components/RoofingFooter';
import { Shield, CheckCircle, FileText, Home } from 'lucide-react';

const RoofingTermsConditions = () => {
  return (
    <div className="min-h-screen font-poppins">
      <RoofingHeader />
      
      <div className="bg-gradient-to-br from-slate-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-slate-600 to-orange-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Home className="w-6 h-6 text-slate-600 mr-3" />
                  Service Agreement
                </h2>
                <p className="leading-relaxed">
                  By hiring Elite Roofing Pro for roofing services, you agree to these terms and conditions. 
                  Our services include roof installation, roof repair, roof replacement, emergency roof services, 
                  and roof inspections for both residential and commercial properties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-slate-600 mr-3" />
                  Pricing and Payment
                </h2>
                <p className="leading-relaxed mb-3">
                  All pricing is based on the scope of work, materials specified, and roof complexity. 
                  Payment terms vary by project size and are detailed in written estimates.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Free written estimates for all projects</li>
                  <li>Financing options available for qualified customers</li>
                  <li>Progress payments for large projects</li>
                  <li>Emergency service rates apply for urgent repairs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-slate-600 mr-3" />
                  Liability and Insurance
                </h2>
                <p className="leading-relaxed">
                  Elite Roofing Pro is fully licensed, bonded, and insured with comprehensive general 
                  liability insurance and workers' compensation coverage. All work is performed by 
                  certified professionals and meets or exceeds industry standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-slate-600 mr-3" />
                  Quality Standards
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>All work performed by licensed roofing contractors</li>
                  <li>Premium materials from trusted manufacturers</li>
                  <li>Compliance with local building codes and permits</li>
                  <li>Professional cleanup and debris removal</li>
                  <li>Final inspection and quality assurance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-slate-600 mr-3" />
                  Warranty and Guarantee
                </h2>
                <p className="leading-relaxed">
                  We provide comprehensive warranties on workmanship and materials. Warranty periods 
                  vary by service type and are clearly outlined in your service agreement. 
                  We stand behind our work and will address any issues covered under warranty.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-slate-600 mr-3" />
                  Weather and Delays
                </h2>
                <p className="leading-relaxed">
                  Roofing work is weather-dependent for safety and quality reasons. We monitor 
                  weather conditions and may postpone work if conditions are unsafe. We will 
                  communicate any delays promptly and reschedule as soon as conditions permit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-slate-600 mr-3" />
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at (555) 123-4567 or 
                  info@eliteroofingpro.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <RoofingFooter />
    </div>
  );
};

export default RoofingTermsConditions;
