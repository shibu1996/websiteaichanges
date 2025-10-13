
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useFooterData } from '../../../hooks/useFooterData.js';
import { Link } from 'react-router-dom';

const Footer = () => {


  const quickLinks = [
    'About Us',
    'Service Areas',
    'Contact Us',
    'Terms & Conditions',
    'Privacy Policy'
  ];

  const { footerData, isLoading } = useFooterData();
  if (isLoading) {
    return (
      <footer className="bg-gray-900 text-white font-poppins">
        <div className="max-w-7xl mx-auto px-16 py-16">
          <div className="text-center text-gray-400">Loading...</div>
        </div>
      </footer>
    );
  }


  const projectName = footerData?.projectName || "SparkleClean Pro";
  const projectSlogan = footerData?.projectSlogan || "Professional Cleaning";
  const welcomeLine = footerData?.welcomeLine || "Professional residential and commercial cleaning services with eco-friendly products and satisfaction guaranteed.";
  const aboutUs = footerData?.aboutUs || {};
  const services = footerData?.services || [];


  return (
    <footer className="bg-foreground text-background py-16 transition-colors duration-300">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-background">{projectName}</h3>
            <p className="text-primary text-lg mb-4">{projectSlogan}!</p>
            <p className="text-background/80 leading-relaxed">
              {welcomeLine}.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-background">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`} className="text-background/80 hover:text-primary transition-colors">
                    {service.service_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-background">Quick Links</h4>


            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/areas" className="text-background/80 hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms-conditions" className="text-background/80 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-background">Contact Info</h4>
            <div className="space-y-4">
              {aboutUs.phone && (
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-background/80">{aboutUs.phone}</span>
                </div>
              )}
              {aboutUs.email && (
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-background/80">{aboutUs.email}</span>
                </div>
              )}
              {aboutUs.mainLocation && (
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-background/80">{aboutUs.mainLocation}</span>
                </div>
              )}
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-background/80">Mon-Sat: 7AM-6PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-center md:text-left">
              © 2025 {projectName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
