
import React, { useState, useEffect, useRef } from 'react';

import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import { httpFile } from "../../../config.js";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MapPin, Clock, Shield, Building } from 'lucide-react';
import { Star, StarHalf, Quote } from "lucide-react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Phone, Sparkles } from 'lucide-react';

import { useSEO } from '../../../hooks/useSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { generateFAQSchema, generateReviewSchema, generateServicesSchema } from "../../../hooks/schemaMarkup"
interface Testimonial {
  review_text: string;
  customer_image: string;
  customer_name: string;
  rating: number | string;
}

import humanizeString from "../../../extras/stringUtils.js";
import { slugify } from "../../../extras/slug";
import CleaningCountryMap from '../components/CleaningCountryMap.js';

import CleaningHeader from '../components/CleaningHeader';

import CleaningAboutUs from '../components/CleaningAboutUs';

import CleaningWhyChooseUs from '../components/CleaningWhyChooseUs';
import CleaningProcess from '../components/CleaningProcess';
import CleaningGuarantee from '../components/CleaningGuarantee';

import CleaningFooter from '../components/CleaningFooter';
import { Flag } from 'lucide-react';
import CleaningLoader from '../components/CleaningLoader';
import { removeDot } from "../../../extras/removeDot.js";

const CleaningCountry = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { countryName } = useParams();
  const displayCountryName = humanizeString(countryName) || 'United States';
  const [isAreaLoading, setIsAreaLoading] = useState(false);
  let { id, UpcomingPage, nextPage, locationName, sortname, _id } = location.state || {};

  const [refId, setRefId] = useState(() => {
    if (id) return id; // coming from internal navigation
    return ""; // will set after slugToPageType API call on refresh
  });


  const pathname = location.pathname;
  const slug = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectCategory, setProjectCategory] = useState("");

  const [pageType, setPageType] = useState('');
  const [projectLocations, setProjectLocations] = useState([]);
  const [projectServices, setprojectServices] = useState([]);
  const [projectReviews, setProjectReviews] = useState<Testimonial[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectFaqs, setprojectFaqs] = useState([]);
  const [welcomeLine, setWelcomeLine] = useState("");
  const [showName, setShowName] = useState("");
  const [countryDescription, setCountryDescription] = useState("");
  const [stateDescription, setStateDescription] = useState("");
  const [cityDescription, setCityDescription] = useState("");
  const [localAreaDescription, setLocalAreaDescription] = useState("");

  const [pageLocation, setPageLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroLoading, setIsHeroLoading] = useState(true);

  const [locInfo, setLocInfo] = useState<{ name: string; lat: number; lng: number } | null>(null);
  const [CTA, setCTA] = useState([]);
  const { seoData } = useSEO('/');
  const [heroImage, setHeroImage] = useState("");
  const [hero2Image, setHero2Image] = useState("");
  const [hero3Image, setHero3Image] = useState("");
  const [hero4Image, setHero4Image] = useState("");
  const areaSectionRef = useRef(null);

  const ctaSlotMap = {
    country: {
      slot1: 0, // first CTA
      slot2: 2, // third CTA
      slot3: 1, // second CTA
      slot4: 4, // fifth CTA
      slot5: 3  // fourth CTA
    },
    state: {
      slot1: 3, // fourth CTA
      slot2: 0, // first CTA
      slot3: 1, // second CTA
      slot4: 2, // third CTA
      slot5: 4  // fifth CTA
    },
    city: {
      slot1: 4, // second CTA
      slot2: 2, // third CTA
      slot3: 0, // first CTA
      slot4: 3, // fourth CTA
      slot5: 1  // fifth CTA
    },
    local_area: {
      slot1: 1, // second CTA
      slot2: 3, // fourth CTA
      slot3: 2, // third CTA
      slot4: 0, // first CTA
      slot5: 4  // fifth CTA
    }
  };


  const renderCTA = (CTA, pageType, slot, phoneNumber, projectCategory) => {
    const slotMap = ctaSlotMap[pageType] || {};
    const index = slotMap[slot];

    if (CTA.length === 0) return null;
    const cta = CTA[index] || CTA[0];




    return (
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Call Now: {phoneNumber}</span>
            </a>
            <Link
              to="/contact"
              className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
            >
              <Sparkles size={24} />
              <span>Book Services of {projectCategory}</span>
            </Link>
          </div>
        </div>
      </section>
    );
  };


  const projectId = import.meta.env.VITE_PROJECT_ID;

  // Extract values from location state or URL

  // Get city name from URL for city/local area pages
  let cityName = pathname.split('/').pop();
  cityName = showName ? showName : cityName
  // Convert the first letter of each word to uppercase and the rest to lowercase
  cityName = cityName.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');

  function formatLocation(input) {
    const [first, second] = input.split(",").map(s => s.trim());
    if (!second) return input;
    return second.length <= 3
      ? `${first}, ${second.toUpperCase()}`
      : `${first}, ${second.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())}`;
  }

  cityName = formatLocation(cityName)




  const getPageTitle = () => {
    switch (pageType) {
      case 'country':
        return `${projectCategory} services in ${cityName}`;
      case 'state':
        return `${cityName} ${projectCategory} Services`;
      case 'city':
        return `${cityName} ${projectCategory} Services`;
      case 'local_area':
        return cityName;
      default:
        return `${projectCategory} services`;
    }
  };

  const getPageDescription = () => {
    switch (pageType) {
      case 'country':
        return `${countryDescription} in ${humanizeString(pageLocation)}.`;
      case 'state':
        return ` ${stateDescription} in ${(cityName)}`;
      case 'city':
        return ` ${cityDescription} in ${(cityName)}`;
      case 'local_area':
        return `${localAreaDescription} in ${(cityName)}`;
      default:
        return `${projectCategory} services.`;
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

  useEffect(() => {
    if (location.state?.scrollToAreaSection && areaSectionRef.current) {
      areaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]); // Runs only when location.state changes



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes

  useEffect(() => {
    if (heroImage && hero2Image && hero3Image && hero4Image) {
      setIsHeroLoading(false);  // Set to false when hero data is ready
    }
  }, [heroImage, hero2Image, hero3Image, hero4Image]);

  // First API call to determine page type
  useEffect(() => {
    const fetchPageType = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/slugToPageType", {
          projectId,
          slug
        });

        console.log(data, "<<<<<>>>>>>>>data of slug")

        if (data?.slugType) {
          setPageType(data.slugType);
        }

        if (data?.locationId) {
          setRefId(data.locationId);
        } else if (id) {
          setRefId(id);
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
    const fetchData = async () => {
      try {
        let apiPageType = pageType;
        let refId = id;
        let apiId = _id;
        let refLocation = slug;
        let reqFrom = "";

        switch (pageType) {
          case 'country':
            reqFrom = "cleaningCountry";
            break;
          case 'state':
            reqFrom = "cleaningState";
            break;
          case 'city':
            reqFrom = "cleaningCity";
            break;
          case 'local_area':
            reqFrom = "cleningArea";
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
          setWelcomeLine(data.projectInfo.welcomeLine);

          setProjectReviews(data.testimonials || []);
          setprojectFaqs(data.faq || []);
          setPageLocation(data.RefLocation || '');
          setShowName(data.showName);
          setPhoneNumber(data.aboutUs.phone);
          setCTA(data.projectInfo.cta || []); // <-- store CTA here
          setIsLoading(false);
          setHeroImage(data.projectInfo.images[0].url);
          setHero2Image(data.projectInfo.images[1].url);
          setHero3Image(data.projectInfo.images[2].url);
          setHero4Image(data.projectInfo.images[3].url);

          if (data.projectInfo.descriptions) {
            setCountryDescription(removeDot(data.projectInfo.descriptions[0] || "")); // Country description (index 0)
            setStateDescription(removeDot(data.projectInfo.descriptions[1] || ""));   // State description (index 1)
            setCityDescription(removeDot(data.projectInfo.descriptions[2] || ""));    // City description (index 2)
            setLocalAreaDescription(removeDot(data.projectInfo.descriptions[3] || "")); // Local Area description (index 3)
          }

          if (data.info && data.info.lat && data.info.lng) {
            setLocInfo({
              name: data.info.name,
              lat: data.info.lat,
              lng: data.info.lng
            });
          }

          // Set isHeroLoading to false once title and description are ready
          if (getPageTitle() && getPageDescription()) {
            setIsHeroLoading(false);
          }

        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    if (pageType) {
      fetchData();
    }
  }, [pageType, projectId, slug]);

  // Make sure this useEffect runs on mount, and when the pageType and refId are available
  useEffect(() => {
    const fetchAreasWeServe = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/area_we_serve", {
          projectId,
          pageType,
          refId
        });

        if (data && data.locations) {
          setProjectLocations(data.locations || []);
        }
      } catch (error) {
        console.error("Error fetching areas we serve:", error);
      }
    };

    // Check if pageType and refId are available
    if (pageType) {

      console.log("having page type and refid")
      fetchAreasWeServe();
    } else {
      console.log("not haveing page tiyep ofr refid", pageType, refId)
    }
  }, [projectId, pageType, refId]); // Add these as dependencies so it runs when they change


  useEffect(() => {
    if (location.state?.scrollToAreaSection && areaSectionRef.current) {
      areaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleLocationClick = (locationSlug, id, _id, sortname, scrollToAreaSection = false) => {
    setIsAreaLoading(true);

    navigate(`/${locationSlug}`, {
      state: {
        id,
        projectId,
        UpcomingPage,
        nextPage,
        locationName: locationSlug.split('/').pop(),
        _id,
        scrollToAreaSection // new flag passed to next page
      }
    });

    const randomDelay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
    setTimeout(() => {
      setIsAreaLoading(false);
    }, randomDelay);
  };

  const handleServiceClick = (service: any) => {
    const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');

    // Build the new route using the current pathname
    const newRoute = `${pathname}/services/${serviceName}`;

    navigate(newRoute, {
      state: {
        serviceId: service._id,
        serviceName: service.service_name,
        serviceDescription: service.service_description,
        locationName: cityName, // or your preferred location identifier
        serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage1: service.images[1]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage2: service.images[2]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
      }
    });
  };




  const getFirstSentence = (text: string) => {
    if (!text) return '';
    const idx = text.indexOf('.');
    return idx > -1 ? text.slice(0, idx + 1) : text;
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

  if (isHeroLoading || isLoading) {
    return <CleaningLoader />;
  }

  // console.log(countryDescription,"countryDescriptioncountryDescriptioncountryDescriptioncountryDescription")

  const HeroIcon = getHeroIcon();
  // Extract route segments for dynamic breadcrumbs
  const segments = pathname.split('/').filter(Boolean); // removes empty strings due to leading '/'




  const faqSchema = generateFAQSchema(projectFaqs);
  const reviewSchema = generateReviewSchema(projectReviews);
  const servicesSchema = generateServicesSchema(projectServices);


  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${seoData?.meta_title} in ${cityName}`}</title>

        <meta name="description" content={seoData.meta_description} />
        <meta name="keywords" content={seoData.meta_keywords} />
        {/* Embed FAQ schema */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema, null, 2)}
          </script>
        )}

        {/* Embed Reviews schema */}
        {reviewSchema && (
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema, null, 2)}
          </script>
        )}

        {/* Embed Services schema */}
        {servicesSchema && (
          <script type="application/ld+json">
            {JSON.stringify(servicesSchema, null, 2)}
          </script>
        )}

      </Helmet>

      <div className="min-h-screen font-poppins">
        <CleaningHeader />

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                  const url = '/' + segments.slice(0, index + 1).join('/');
                  const isLast = index === segments.length - 1;

                  // Capitalize each segment for display (you can use humanizeString or your utility)
                  const displayName = segment
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                  return (
                    <React.Fragment key={index}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="font-medium text-green-600">{displayName}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link to={url}>{displayName}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

          </div>
        </div>


        {/* Dynamic Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: pageType === 'country'
                ? `url(${heroImage})`  // Hero image for country
                : pageType === 'state'
                  ? `url(${hero2Image})`  // Hero image for state
                  : pageType === 'city'
                    ? `url(${hero3Image})`  // Hero image for city
                    : pageType === 'local_area'
                      ? `url(${hero4Image})`  // Hero image for local area
                      : 'url(https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)', // Default image
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/85 to-emerald-600/85"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {pageType === 'local_area' ? (
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <HeroIcon className="w-8 h-8 text-emerald-400 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold">{getPageTitle()}</h1>
                </div>
                <p className="text-xl text-green-100 max-w-2xl mx-auto mb-6">
                  {getPageDescription()}
                </p>


                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="group bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
                  >
                    <Phone size={24} className="group-hover:animate-pulse" />
                    <span>Call Now: {phoneNumber}</span>
                  </a>
                  <Link
                    to="/contact"
                    className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
                  >
                    <Sparkles size={24} />
                    <span>Book Services of {projectCategory}</span>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <HeroIcon className="w-8 h-8 text-emerald-400 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold">{getPageTitle()}</h1>
                </div>
                <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                  {getPageDescription()}
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="group bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now {phoneNumber}</span>
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

        {/* Map Section (only if lat/lng available) */}
        {locInfo && (
          <CleaningCountryMap
            locationName={locInfo.name}
            lat={locInfo.lat}
            lng={locInfo.lng}
            pageType={pageType}
          />
        )}


        {renderCTA(CTA, pageType, 'slot1', phoneNumber, projectCategory)}
        <CleaningAboutUs />

        {/* Services Section */}
        <section className="py-20 bg-white font-poppins">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
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
                      {service.service_name} in {cityName}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{getFirstSentence(service.service_description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {renderCTA(CTA, pageType, 'slot2', phoneNumber, projectCategory)}
        <CleaningWhyChooseUs />
        <CleaningProcess />
        {renderCTA(CTA, pageType, 'slot3', phoneNumber, projectCategory)}
        <CleaningGuarantee />

        {/* Testimonials Section */}
        {projectReviews.length > 0 && (
          <section className="py-20 bg-white font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  What Our Customers Say
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
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
                        <Quote className="w-10 h-10 text-green-500 mb-4" />
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
        {renderCTA(CTA, pageType, 'slot4', phoneNumber, projectCategory)}
        {/* Service Areas Section */}


        <section ref={areaSectionRef} className="py-20 bg-gray-50 font-poppins">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Areas We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {projectCategory} services throughout our coverage area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectLocations.map((area, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationClick(area.slug, area.location_id, area._id, sortname)}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {area.name}{pageType === 'country' && sortname ? `, ${sortname}` : ''}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-green-500 mr-3" />
                      <span>Response time: Fast</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Shield className="w-5 h-5 text-emerald-500 mr-3" />
                      <span>100% Professional services</span>
                    </div>
                  </div>


                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent div click event
                      handleLocationClick(area.slug, area.location_id, area._id, sortname, true);
                    }}
                    className="mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    See Areas
                  </button>

                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        {projectFaqs.length > 0 && (
          <section className="py-20 bg-white font-poppins">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Got questions? We've got answers. Here are the most common questions about our cleaning services.
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
                        <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
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

        {renderCTA(CTA, pageType, 'slot5', phoneNumber, projectCategory)}
        <CleaningFooter />
      </div>
    </HelmetProvider>
  );
};

export default CleaningCountry;