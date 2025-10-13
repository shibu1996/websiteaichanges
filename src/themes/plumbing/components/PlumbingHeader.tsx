
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const PlumbingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Emergency Plumbing', slug: 'emergency-plumbing' },
    { name: 'Drain Cleaning', slug: 'drain-cleaning' },
    { name: 'Water Heater Repair', slug: 'water-heater-repair' },
    { name: 'Pipe Installation', slug: 'pipe-installation' },
    { name: 'Bathroom Plumbing', slug: 'bathroom-plumbing' }
  ];

  const areasWeServe = [
    { name: 'Country', slug: 'country', type: 'country' },
    { name: 'States', slug: 'states', type: 'state' },
    { name: 'Cities', slug: 'cities', type: 'city' },
    { name: 'Local Areas', slug: 'areas', type: 'local' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 font-poppins">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <a href="tel:5551234567" className="font-medium hover:text-blue-200 transition-colors">(555) 123-4567</a>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>24/7 Emergency Plumbing Available</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-semibold">Licensed • Insured • Local Plumbing Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ProFlow Plumbing
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group outline-none">
                Services
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 min-w-[250px] p-2 font-poppins">
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug} className="p-0">
                    <Link 
                      to={`/services/${service.slug}`}
                      className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 font-medium text-left"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="p-0 border-t border-gray-100 mt-2 pt-2">
                  <Link 
                    to="/services"
                    className="w-full px-4 py-3 text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-all duration-200 text-left"
                  >
                    View All Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Areas We Serve Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group outline-none">
                Areas We Serve
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50 min-w-[220px] p-2 font-poppins">
                {areasWeServe.map((area) => (
                  <DropdownMenuItem key={area.slug} className="p-0">
                    <Link 
                      to={`/${area.slug}`}
                      className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 font-medium text-left"
                    >
                      {area.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <Link 
                    to="/maps"
                    className="w-full px-4 py-3 text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-all duration-200 text-left"
                  >
                    Maps
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:5551234567" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-4 lg:px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-slow">
              CALL NOW: (555) 123-4567
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              <Link to="/" className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-all duration-200" onClick={() => setIsMenuOpen(false)}>About</Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-semibold mb-3 text-base">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link key={service.slug} to={`/services/${service.slug}`} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                  <Link to="/services" className="block w-full text-left py-2 text-sm text-blue-600 font-semibold border-t border-gray-100 pt-3 mt-2" onClick={() => setIsMenuOpen(false)}>View All Services</Link>
                </div>
              </div>

              {/* Mobile Areas */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-semibold mb-3 text-base">Areas We Serve</div>
                <div className="pl-4 space-y-2">
                  {areasWeServe.map((area) => (
                    <Link key={area.slug} to={`/${area.slug}`} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                      {area.name}
                    </Link>
                  ))}
                  <Link to="/maps" className="block w-full text-left py-2 text-sm text-blue-600 font-semibold border-t border-gray-100 pt-3 mt-2" onClick={() => setIsMenuOpen(false)}>Maps</Link>
                </div>
              </div>

              <Link to="/contact" className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="px-3 py-2">
                <a href="tel:5551234567" className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-3 rounded-full font-bold text-sm text-center transition-all duration-300 transform hover:scale-105">
                  CALL NOW: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PlumbingHeader;
