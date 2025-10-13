
import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingFooter from '../components/PaintingFooter';
import { Shield, CheckCircle, FileText, Paintbrush } from 'lucide-react';

const PaintingTermsConditions = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Paintbrush className="w-6 h-6 text-purple-500 mr-3" />
                  Service Agreement
                </h2>
                <p className="leading-relaxed">
                  By hiring ColorPro Painting for painting services, you agree to these terms and conditions. 
                  Our services include interior painting, exterior painting, cabinet painting, color consultation, 
                  and specialty finishes for residential and commercial properties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                  Pricing and Payment
                </h2>
                <p className="leading-relaxed mb-3">
                  All pricing is based on surface area, paint quality, prep work required, and project complexity. 
                  Payment schedules are outlined in written estimates and contracts.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Free detailed estimates for all projects</li>
                  <li>Premium paint and materials included</li>
                  <li>Progress payments for larger projects</li>
                  <li>Final payment due upon completion and approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-purple-500 mr-3" />
                  Liability and Insurance
                </h2>
                <p className="leading-relaxed">
                  ColorPro Painting is fully licensed, bonded, and insured with comprehensive general 
                  liability insurance and workers' compensation coverage. All work is performed by 
                  experienced professionals using quality materials and proven techniques.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                  Quality Standards
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Professional surface preparation and priming</li>
                  <li>Premium paint brands and eco-friendly options</li>
                  <li>Proper ventilation and safety protocols</li>
                  <li>Complete cleanup and restoration</li>
                  <li>Final walkthrough and touch-ups</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                  Warranty and Guarantee
                </h2>
                <p className="leading-relaxed">
                  We provide warranties on workmanship and stand behind the quality of our paint and 
                  materials. Warranty terms vary by project type and are detailed in your service 
                  agreement. We guarantee your satisfaction with the final result.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                  Color Consultation
                </h2>
                <p className="leading-relaxed">
                  Our color consultation services help you choose the perfect colors for your space. 
                  Color selections are finalized before work begins. Any changes during the project 
                  may result in additional costs and timeline adjustments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For questions about these terms, please contact us at (555) 123-4567 or 
                  info@colorpropainting.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <PaintingFooter />
    </div>
  );
};

export default PaintingTermsConditions;
