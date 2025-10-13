
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RoofingFAQ = () => {
  const faqs = [
    {
      question: "How much does roof replacement cost?",
      answer: "Roof replacement costs vary based on size, materials, and complexity. We provide detailed estimates including materials and labor. Factors include roof area, pitch, materials chosen, and local building requirements."
    },
    {
      question: "Do you offer emergency roofing services?",
      answer: "Yes! We provide 24/7 emergency roofing services for storm damage, leaks, and urgent repairs. Our rapid response team can quickly assess and secure your roof to prevent further damage."
    },
    {
      question: "What types of roofing materials do you install?",
      answer: "We install all major roofing materials including asphalt shingles, metal roofing, tile, slate, and flat roof systems. We'll help you choose the best option for your climate, budget, and preferences."
    },
    {
      question: "How long does roof installation take?",
      answer: "Most residential roof installations are completed in 1-3 days, depending on size and complexity. Weather conditions and material delivery may affect timing. We'll provide a detailed schedule during your estimate."
    },
    {
      question: "Do you provide warranty on your work?",
      answer: "Yes, we provide comprehensive warranties on both materials and workmanship. Material warranties vary by manufacturer, and we offer workmanship warranties to ensure your complete satisfaction."
    },
    {
      question: "Can you help with insurance claims?",
      answer: "Absolutely! We work directly with insurance companies and can help you navigate the claims process for storm damage, ensuring you receive fair coverage for necessary repairs or replacement."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our roofing services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our roofing experts are ready to help with any questions about your specific needs
            </p>
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-400 hover:to-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingFAQ;
