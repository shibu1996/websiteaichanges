
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PlumbingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of plumbing emergencies do you handle?",
      answer: "We handle all plumbing emergencies including burst pipes, severe leaks, clogged drains, water heater failures, toilet overflows, and any situation that could cause water damage to your property."
    },
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes! We provide 24/7 emergency plumbing service, 365 days a year. Our emergency response team is always ready to help when you need us most, including weekends and holidays."
    },
    {
      question: "How quickly can you respond to an emergency call?",
      answer: "Our average emergency response time is 30-60 minutes, depending on your location and current weather conditions. We prioritize emergency calls and dispatch the nearest available technician."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely! All our plumbers are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect your property and provide you with peace of mind."
    },
    {
      question: "Do you provide upfront pricing?",
      answer: "Yes, we provide transparent, upfront pricing before any work begins. There are no hidden fees or surprise charges. You'll know exactly what you're paying before we start the job."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. We also offer financing options for larger projects."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. We offer a 100% satisfaction guarantee and warranty coverage on both labor and parts, varying by service type."
    },
    {
      question: "Can you help with both residential and commercial plumbing?",
      answer: "Yes, we provide comprehensive plumbing services for both residential and commercial properties. Our team has experience with everything from single-family homes to large commercial buildings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our plumbing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our friendly team is here to help with any questions about our plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Call Us: (555) 123-4567
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingFAQ;
