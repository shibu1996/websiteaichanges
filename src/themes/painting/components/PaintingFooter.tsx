
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useFooterData } from '../../../hooks/useFooterData.js';

const PaintingFooter = () => {
  const navigate = useNavigate();
  const { footerData, isLoading } = useFooterData();

  if (isLoading) {
    return (
      <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-gray-400">Loading...</div>
        </div>
      </footer>
    );
  }

  const projectName = footerData?.projectName || "ColorPro Painting";
  const welcomeLine = footerData?.welcomeLine || "Professional interior and exterior painting services you can trust. Same-day estimates and satisfaction guaranteed on all projects.";
  const aboutUs = footerData?.aboutUs || {};
  const services = footerData?.services || [];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{projectName}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {welcomeLine}
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Facebook size={20} />
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Twitter size={20} />
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Instagram size={20} />
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`)} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {service.service_name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigate('/')} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => navigate('/services')} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Services</button></li>
              <li><button onClick={() => navigate('/areas')} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Service Areas</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              {aboutUs.phone && (
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{aboutUs.phone}</span>
                </div>
              )}
              {aboutUs.email && (
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{aboutUs.email}</span>
                </div>
              )}
              {aboutUs.mainLocation && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{aboutUs.mainLocation}</span>
                </div>
              )}
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Mon-Fri: 7AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 {projectName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => navigate('/painting/privacy-policy')} className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/painting/terms-conditions')} className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button onClick={() => navigate('/disclaimer')} className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PaintingFooter;
