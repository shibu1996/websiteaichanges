import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useHeaderData } from '../../../hooks/useHeaderData';
import { httpFile } from "../../../config.js";
import { getProjectId } from '../../../hooks/getProjectId';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
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
      <header className="bg-card shadow-lg sticky top-0 z-50 transition-colors duration-300 font-poppins">
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between py-4">
            <div className="animate-pulse bg-gray-200 h-8 w-48 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-card shadow-lg sticky top-0 z-50 transition-colors duration-300 font-poppins">
      <div className="container mx-auto px-16">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex flex-col items-center">


            <h1 className="text-2xl font-bold text-primary"><Link to="/">
              <i className={`fas ${projectFasFA}`}></i>  {projectName} </Link></h1>
            <p className="mt-1 text-sm text-muted-foreground hidden sm:block">{projectSlogan}</p>
          </div>


          {/* Desktop Navigation (hover dropdowns) */}
          <nav className="hidden lg:flex items-center space-x-8 font-poppins">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors">About</Link>

            {/* Services (hover) */}
            <div className="relative group">
              <Link
                to="/services"
                className="text-foreground hover:text-primary font-medium transition-colors flex items-center"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service._id}
                    to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <i className={`${service.fas_fa_icon} text-primary`}></i>
                      <span>{service.service_name}</span>
                    </div>
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <Link
                    to="/services"
                    className="block w-full px-4 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Areas (hover) */}
            <div className="relative group">
              <Link
                to="/areas"
                className="text-foreground hover:text-primary font-medium transition-colors flex items-center"
              >
                Areas <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {locations.slice(0, 5).map((loc) => (
                  <Link
                    key={loc.location_id}
                    to={`/${loc.slug}`}
                    className="block w-full px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <Link
                    to="/areas"
                    className="block w-full px-4 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact</Link>
            <Link to="/ListBlogs" className="text-foreground hover:text-primary font-medium transition-colors">Blogs</Link>

          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 font-poppins">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{phoneNumber}</span>
              </a>
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border font-poppins">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>

              {/* Mobile Services */}
              <div>
                <Link to="/services" className="text-foreground hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  {services.slice(0, 5).map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service.service_name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <i className={`${service.fas_fa_icon} text-primary text-xs`}></i>
                        <span>{service.service_name}</span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block w-full py-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Mobile Areas */}
              <div>
                <Link to="/areas" className="text-foreground hover:text-primary font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Areas
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  {locations.slice(0, 5).map((loc) => (
                    <Link
                      key={loc.location_id}
                      to={`/${loc.slug}`}
                      className="block w-full py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {loc.name}
                    </Link>
                  ))}
                  <Link
                    to="/areas"
                    className="block w-full py-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Areas
                  </Link>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 font-poppins">
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
