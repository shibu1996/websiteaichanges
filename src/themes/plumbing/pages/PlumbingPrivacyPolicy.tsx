
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PlumbingPrivacyPolicy = () => {
  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-500 mr-3" />
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-3">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Request a quote or schedule plumbing service</li>
                  <li>Contact us for emergency repairs</li>
                  <li>Subscribe to our maintenance programs</li>
                  <li>Provide feedback or reviews</li>
                  <li>Create an account for service history</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-500 mr-3" />
                  Types of Information
                </h2>
                <p className="leading-relaxed mb-3">Information we may collect includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Name and contact information (phone, email, address)</li>
                  <li>Property details and plumbing system information</li>
                  <li>Payment information (processed securely by third parties)</li>
                  <li>Service history and maintenance records</li>
                  <li>Emergency contact information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-500 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Provide and improve our plumbing services</li>
                  <li>Respond to emergency service calls</li>
                  <li>Process payments and billing</li>
                  <li>Send maintenance reminders and updates</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  Information Sharing
                </h2>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Licensed contractors for specialized work</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Insurance companies for claims processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-500 mr-3" />
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. All data 
                  transmissions are encrypted using SSL technology.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-500 mr-3" />
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
                  <FileText className="w-6 h-6 text-blue-500 mr-3" />
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about this privacy policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="mt-3 space-y-1 ml-6">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@proflowplumbing.com</p>
                  <p>Address: 123 Main Street, Metro City, ST 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <PlumbingFooter />
    </div>
  );
};

export default PlumbingPrivacyPolicy;
