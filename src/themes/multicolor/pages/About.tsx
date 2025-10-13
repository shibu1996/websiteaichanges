
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import WhyDifferent from '../components/about/WhyDifferent';
import WhyChooseUsSimple from '../components/WhyChooseUsSimple';
import BookingSection from '../components/BookingSection';
import FAQSection from '../components/FAQSection';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import SEOHead from '../components/SEOHead';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import { Phone, Clock, Calendar, Star, Shield, Award, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { httpFile } from "../../../config.js";

import { Target, Eye, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Home } from 'lucide-react';

const About = () => {
  const breadcrumbItems = [
    { label: "About" }
  ];

  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("");

  const [aboutHeroText, setAboutHeroText] = useState('');
  const [projectCategory, setProjectCategory] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [missionLine, setMissionLine] = useState("");
  const [visionLine, setVisionLine] = useState("");
  const [missionSubHeadings, setMissionSubHeadings] = useState([]);
  const [visionSubHeadings, setVisionSubHeadings] = useState([]);
  const [coreValuesIntro, setCoreValuesIntro] = useState("");
  const [commitment, setCommitment] = useState("");
  const [coreValues, setCoreValues] = useState([]);
  const [coloredCoreValues, setColoredCoreValues] = useState([]);
  const [whatMakesUsDifferent, setWhatMakesUsDifferent] = useState([]);
  const [whyChooseUsAboutPage, setWhyChooseUsAboutPage] = useState([]);

  const [email, setEmail] = useState("");

  const [CTA, setCTA] = useState([]);

  const coreValueGradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-red-500 to-red-600',
    'from-pink-500 to-pink-600'
  ];


  const whatMakesUsDifferentColors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFC300', '#9D4EDD', '#00C2CB'];


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

        if (data?.projectInfo) {
          // Strings
          setAboutHeroText(data.projectInfo.aboutHeroText || "");
          setProjectName(data.projectInfo.projectName || "");
          setCoreValuesIntro(data.projectInfo.coreValuesIntro || "");
          setProjectCategory(data.projectInfo.serviceType || "");
          setCommitment(data.projectInfo.commitment || "");
          setMissionLine(data.projectInfo.missionLine || "");
          setVisionLine(data.projectInfo.visionLine || "");
          setBackgroundImage(data.projectInfo.images?.[3]?.url || "");

          // Contact (strings)
          setPhoneNumber(data?.aboutUs?.phone || "");
          setEmail(data?.aboutUs?.email || "");

          // Image (string)
          setHeroImage(data?.projectInfo?.images?.[0]?.url || "");

          // Arrays
          const coreValues = Array.isArray(data.projectInfo.coreValues)
            ? data.projectInfo.coreValues
            : [];
          setCoreValues(coreValues);

          const whatMakesUsDifferent = Array.isArray(data.projectInfo.whatMakesUsDifferent)
            ? data.projectInfo.whatMakesUsDifferent
            : [];
          setWhatMakesUsDifferent(
            whatMakesUsDifferent.map((item, index) => ({
              ...item,
              color: whatMakesUsDifferentColors[index % whatMakesUsDifferentColors.length],
            }))
          );

          setColoredCoreValues(
            coreValues.map((value, index) => ({
              ...value,
              gradient: coreValueGradients[index % coreValueGradients.length],
            }))
          );

          setWhyChooseUsAboutPage(
            Array.isArray(data.projectInfo.whyChooseUsAboutPage)
              ? data.projectInfo.whyChooseUsAboutPage
              : []
          );

          setMissionSubHeadings(
            Array.isArray(data.projectInfo.missionSubHeadings)
              ? data.projectInfo.missionSubHeadings
              : []
          );
          setVisionSubHeadings(
            Array.isArray(data.projectInfo.visionSubHeadings)
              ? data.projectInfo.visionSubHeadings
              : []
          );

          // CTA (choose one fallback based on your UI expects)
          // If CTA is a string in your UI:
          setCTA(data.projectInfo.cta || "");
          // If CTA is an object in your UI, use this instead:
          // setCTA(data.projectInfo.cta || {});
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  console.log(missionLine, "missionLinemissionLinemissionLinemissionLinemissionLinemissionLinemissionLinemissionLine")


  const getCTAContent = (index) => {
    if (CTA.length === 0) {
      return { title: "What are you waiting for", description: "Contact us for our services" };
    }
    return CTA[index] || CTA[0];
  };

  let title = `About ${projectCategory} Service - ${projectName}`

  return (
    <div className="min-h-screen font-poppins">
      <SEOHead
        title={title}
        description={aboutHeroText}
        canonical="/about"
      />
      <PageSchemaMarkup
        pageType="about"
        pageTitle={title}
        pageDescription={aboutHeroText}
        breadcrumbs={[{ name: "About", url: "/about" }]}
      />
      <Header />
      <PageBreadcrumb items={breadcrumbItems} />
      <section
        className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center py-8 px-16 transition-all duration-300 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80 animate-gradient-shift bg-[length:200%_200%]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent-foreground/20 rounded-full animate-float-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary-foreground/15 animate-morphing-shape"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent-foreground/10 rounded-full animate-float-bounce" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-16 py-8 z-10 max-w-6xl relative">
          <div className="text-center space-y-6 animate-hero-fade-in">

            {/* Enhanced Trust Badge */}
            <div className="inline-flex items-center glass-card rounded-full px-6 py-3 text-primary-foreground font-semibold text-base sm:text-lg animate-badge-bounce shadow-2xl">
              <Star className="w-5 h-5 mr-2 fill-current animate-pulse" />
              <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
              Your Trusted {projectCategory} Partners
              <Sparkles className="w-4 h-4 ml-1 animate-pulse" />
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-3 animate-heading-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
                About
                <span className="block md:inline text-plumbing-responsive bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text animate-gradient-shift"> {projectName}</span>
              </h1>
            </div>

            {/* Enhanced Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-4xl mx-auto leading-relaxed animate-subtitle-fade-in" style={{ animationDelay: '0.4s' }}>
              {aboutHeroText}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-cta-zoom-in" style={{ animationDelay: '0.6s' }}>
              {/* Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-1 glass-card rounded-2xl animate-pulse-glow"></div>

                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-2xl rounded-2xl border-2 border-orange-400/50 transform hover:scale-105 transition-all duration-300 group animate-gradient-shift bg-[length:200%_200%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div className="relative flex items-center">
                    <div className="relative mr-3">
                      <Phone className="w-6 h-6 animate-float-bounce" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90">CALL NOW</span>
                      <span className="text-xl font-black tracking-wide">{phoneNumber}</span>
                    </div>
                  </div>

                  <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                  </div>
                </Button>
              </div>

              {/* Learn More Button */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-primary to-blue-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                >
                  <div className="relative flex items-center">
                    <div className="relative mr-3">
                      <Users className="w-6 h-6 animate-float-bounce" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90">LEARN</span>
                      <span className="text-xl font-black tracking-wide">Our Story</span>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving our commitment to excellence in professional {projectCategory} services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {missionLine}
                </p>
                <ul className="space-y-3">
                  {missionSubHeadings.map((heading, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>{heading}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {visionLine}
                </p>
                <ul className="space-y-3">
                  {visionSubHeadings.map((heading, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>{heading}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {coreValuesIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coloredCoreValues.map((value, index) => (
              <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} mb-4 mx-auto`}>
                      <DynamicFAIcon iconClass={value.iconClass || ''} className="text-white w-18 h-18" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>


            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our unique advantages that set us apart from other {projectCategory} services
            </p>
          </div>

          {/* Commitment Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Excellence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {commitment}
                </p>

              </CardContent>
            </Card>
          </div>

          {/* Differences Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whatMakesUsDifferent.map((diff, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                      style={{ backgroundColor: diff.color }}
                    >
                      <DynamicFAIcon iconClass={diff.iconClass || ''} className="w-18 h-18 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>




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
      {CTA && (
        <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
          <div className="container mx-auto px-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              {getCTAContent(3).title}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
              {getCTAContent(3).description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Theme-Responsive Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-2 glass-card rounded-2xl animate-pulse-glow"></div>

                <Button
                  size="lg"
                  className="relative overflow-hidden btn-cta-primary text-white px-10 py-8 text-xl font-bold shadow-2xl rounded-2xl btn-cta-border btn-cta-glow group animate-gradient-shift bg-[length:200%_200%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div className="relative flex items-center">
                    <div className="relative mr-4">
                      <Phone className="w-7 h-7 animate-float-bounce" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">EMERGENCY CALL</span>
                      <span className="text-2xl font-black tracking-wide">{phoneNumber}</span>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Secondary Button */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-10 py-8 text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                >
                  <div className="relative flex items-center">
                    <Calendar className="w-7 h-7 mr-4" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">BOOK ONLINE</span>
                      <span className="text-xl font-black tracking-wide">{email}</span>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Same Day Service</span>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default About;
