import React, { useEffect, useState } from 'react';
import { httpFile } from "../../../config.js";
import { useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import BookingSection from '../components/BookingSection';
import FAQSection from '../components/FAQSection';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import SEOHead from '../components/SEOHead';
import { useSEO } from '../../../hooks/useSEO';
import { generateFAQSchema, generateReviewSchema, generateServicesSchema } from "../../../hooks/schemaMarkup"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
  const breadcrumbItems = [
    { label: "Contact" }
  ];

  const { seoData } = useSEO('/contact');

  console.log(seoData)

  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [mainLocation, setMainLocation] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [image, setImage] = useState("");
  const [CTA, setCTA] = useState([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectFaqs, setprojectFaqs] = useState([]);

  const projectId = import.meta.env.VITE_PROJECT_ID;
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes




  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "contact"

        });

        if (data.aboutUs && data.aboutUs) {
          setCTA(data.projectInfo.cta);
          setprojectFaqs(data.faq || []);


          setEmail(data.aboutUs.email);
          setPhoneNumber(data.aboutUs.phone);
          setMainLocation(data.aboutUs.mainLocation);
          setProjectCategory(data.projectInfo.serviceType);
          setImage(data.projectInfo.images[3].url);
          setHeroImage(data.projectInfo.images[1].url);


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


  const faqSchema = generateFAQSchema(projectFaqs);

  return (

    <HelmetProvider>
      <div className="min-h-screen font-poppins">
        <Helmet>
          <title>{`${seoData?.meta_title} `}</title>

          <meta name="description" content={seoData.meta_description} />
          <meta name="keywords" content={seoData.meta_keywords} />

          {/* Embed FAQ schema */}
          {faqSchema && (
            <script type="application/ld+json">
              {JSON.stringify(faqSchema, null, 2)}
            </script>
          )}
          {/* Embed Reviews schema */}


        </Helmet>

        <PageSchemaMarkup
          pageType="contact"
          pageTitle={seoData.meta_title}
          pageDescription={seoData.meta_description}
          breadcrumbs={[{ name: "Contact", url: "/contact" }]}
        />
        <Header />
        <PageBreadcrumb items={breadcrumbItems} />
        {/* contact hero */}

        <section className="relative bg-gradient-to-br from-primary via-blue-600 to-primary py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-primary/20 to-blue-600/20 animate-gradient-shift bg-[length:200%_200%]"></div>

          <div className="container mx-auto px-16 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Contact <span className="text-yellow-300">Us</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Ready for professional {projectCategory}? Contact us today for a free quote and same-day booking.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
                <a href={`tel:${phoneNumber}`} className="flex items-center">
                  <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-10 py-6 text-xl font-bold shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300">
                    <Phone className="w-6 h-6 mr-3" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90">CALL NOW</span>
                      <span className="text-xl font-black">{phoneNumber}</span>
                    </div>
                  </Button>
                </a>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Phone className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-white/80">{phoneNumber}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Mail className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/80">{email}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Service Area</h3>
                  <p className="text-white/80">Nationwide Coverage</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <p className="text-white/80">24/7 Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* <ContactForm /> */}
        {/* <ContactInfo /> */}
        {CTA && (
          <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
            <div className="container mx-auto px-16 text-center">
              <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
                {getCTAContent(0).title}
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
                {getCTAContent(0).description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Theme-Responsive Call Now Button */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                  <div className="absolute -inset-2 glass-card rounded-2xl animate-pulse-glow"></div>

                  <a href={`tel:${phoneNumber}`} className="relative overflow-hidden"> {/* Wrap with anchor tag */}
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
                  </a>
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
                        <span className="text-xl font-black tracking-wide">
                          <a href={`mailto:${email}`} className="text-primary hover:text-blue-500">{email}</a> {/* Add link to email */}
                        </span>
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

        <section className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Got questions? We've got answers. Here are the most common questions about our contact.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {projectFaqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-8 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Section */}



            </div>
          </div>
        </section>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Contact;
