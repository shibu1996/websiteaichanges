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
      className="sticky top-0 z-50 transition-all duration-300 font-poppins"
      style={{
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.primaryButton.bg}15`
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: colors.primaryButton.bg
              }}
            >
              <i className={`fas ${projectFasFA} text-white text-sm`}></i>
            </div>
            <div>
              <h1 
                className="text-lg font-bold"
                style={{ color: colors.heading }}
              >
                {projectName}
              </h1>
              <p className="text-xs hidden sm:block" style={{ color: colors.description }}>
                {projectSlogan}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                e.currentTarget.style.color = colors.primaryButton.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.heading;
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                e.currentTarget.style.color = colors.primaryButton.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.heading;
              }}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1"
                style={{ color: colors.heading }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Services <ChevronDown className="w-3 h-3" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.primaryButton.bg}20`
                }}
              >
                {services.slice(0, 6).map((service) => (
                  <Link
                    key={service._id}
                    to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full px-4 py-2 text-sm transition-colors duration-200"
                    style={{ color: colors.heading }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                      e.currentTarget.style.color = colors.primaryButton.bg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.heading;
                    }}
                  >
                    {service.service_name}
                  </Link>
                ))}
                <div 
                  className="border-t mt-1 pt-1"
                  style={{ borderColor: `${colors.primaryButton.bg}20` }}
                >
                  <Link
                    to="/services"
                    className="block w-full px-4 py-2 text-sm font-semibold"
                    style={{ color: colors.primaryButton.bg }}
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
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1"
                style={{ color: colors.heading }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Areas <ChevronDown className="w-3 h-3" />
              </Link>
              <div 
                className="absolute top-full left-0 mt-1 w-56 rounded-xl shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.primaryButton.bg}20`
                }}
              >
                {locations.slice(0, 6).map((loc) => (
                  <Link
                    key={loc.location_id}
                    to={`/${loc.slug}`}
                    className="block w-full px-4 py-2 text-sm transition-colors duration-200"
                    style={{ color: colors.heading }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                      e.currentTarget.style.color = colors.primaryButton.bg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.heading;
                    }}
                  >
                    {loc.name}
                  </Link>
                ))}
                <div 
                  className="border-t mt-1 pt-1"
                  style={{ borderColor: `${colors.primaryButton.bg}20` }}
                >
                  <Link
                    to="/areas"
                    className="block w-full px-4 py-2 text-sm font-semibold"
                    style={{ color: colors.primaryButton.bg }}
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                e.currentTarget.style.color = colors.primaryButton.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.heading;
              }}
            >
              Contact
            </Link>
            <Link 
              to="/ListBlogs" 
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                e.currentTarget.style.color = colors.primaryButton.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.heading;
              }}
            >
              Blogs
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
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
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: colors.heading }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden py-4 font-poppins"
            style={{ borderTop: `1px solid ${colors.primaryButton.bg}15` }}
          >
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <Link 
                  to="/services" 
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 block"
                  style={{ color: colors.heading }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                    e.currentTarget.style.color = colors.primaryButton.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.heading;
                  }}
                >
                  Services
                </Link>
                <div className="pl-4 mt-1 space-y-1">
                  {services.slice(0, 4).map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full px-4 py-2 text-sm transition-colors duration-200"
                      style={{ color: colors.description }}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                        e.currentTarget.style.color = colors.primaryButton.bg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.description;
                      }}
                    >
                      {service.service_name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Areas */}
              <div>
                <Link 
                  to="/areas" 
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 block"
                  style={{ color: colors.heading }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                    e.currentTarget.style.color = colors.primaryButton.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.heading;
                  }}
                >
                  Areas
                </Link>
                <div className="pl-4 mt-1 space-y-1">
                  {locations.slice(0, 4).map((loc) => (
                    <Link
                      key={loc.location_id}
                      to={`/${loc.slug}`}
                      className="block w-full px-4 py-2 text-sm transition-colors duration-200"
                      style={{ color: colors.description }}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                        e.currentTarget.style.color = colors.primaryButton.bg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.description;
                      }}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Contact
              </Link>
              <Link 
                to="/ListBlogs" 
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: colors.heading }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colors.primaryButton.bg}10`;
                  e.currentTarget.style.color = colors.primaryButton.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Blogs
              </Link>

              {/* Mobile Contact Button */}
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 w-fit mt-2"
                style={{
                  backgroundColor: colors.primaryButton.bg,
                  color: colors.primaryButton.text
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.hover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.bg}
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
