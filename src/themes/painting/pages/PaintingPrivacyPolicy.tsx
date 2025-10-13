
import React from 'react';
import PaintingHeader from '../components/PaintingHeader';
import PaintingFooter from '../components/PaintingFooter';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PaintingPrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-purple-500 mr-3" />
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-3">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Request painting estimates or color consultations</li>
                  <li>Schedule interior or exterior painting services</li>
                  <li>Contact us for project consultations</li>
                  <li>Participate in our satisfaction guarantee program</li>
                  <li>Provide feedback or reviews</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-purple-500 mr-3" />
                  Types of Information
                </h2>
                <p className="leading-relaxed mb-3">Information we may collect includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Name and contact information (phone, email, address)</li>
                  <li>Property details and project specifications</li>
                  <li>Payment information (processed securely by third parties)</li>
                  <li>Color preferences and design choices</li>
                  <li>Project history and service records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-purple-500 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Provide and improve our painting services</li>
                  <li>Provide color consultation and design advice</li>
                  <li>Process payments and billing</li>
                  <li>Send project updates and completion notifications</li>
                  <li>Offer maintenance tips and touch-up services</li>
                  <li>Comply with safety and environmental regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-purple-500 mr-3" />
                  Information Sharing
                </h2>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Paint manufacturers for warranty purposes</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Insurance companies for claims processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-purple-500 mr-3" />
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement strong security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. All sensitive 
                  information is encrypted and handled according to industry best practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-purple-500 mr-3" />
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your project records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-purple-500 mr-3" />
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about this privacy policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="mt-3 space-y-1 ml-6">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@colorpropainting.com</p>
                  <p>Address: Los Angeles, CA</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <PaintingFooter />
    </div>
  );
};

export default PaintingPrivacyPolicy;
