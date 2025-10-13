import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useHeaderData } from '../../../hooks/useHeaderData';
import { httpFile } from "../../../config.js";
import { getProjectId } from '../../../hooks/getProjectId';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const navigate = useNavigate();


  const { phoneNumber, projectName, projectSlogan, projectFasFA, isLoading } = useHeaderData();

  useEffect(() => {
    const id = getProjectId();
    setProjectId(id);
  }, []);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const formData = new FormData();
        formData.append('projectId', projectId);
        const response = await httpFile.post('/webapp/v1/getheader', formData);
        if (response.data?.services) setServices(response.data.services);
        if (response.data?.locations) setLocations(response.data.locations);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };
    if (projectId) fetchHeaderData();
  }, [projectId]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (isLoading) {
    return (
      <header 
        className="shadow-lg sticky top-0 z-50 transition-colors duration-300 font-poppins backdrop-blur-md"
        style={{
          backgroundColor: `${colors.surface}95`,
          borderBottom: `1px solid ${colors.primaryButton.bg}20`
        }}
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between py-4">
            <div 
              className="animate-pulse h-8 w-48 rounded"
              style={{ backgroundColor: `${colors.primaryButton.bg}20` }}
            ></div>
            <div 
              className="animate-pulse h-8 w-32 rounded"
              style={{ backgroundColor: `${colors.accent}20` }}
            ></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header 
      className="shadow-lg sticky top-0 z-50 transition-colors duration-300 font-poppins backdrop-blur-md"
      style={{
        backgroundColor: `${colors.surface}95`,
        borderBottom: `1px solid ${colors.primaryButton.bg}20`
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryButton.bg}, ${colors.accent})`
                }}
              >
                <i className={`fas ${projectFasFA} text-white text-lg`}></i>
              </div>
              <div>
                <h1 
                  className="text-xl font-bold transition-colors duration-300 group-hover:opacity-80"
                  style={{ color: colors.heading }}
                >
                  {projectName}
                </h1>
                <p className="text-xs hidden sm:block transition-colors duration-300" style={{ color: colors.description }}>
                  {projectSlogan}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-medium transition-all duration-300 hover:scale-105"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium transition-all duration-300 hover:scale-105"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className="font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                style={{ color: colors.heading }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
              >
                Services <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-2 w-72 rounded-2xl shadow-2xl py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md"
                style={{
                  backgroundColor: `${colors.surface}95`,
                  border: `1px solid ${colors.primaryButton.bg}30`
                }}
              >
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service._id}
                    to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full px-4 py-3 transition-all duration-300 hover:scale-105"
                    style={{ color: colors.heading }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primaryButton.bg;
                      e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.heading;
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <i className={`${service.fas_fa_icon}`} style={{ color: colors.primaryButton.bg }}></i>
                      <span>{service.service_name}</span>
                    </div>
                  </Link>
                ))}
                <div 
                  className="border-t mt-2 pt-2"
                  style={{ borderColor: `${colors.primaryButton.bg}30` }}
                >
                  <Link
                    to="/services"
                    className="block w-full px-4 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    style={{ color: colors.primaryButton.bg }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
                className="font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                style={{ color: colors.heading }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
              >
                Areas <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-2xl py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md"
                style={{
                  backgroundColor: `${colors.surface}95`,
                  border: `1px solid ${colors.primaryButton.bg}30`
                }}
              >
                {locations.slice(0, 5).map((loc) => (
                  <Link
                    key={loc.location_id}
                    to={`/${loc.slug}`}
                    className="block w-full px-4 py-3 transition-all duration-300 hover:scale-105"
                    style={{ color: colors.heading }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primaryButton.bg;
                      e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.heading;
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {loc.name}
                  </Link>
                ))}
                <div 
                  className="border-t mt-2 pt-2"
                  style={{ borderColor: `${colors.primaryButton.bg}30` }}
                >
                  <Link
                    to="/areas"
                    className="block w-full px-4 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    style={{ color: colors.primaryButton.bg }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="font-medium transition-all duration-300 hover:scale-105"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
            >
              Contact
            </Link>
            <Link 
              to="/ListBlogs" 
              className="font-medium transition-all duration-300 hover:scale-105"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primaryButton.bg}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.heading}
            >
              Blogs
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{
                backgroundColor: colors.primaryButton.bg,
                color: colors.primaryButton.text
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.hover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.bg}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{phoneNumber}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110"
            style={{ color: colors.heading }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden py-6 font-poppins"
            style={{ borderTop: `1px solid ${colors.primaryButton.bg}20` }}
          >
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-medium transition-all duration-300 hover:scale-105"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium transition-all duration-300 hover:scale-105"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <Link 
                  to="/services" 
                  className="font-medium transition-all duration-300 hover:scale-105"
                  style={{ color: colors.heading }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 mt-3 space-y-3">
                  {services.slice(0, 5).map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full py-2 text-sm transition-all duration-300 hover:scale-105"
                      style={{ color: colors.description }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <i className={`${service.fas_fa_icon} text-xs`} style={{ color: colors.primaryButton.bg }}></i>
                        <span>{service.service_name}</span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block w-full py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 rounded-lg px-3 py-2"
                    style={{ 
                      color: colors.primaryButton.bg,
                      backgroundColor: `${colors.primaryButton.bg}10`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Mobile Areas */}
              <div>
                <Link 
                  to="/areas" 
                  className="font-medium transition-all duration-300 hover:scale-105"
                  style={{ color: colors.heading }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Areas
                </Link>
                <div className="pl-4 mt-3 space-y-3">
                  {locations.slice(0, 5).map((loc) => (
                    <Link
                      key={loc.location_id}
                      to={`/${loc.slug}`}
                      className="block w-full py-2 text-sm transition-all duration-300 hover:scale-105"
                      style={{ color: colors.description }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {loc.name}
                    </Link>
                  ))}
                  <Link
                    to="/areas"
                    className="block w-full py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 rounded-lg px-3 py-2"
                    style={{ 
                      color: colors.primaryButton.bg,
                      backgroundColor: `${colors.primaryButton.bg}10`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Areas
                  </Link>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="font-medium transition-all duration-300 hover:scale-105"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/ListBlogs" 
                className="font-medium transition-all duration-300 hover:scale-105"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              {/* Mobile Contact Button */}
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 shadow-lg w-fit"
                style={{
                  backgroundColor: colors.primaryButton.bg,
                  color: colors.primaryButton.text
                }}
              >
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
