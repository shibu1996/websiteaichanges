
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Paintbrush } from 'lucide-react';
import { useState } from 'react';

const PaintingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Areas', href: '/areas' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg mr-3">
              <Paintbrush className="h-6 w-6 text-white" />
            </div>
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ColorPro Painting
              </h1>
              <p className="text-sm text-gray-600">Professional Interior & Exterior Painting</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PaintingHeader;
