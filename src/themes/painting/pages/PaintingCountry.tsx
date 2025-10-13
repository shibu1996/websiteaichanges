import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { httpFile } from "../../../config.js";
import { MapPin, Clock, Shield, Building } from 'lucide-react';
import { Star, StarHalf, Quote } from "lucide-react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Phone } from 'lucide-react';

interface Testimonial {
  review_text: string;
  customer_image: string;
  customer_name: string;
  rating: number | string;
}

import humanizeString from "../../../extras/stringUtils.js";
import { slugify } from "../../../extras/slug";

import PaintingHeader from '../components/PaintingHeader';
import PaintingCTA from '../components/PaintingCTA';
import PaintingAboutUs from '../components/PaintingAboutUs';
import PaintingServices from '../components/PaintingServices';
import PaintingWhyChooseUs from '../components/PaintingWhyChooseUs';
import PaintingProcess from '../components/PaintingProcess';
import PaintingGuarantee from '../components/PaintingGuarantee';
import PaintingTestimonials from '../components/PaintingTestimonials';
import PaintingServiceAreas from '../components/PaintingServiceAreas';
import PaintingFAQ from '../components/PaintingFAQ';
import PaintingFooter from '../components/PaintingFooter';
import { Flag } from 'lucide-react';
import PaintingLoader from '../components/PaintingLoader';
import ServiceMap from '../../../components/ServiceMap';

const PaintingCountry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get slug from URL path
  const pathname = location.pathname;
  const slug = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  
  const [pageType, setPageType] = useState('');
  const [projectLocations, setProjectLocations] = useState([]);
  const [projectServices, setprojectServices] = useState([]);
  const [projectReviews, setProjectReviews] = useState<Testimonial[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectFaqs, setprojectFaqs] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [pageLocation, setPageLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Project ID hierarchy: env > localStorage > hardcoded
  const getProjectId = () => {
    if (import.meta.env.VITE_PROJECT_ID) {
      return import.meta.env.VITE_PROJECT_ID;
    }
    const savedSiteId = localStorage.getItem("currentSiteId");
    return savedSiteId || "685554e6ce43a5111d80438e";
  };

  const projectId = getProjectId();

  // Extract values from location state or URL
  let { id, UpcomingPage, nextPage, locationName, sortname, _id } = location.state || {};
  
  // Get city name from URL for city/local area pages
  const cityName = pathname.split('/').pop();

  const getPageTitle = () => {
    switch (pageType) {
      case 'country':
        return `${projectCategory} services in ${humanizeString(pageLocation)}, ${sortname}`;
      case 'state':
        return `${humanizeString(cityName)} ${projectCategory} Services`;
      case 'city':
        return `${humanizeString(cityName)} ${projectCategory} Services`;
      case 'local_area':
        return humanizeString(cityName);
      default:
        return `${projectCategory} services`;
    }
  };

  const getPageDescription = () => {
    switch (pageType) {
      case 'country':
        return `Professional ${projectCategory} services across the ${humanizeString(pageLocation)} with nationwide coverage and local expertise in every state.`;
      case 'state':
        return `Professional residential and commercial ${projectCategory} services in ${humanizeString(cityName)} with same-day booking and reliable solutions.`;
      case 'city':
        return `Professional residential and commercial ${projectCategory} services in ${humanizeString(cityName)} with same-day booking and reliable solutions.`;
      case 'local_area':
        return `Professional ${projectCategory} services in ${humanizeString(cityName)} with same-day booking and reliable solutions.`;
      default:
        return `Professional ${projectCategory} services.`;
    }
  };

  const getHeroIcon = () => {
    switch (pageType) {
      case 'country':
        return Flag;
      case 'state':
      case 'city':
        return Building;
      case 'local_area':
        return MapPin;
      default:
        return Flag;
    }
  };

  // First API call to determine page type
  useEffect(() => {
    const fetchPageType = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/slugToPageType", {
          projectId,
          slug
        });
        
        if (data?.slugType) {
          setPageType(data.slugType);
        }
      } catch (error) {
        console.error("Error fetching page type:", error);
        setPageType('country');
      }
    };

    if (slug) {
      fetchPageType();
    }
  }, [slug, projectId]);

  // Second API call based on page type
  useEffect(() => {
    if (!pageType) return;

    const fetchData = async () => {
      try {
        let apiPageType = pageType;
        let refId = id;
        let apiId = _id;
        let refLocation = slug;
        let reqFrom = "";

        switch (pageType) {
          case 'country':
            reqFrom = "paintingCountry";
            break;
          case 'state':
            reqFrom = "paintingState";
            break;
          case 'city':
            reqFrom = "paintingCity";
            break;
          case 'local_area':
            reqFrom = "paintingArea";
            refLocation = slug;
            break;
        }

        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: apiPageType,
          refId: refId,
          _id: apiId,
          RefLocation: refLocation,
          reqFrom: reqFrom
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setProjectLocations(data.locations || []);
          setProjectReviews(data.testimonials || []);
          setprojectFaqs(data.faq || []);
          setPageLocation(data.RefLocation || '');
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageType, projectId, slug]);

  const handleLocationClick = (locationName, id, _id, sortname) => {
    let locationToNavigate = `/${slug}/${slugify(locationName)}`;

    navigate(locationToNavigate, {
      state: {
        id,
        projectId,
        UpcomingPage,
        nextPage,
        locationName,
        _id
      }
    });
  };

  const getFirstSentence = (text: string) => {
    if (!text) return '';
    const idx = text.indexOf('.');
    return idx > -1 ? text.slice(0, idx + 1) : text;
  };

  const handleServiceClick = (service: any) => {
    const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');
    let locationName = '';
    
    switch (pageType) {
      case 'country':
        locationName = `${humanizeString(pageLocation)}${sortname ? `, ${sortname}` : ''}`;
        break;
      case 'state':
      case 'city':
      case 'local_area':
        locationName = humanizeString(cityName);
        break;
    }

    navigate(`/services/${serviceName}`, {
      state: {
        serviceId: service._id,
        serviceName: service.service_name,
        serviceDescription: service.service_description,
        locationName: locationName,
        serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage1: service.images[1]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage2: service.images[2]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
      }
    });
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_services", {
          projectId,
        });

        if (data) {
          setprojectServices(data.services || []);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [projectId]);

  if (isLoading) {
    return <PaintingLoader />;
  }

  const HeroIcon = getHeroIcon();

  return (
    <div className="min-h-screen font-poppins">
      <PaintingHeader />
      
      {/* Dynamic Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: pageType === 'local_area' 
              ? 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)'
              : 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 to-pink-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {pageType === 'local_area' ? (
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <HeroIcon className="w-8 h-8 text-pink-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{getPageTitle()}</h1>
              </div>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-6">
                {getPageDescription()}
              </p>
              <p className="text-lg text-purple-100 max-w-xl mx-auto mb-8">
                Reach out today for personalized service and reliable solutions at your doorstep.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="tel:5551234567"
                  className="group bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Quote className="w-5 h-5" />
                  <span>Free Quote</span>
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-pink-400" />
                <span className="text-lg">Same-day booking available</span>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <HeroIcon className="w-8 h-8 text-pink-400 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">{getPageTitle()}</h1>
              </div>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                {getPageDescription()}
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:5551234567"
                  className="group bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Quote className="w-5 h-5" />
                  <span>Free Quote</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <PaintingAboutUs />
      
      {/* Services Section */}
      <section className="py-20 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our {projectCategory} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive {projectCategory} solutions for professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"}
                    alt={service.service_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${service.gradient} rounded-full p-3 text-white shadow-lg`}>
                    <i className={service.fas_fa_icon} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.service_name} in {pageType === 'country' ? `${humanizeString(pageLocation)},${sortname}` : humanizeString(cityName)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{getFirstSentence(service.service_description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PaintingCTA />
      <PaintingWhyChooseUs />
      <PaintingGuarantee />
      <PaintingCTA />

      {/* Testimonials Section */}
      {projectReviews.length > 0 && (
        <section className="py-20 bg-white font-poppins">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our painting services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectReviews.map((testimonial, index) => {
                const rawRating = Number(testimonial.rating) || 0;
                const fullStars = Math.floor(rawRating);
                const hasHalf = rawRating - fullStars >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-purple-500 mb-4" />
                      <p className="text-gray-700 leading-relaxed text-lg">
                        "{testimonial.review_text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.customer_name}
                          </h4>
                        </div>
                      </div>

                      <div className="flex space-x-1">
                        {[...Array(fullStars)].map((_, i) => (
                          <Star
                            key={`full-${index}-${i}`}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                        {hasHalf && (
                          <StarHalf
                            key={`half-${index}`}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        )}
                        {[...Array(emptyStars)].map((_, i) => (
                          <Star
                            key={`empty-${index}-${i}`}
                            className="w-5 h-5 text-gray-300 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <PaintingCTA />

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50 font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional {projectCategory} services throughout our coverage area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectLocations.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {area.name}{pageType === 'country' && sortname ? `, ${sortname}` : ''}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Response time: Fast</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 text-pink-500 mr-3" />
                    <span>100% Professional services</span>
                  </div>
                </div>

                {pageType !== 'local_area' && (
                  <button
                    onClick={() => handleLocationClick(area.name, area.location_id, area._id, sortname)}
                    className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    See Areas
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {pageType === 'country' && <ServiceMap theme="painting" />}

      {/* FAQ Section */}
      {projectFaqs.length > 0 && (
        <section className="py-20 bg-white font-poppins">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Got questions? We've got answers. Here are the most common questions about our painting services.
              </p>
            </div>

            <div className="space-y-4">
              {projectFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PaintingCTA />
      <PaintingFooter />
    </div>
  );
};

export default PaintingCountry;
