
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Clock, ChevronDown, Thermometer } from 'lucide-react';

const HVACHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const services = [
    { name: 'Air Conditioning Repair', slug: 'ac-repair' },
    { name: 'Heating System Repair', slug: 'heating-repair' },
    { name: 'HVAC Installation', slug: 'hvac-installation' },
    { name: 'Duct Cleaning', slug: 'duct-cleaning' },
    { name: 'Thermostat Services', slug: 'thermostat-services' },
    { name: 'Emergency HVAC', slug: 'emergency-hvac' }
  ];

  const areas = [
    { name: 'United States', slug: 'country' },
    { name: 'California', slug: 'state' },
    { name: 'Los Angeles', slug: 'city' },
    { name: 'Downtown LA', slug: 'local-area' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 font-poppins">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>24/7 Emergency Service Available</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:5551234567" 
                className="flex items-center hover:text-orange-200 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  CoolHeat Pro
                </div>
                <div className="text-xs text-gray-500">HVAC Experts</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link 
                to="/services"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 flex items-center"
                onMouseEnter={() => setOpenDropdown('services')}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Link
                    to="/services"
                    className="block w-full text-left px-4 py-3 text-orange-600 font-semibold hover:bg-orange-50 transition-colors duration-200"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <Link 
                to="/areas"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 flex items-center"
                onMouseEnter={() => setOpenDropdown('areas')}
              >
                Areas We Serve
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseEnter={() => setOpenDropdown('areas')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${area.slug}`}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Link
                    to="/areas"
                    className="block w-full text-left px-4 py-3 text-orange-600 font-semibold hover:bg-orange-50 transition-colors duration-200"
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <a 
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="space-y-4">
              <Link 
                to="/"
                className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services"
                className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/areas"
                className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Areas We Serve
              </Link>
              <Link 
                to="/contact"
                className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:5551234567"
                className="block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HVACHeader;
