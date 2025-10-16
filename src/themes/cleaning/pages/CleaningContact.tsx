
import React, { useEffect, useState } from 'react';
import { httpFile } from "../../../config.js";
import { useNavigate, useLocation } from 'react-router-dom';
import CleaningHeader from '../components/CleaningHeader';
import CleaningCTA from '../components/CleaningCTA';
import CleaningFooter from '../components/CleaningFooter';
import CleaningLoader from '../components/CleaningLoader';
import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles, Send, User, Calendar, CheckCircle } from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { colorThemes, getThemeByName, defaultTheme } from '../colors.js';
const CleaningContact = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [mainLocation, setMainLocation] = useState("");
  const [email, setEmail] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [image, setImage] = useState("");
  const [CTA, setCTA] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);
  const [currentTheme, setCurrentTheme] = useState(getThemeByName(defaultTheme));
  const [isLoading, setIsLoading] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const savedSiteId = localStorage.getItem("currentSiteId");
  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('cleaningTheme');
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      setCurrentTheme(getThemeByName(savedTheme));
    }
  }, []);

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (event) => {
      const newTheme = event.detail.theme;
      setSelectedTheme(newTheme);
      setCurrentTheme(getThemeByName(newTheme));
    };

    window.addEventListener('themeChanged', handleThemeChange);
    return () => window.removeEventListener('themeChanged', handleThemeChange);
  }, []);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.aboutUs && data.aboutUs) {
          setCTA(data.projectInfo.cta);

          setEmail(data.aboutUs.email);
          setPhoneNumber(data.aboutUs.phone);
          setMainLocation(data.aboutUs.mainLocation);
          setProjectCategory(data.projectInfo.serviceType);
          setImage(data.projectInfo.images[3].url);
          setHeroImage(data.projectInfo.images[1].url);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);


  const getCTAContent = (index) => {
    if (CTA.length === 0) {
      return { title: "What are you waiting for", description: "Contact us for our services" };
    }
    return CTA[index] || CTA[0];
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isLoading) return <CleaningLoader />;

  return (
    <div className="min-h-screen font-poppins">
      <CleaningHeader />
      {/* Contact Hero */}
      <section 
        className="relative py-20 text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.elements.surface}, ${currentTheme.elements.gradient.to})`
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.elements.surface}85, ${currentTheme.elements.gradient.to}85)`
          }}
        ></div>

        {/* animated dots */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: currentTheme.elements.accent,
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles 
                className="w-8 h-8 mr-3" 
                style={{ color: currentTheme.elements.accent }}
              />
              <h1 
                className="text-4xl md:text-5xl font-bold"
                style={{ color: currentTheme.elements.heading }}
              >
                Contact Us
              </h1>
            </div>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{ color: currentTheme.elements.description }}
            >
              Ready for professional {projectCategory}? Contact us today for a free quote and same-day booking.
            </p>
          </div>

      {/* Breadcrumb */}
          <div className="flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center" style={{ color: currentTheme.elements.description }}>
                    <Home className="w-4 h-4 mr-1" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium" style={{ color: currentTheme.elements.accent }}>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      </section>

      {/* Contact Information */}
      <section 
        className="py-16 font-poppins relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.elements.surface}05, ${currentTheme.elements.gradient.to}05)`
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 6 + 3 + 'px',
                height: Math.random() * 6 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: currentTheme.elements.accent,
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div 
                className="w-12 h-1 rounded-full mr-3"
                style={{ backgroundColor: currentTheme.elements.accent }}
              ></div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: currentTheme.elements.accent }}
              >
                Get In Touch
              </span>
              <div 
                className="w-12 h-1 rounded-full ml-3"
                style={{ backgroundColor: currentTheme.elements.accent }}
              ></div>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: currentTheme.elements.surface }}
            >
              Get In Touch
            </h2>
            
            <p 
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: currentTheme.elements.surface }}
            >
              Ready to get started? Contact us today for professional {projectCategory} services.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div 
              className="group relative"
              style={{ animationDelay: '0.1s' }}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border-2"
                style={{ borderColor: currentTheme.elements.ring }}
              >
                {/* Decorative Elements */}
                <div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-5"
                  style={{ backgroundColor: currentTheme.elements.accent }}
                ></div>
                <div 
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full opacity-10"
                  style={{ backgroundColor: currentTheme.elements.primaryButton.bg }}
                ></div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.elements.primaryButton.bg}, ${currentTheme.elements.accent})`,
                      boxShadow: `0 10px 30px ${currentTheme.elements.primaryButton.bg}40`
                    }}
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Call Us
                  </h3>
                  <p 
                    className="text-lg font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    {phoneNumber}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: currentTheme.elements.accent }}
                  >
                    Same-day booking available
                  </p>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-6 flex items-center justify-center">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: currentTheme.elements.accent }}
                  >
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div 
              className="group relative"
              style={{ animationDelay: '0.2s' }}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border-2"
                style={{ borderColor: currentTheme.elements.ring }}
              >
                {/* Decorative Elements */}
                <div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-5"
                  style={{ backgroundColor: currentTheme.elements.accent }}
                ></div>
                <div 
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full opacity-10"
                  style={{ backgroundColor: currentTheme.elements.primaryButton.bg }}
                ></div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300"
          style={{
                      background: `linear-gradient(135deg, ${currentTheme.elements.primaryButton.bg}, ${currentTheme.elements.accent})`,
                      boxShadow: `0 10px 30px ${currentTheme.elements.primaryButton.bg}40`
                    }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Email Us
                  </h3>
                  <p 
                    className="text-lg font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    {email}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: currentTheme.elements.accent }}
                  >
                    We respond within 2 hours
                  </p>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-6 flex items-center justify-center">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: currentTheme.elements.accent }}
                  >
                    <Mail className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Contact */}
            <div 
              className="group relative md:col-span-2 lg:col-span-1"
              style={{ animationDelay: '0.3s' }}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border-2"
                style={{ borderColor: currentTheme.elements.ring }}
              >
                {/* Decorative Elements */}
                <div 
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-5"
                  style={{ backgroundColor: currentTheme.elements.accent }}
                ></div>
                <div 
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full opacity-10"
                  style={{ backgroundColor: currentTheme.elements.primaryButton.bg }}
        ></div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.elements.primaryButton.bg}, ${currentTheme.elements.accent})`,
                      boxShadow: `0 10px 30px ${currentTheme.elements.primaryButton.bg}40`
                    }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
          </div>

                {/* Content */}
                <div className="text-center">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Our Main Office
                  </h3>
                  <p 
                    className="text-lg font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    {mainLocation}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: currentTheme.elements.accent }}
                  >
                    Free estimates in service area
                  </p>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-6 flex items-center justify-center">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: currentTheme.elements.accent }}
                  >
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-16 font-poppins relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.elements.surface}05, ${currentTheme.elements.gradient.to}05)`
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 6 + 3 + 'px',
                height: Math.random() * 6 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: currentTheme.elements.accent,
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div 
                className="w-12 h-1 rounded-full mr-3"
                style={{ backgroundColor: currentTheme.elements.accent }}
              ></div>
              <span 
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: currentTheme.elements.accent }}
              >
                Contact Form
              </span>
              <div 
                className="w-12 h-1 rounded-full ml-3"
                style={{ backgroundColor: currentTheme.elements.accent }}
              ></div>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: currentTheme.elements.surface }}
            >
              Get Your Free Quote
            </h2>
            
            <p 
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: currentTheme.elements.surface }}
            >
              Fill out the form below and we'll get back to you within 2 hours with a personalized quote for your {projectCategory} needs.
            </p>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2"
            style={{ borderColor: currentTheme.elements.ring }}
          >
            {/* Decorative Elements */}
            <div 
              className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-5"
              style={{ backgroundColor: currentTheme.elements.accent }}
            ></div>
            <div 
              className="absolute bottom-6 left-6 w-16 h-16 rounded-full opacity-10"
              style={{ backgroundColor: currentTheme.elements.primaryButton.bg }}
            ></div>

            {submitStatus === 'success' && (
              <div 
                className="mb-8 p-6 rounded-xl flex items-center"
                style={{ backgroundColor: `${currentTheme.elements.accent}20` }}
              >
                <CheckCircle 
                  className="w-6 h-6 mr-3"
                  style={{ color: currentTheme.elements.accent }}
                />
            <div>
                  <h3 
                    className="font-bold text-lg"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Thank you for your inquiry!
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    We'll get back to you within 2 hours with your personalized quote.
                  </p>
                </div>
                  </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: currentTheme.elements.accent }}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        borderColor: currentTheme.elements.ring
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: currentTheme.elements.accent }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        borderColor: currentTheme.elements.ring
                      }}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                  </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: currentTheme.elements.accent }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        borderColor: currentTheme.elements.ring
                      }}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: currentTheme.elements.surface }}
                  >
                    Service Needed *
                  </label>
                  <div className="relative">
                    <Sparkles 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: currentTheme.elements.accent }}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 appearance-none"
                      style={{ 
                        borderColor: currentTheme.elements.ring
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="residential-cleaning">Residential Cleaning</option>
                      <option value="commercial-cleaning">Commercial Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="move-in-out">Move In/Out Cleaning</option>
                      <option value="post-construction">Post Construction Cleaning</option>
                      <option value="regular-maintenance">Regular Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                  </div>

              {/* Preferred Date */}
                  <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: currentTheme.elements.surface }}
                >
                  Preferred Service Date
                </label>
                <div className="relative">
                  <Calendar 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: currentTheme.elements.accent }}
                  />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      borderColor: currentTheme.elements.ring
                    }}
                  />
                  </div>
                </div>

              {/* Message */}
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: currentTheme.elements.surface }}
                >
                  Additional Details
                </label>
                <div className="relative">
                  <MessageSquare 
                    className="absolute left-3 top-3 w-5 h-5"
                    style={{ color: currentTheme.elements.accent }}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={{ 
                      borderColor: currentTheme.elements.ring
                    }}
                    placeholder="Tell us more about your cleaning needs, special requirements, or any questions you have..."
                  />
              </div>
            </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: currentTheme.elements.primaryButton.bg,
                    color: currentTheme.elements.primaryButton.text,
                    boxShadow: `0 10px 30px ${currentTheme.elements.primaryButton.bg}40`
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:animate-pulse" />
                      <span>Get Free Quote</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 font-poppins relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.elements.surface}, ${currentTheme.elements.gradient.to})`
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 6 + 3 + 'px',
                height: Math.random() * 6 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: currentTheme.elements.accent,
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: currentTheme.elements.heading }}
            >
            {getCTAContent(1).title}
          </h2>
            
            <p 
              className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ color: currentTheme.elements.description }}
            >
            {getCTAContent(1).description}
          </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`tel:${phoneNumber}`}
                className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105"
                style={{
                  backgroundColor: currentTheme.elements.primaryButton.bg,
                  color: currentTheme.elements.primaryButton.text,
                  boxShadow: `0 10px 30px ${currentTheme.elements.primaryButton.bg}40`
                }}
            >
              <Phone size={24} className="group-hover:animate-pulse" />
              <span>Call Now: {phoneNumber}</span>
            </a>
              
            <Link
              to="/contact"
                className="group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-xl transform hover:scale-105 border-2"
                style={{
                  backgroundColor: currentTheme.elements.secondaryButton.bg,
                  color: currentTheme.elements.secondaryButton.text,
                  borderColor: currentTheme.elements.secondaryButton.border
                }}
            >
              <Sparkles size={24} />
              <span>Book Services of {projectCategory}</span>
            </Link>
            </div>
          </div>
        </div>
      </section>
      <CleaningFooter />
    </div>
  );
};

export default CleaningContact;