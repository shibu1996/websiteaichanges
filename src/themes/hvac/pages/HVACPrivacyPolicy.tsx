
import React from 'react';
import HVACHeader from '../components/HVACHeader';
import HVACFooter from '../components/HVACFooter';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const HVACPrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HVACHeader />
      
      <div className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-3">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Request HVAC service or system installation</li>
                  <li>Contact us for emergency heating/cooling repairs</li>
                  <li>Schedule maintenance appointments</li>
                  <li>Participate in service programs or warranties</li>
                  <li>Provide feedback or reviews</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-orange-500 mr-3" />
                  Types of Information
                </h2>
                <p className="leading-relaxed mb-3">Information we may collect includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Name and contact information (phone, email, address)</li>
                  <li>Property details and HVAC system specifications</li>
                  <li>Payment information (processed securely by third parties)</li>
                  <li>Service history and maintenance records</li>
                  <li>Energy usage patterns and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-orange-500 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Provide and improve our HVAC services</li>
                  <li>Respond to emergency service calls</li>
                  <li>Process payments and billing</li>
                  <li>Send maintenance reminders and seasonal tips</li>
                  <li>Comply with energy efficiency regulations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-orange-500 mr-3" />
                  Information Sharing
                </h2>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Equipment manufacturers for warranty claims</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Insurance companies for claims processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-orange-500 mr-3" />
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement robust security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. All sensitive 
                  data is encrypted both in transit and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-orange-500 mr-3" />
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your service records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about this privacy policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="mt-3 space-y-1 ml-6">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@coolheatpro.com</p>
                  <p>Address: 123 HVAC Street, Los Angeles, CA 90210</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <HVACFooter />
    </div>
  );
};

export default HVACPrivacyPolicy;
