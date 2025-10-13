import React, { useEffect, useState } from 'react';
import { httpFile } from "../../../config.js";
import { MapPin, Clock, Award } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import AreasHero from '../components/areas/AreasHero';
import AreasGrid from '../components/areas/AreasGrid';
import WhyChooseUsSimple from '../components/WhyChooseUsSimple';
import FAQSection from '../components/FAQSection';
import BookingSection from '../components/BookingSection';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import SEOHead from '../components/SEOHead';
import { Phone, Star, Sparkles, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSEO } from '../../../hooks/useSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui/card';
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';

const Areas = () => {
  const breadcrumbItems = [
    { label: "Areas" }
  ];
  const [whyChooseUsAboutPage, setWhyChooseUsAboutPage] = useState([]);

  const { seoData } = useSEO('/areas');
  const [aboutHeroText, setAboutHeroText] = useState('');
  const [projectCategory, setProjectCategory] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectName, setProjectName] = useState("");

  const [welcomeLine, setWelcomeLine] = useState("");

  const [UpcomingPage, setUpcomingPage] = useState("");
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();


  const projectId = import.meta.env.VITE_PROJECT_ID;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero text from my_site API
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo && data.projectInfo.aboutHeroText) {
          setAboutHeroText(data.projectInfo.aboutHeroText);
          setProjectCategory(data.projectInfo.serviceType);
          setPhoneNumber(data.aboutUs.phone);
          setWhyChooseUsAboutPage(data.projectInfo.whyChooseUsAboutPage)
          setProjectName(data.projectInfo.projectName);

          setHeroImage(data.projectInfo.images[4].url);



        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "servicesAreas"

        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setWelcomeLine(data.projectInfo.welcomeLine);
          setPhoneNumber(data.aboutUs.phone);
          setUpcomingPage(data.upcomingPage);
          setLocations(data.locations);
        }

        console.log(data.slug, "data.slug")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  console.log(locations, "locations");

  const handleLocationClick = (area, isButtonClick) => {
    const slugPath = `/${area.slug}`;

    // If navigating to this page, pass the scroll flag
    if (location.pathname === slugPath) {
      const areaSection = document.getElementById("area-we-serve-section");
      if (areaSection && isButtonClick) {
        const yOffset = -100; // Adjust for header
        const y = areaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(slugPath, {
        state: {
          id: area.location_id,
          projectId,
          UpcomingPage,
          nextPage: getNextPage(),
          locationName: area.name,
          sortname: area.sortname,
          _id: area._id,
          scrollToAreaSection: isButtonClick, // Only set to true when button clicked
        }
      });
    }
  };
  const getNextPage = () => {
    if (UpcomingPage === 'country') return 'States';
    if (UpcomingPage === 'state') return 'Cities';
    if (UpcomingPage === 'city') return 'Local Areas';
    if (UpcomingPage === 'local') return 'whole areas';
    return '';
  };


  return (

    <HelmetProvider>
      <Helmet>
        <title>{seoData.meta_title}</title>
        <meta name="description" content={seoData.meta_description} />
        <meta name="keywords" content={seoData.meta_keywords} />
      </Helmet>


      <div className="min-h-screen font-poppins">

        <PageSchemaMarkup
          pageType="areas"
          pageTitle={seoData.meta_title}
          pageDescription={seoData.meta_description}
          breadcrumbs={[{ name: "Areas", url: "/areas" }]}
        />
        <Header />
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">
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
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium text-green-600">Areas We Serve</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Areas Hero section */}

        <section
          className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center py-8 px-16 transition-all duration-300 overflow-hidden animate-hero-fade-in"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Background Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80 animate-gradient-shift bg-[length:200%_200%]"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float-bounce stagger-1"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-accent-foreground/20 rounded-full animate-float-bounce stagger-2"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary-foreground/15 animate-morphing-shape stagger-3"></div>
            <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent-foreground/10 rounded-full animate-float-bounce stagger-4"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary-foreground/20 rounded-full animate-float stagger-5"></div>
            <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-accent-foreground/15 animate-morphing-shape stagger-6"></div>
          </div>

          <div className="container mx-auto px-16 py-8 z-10 max-w-6xl relative">
            <div className="text-center space-y-6">

              {/* Enhanced Trust Badge */}
              <div className="inline-flex items-center glass-card rounded-full px-6 py-3 text-primary-foreground font-semibold text-base sm:text-lg animate-badge-bounce shadow-2xl hover-glow">
                <Star className="w-5 h-5 mr-2 fill-current animate-pulse stagger-1" />
                <Sparkles className="w-4 h-4 mr-1 animate-pulse stagger-2" />
                Professional Services Available
                <Sparkles className="w-4 h-4 ml-1 animate-pulse stagger-3" />
              </div>


              {/* Enhanced Main Headline */}
              <div className="space-y-3 animate-heading-slide-up stagger-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
                  Areas We <span className="text-yellow-300 animate-wiggle inline-block">Serve</span>
                </h1>
              </div>

              {/* Enhanced Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-4xl mx-auto leading-relaxed animate-subtitle-fade-in stagger-3">
                Professional <span className="text-plumbing-responsive font-bold">{projectCategory}</span> {aboutHeroText}.
              </p>

              {/* Two Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-cta-zoom-in stagger-4">
                {/* Call Now Button */}
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                  <div className="absolute -inset-1 glass-card rounded-2xl animate-pulse-glow"></div>

                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-2xl rounded-2xl border-2 border-orange-400/50 transform hover:scale-105 transition-all duration-300 group animate-gradient-shift bg-[length:200%_200%] hover-float"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                    <div className="relative flex items-center">
                      <div className="relative mr-3">
                        <Phone className="w-6 h-6 animate-icon-bounce" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>

                      <a
                        href={`tel:${phoneNumber}`}>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-semibold opacity-90">CALL NOW</span>
                          <span className="text-xl font-black tracking-wide">{phoneNumber}</span>
                        </div>
                      </a>
                    </div>

                    <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                    </div>
                  </Button>
                </div>

                {/* View All Areas Button */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-primary to-blue-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white hover-float"
                  >
                    <div className="relative flex items-center">
                      <div className="relative mr-3">
                        <Eye className="w-6 h-6 animate-icon-bounce-delayed" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold opacity-90">SEE</span>
                        <span className="text-xl font-black tracking-wide">All Areas</span>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <AreasGrid /> */}
        {/* Areas grid */}


        <section className="py-20 bg-gradient-to-b from-background to-secondary/30 transition-colors duration-300 ">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16 animate-hero-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6 animate-heading-slide-up">Areas We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-subtitle-fade-in stagger-1">
                Professional <span className="text-plumbing-responsive font-bold">{projectCategory}</span> services throughout Our availability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="glass-card rounded-2xl p-6 border border-border/50 shadow-lg animate-card-scale-in stagger-1 hover-float hover-glow">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-icon-bounce" />
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Our Availability</h3>
                  <p className="text-muted-foreground">Nationwide coverage with local expertise</p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/50 shadow-lg animate-card-scale-in stagger-2 hover-float hover-glow">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4 animate-icon-bounce-delayed" />
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Response time: Extreme</h3>
                  <p className="text-muted-foreground">Fast and reliable service delivery</p>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-border/50 shadow-lg animate-card-scale-in stagger-3 hover-float hover-glow">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-icon-bounce" />
                  <h3 className="text-xl font-bold text-card-foreground mb-2">100% Original services</h3>
                  <p className="text-muted-foreground">Quality guaranteed every time</p>
                </div>
              </div>

             
            </div>

          
          </div>
        </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {locations.map((area, index) => (
                <div
                  key={area.name}
                  className={`group relative bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-card-fade-up stagger-${Math.min(index + 1, 8)} hover-float hover-glow`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div
                    className="relative cursor-pointer" // Add cursor-pointer here for the div
                    onClick={() => handleLocationClick(area, false)} // pass false for div click
                  >
                    <div className="flex items-center justify-between mb-4">
                      <MapPin className="w-8 h-8 text-primary animate-icon-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full animate-badge-bounce" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                        Available 24/7
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-card-foreground mb-3 animate-text-slide-left" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                      {area.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed animate-subtitle-fade-in" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                      {area.description}
                    </p>

                    <div className="flex items-center justify-between animate-cta-zoom-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors duration-300 hover-float"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent div click
                          handleLocationClick(area, true);
                        }}
                      >
                        View locations
                      </Button>
                      <div className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.6}s` }}>
                      
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose {projectName}?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're committed to providing exceptional {projectCategory} services with professional expertise and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyChooseUsAboutPage.map((feature, index) => {

                return (
                  <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <DynamicFAIcon iconClass={feature.iconClass || ''} className="w-18 h-18 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <FAQSection />
        <BookingSection />
        <Footer />
      </div>

    </HelmetProvider>
  );
};

export default Areas;
