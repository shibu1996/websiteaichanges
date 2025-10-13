
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PaintingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to paint a house?",
      answer: "The timeline depends on the size and complexity of the project. A typical interior room takes 1-2 days, while a full house exterior can take 3-5 days. We'll provide a detailed timeline during your estimate."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free, detailed estimates for all painting projects. We can often provide same-day estimates and will work with your schedule for convenience."
    },
    {
      question: "What type of paint do you use?",
      answer: "We use only premium quality paints from trusted brands like Sherwin-Williams and Benjamin Moore. We'll recommend the best paint type based on your specific project and budget."
    },
    {
      question: "Do you move furniture and protect my belongings?",
      answer: "Absolutely! We carefully move and protect all furniture and belongings. We use drop cloths, plastic sheeting, and tape to protect floors, fixtures, and personal items."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect your property and provide you with complete peace of mind."
    },
    {
      question: "Do you offer color consultation services?",
      answer: "Yes! Our experienced team can help you choose the perfect colors for your space. We consider lighting, room size, and your personal style to recommend colors that will look amazing."
    },
    {
      question: "What's included in your painting services?",
      answer: "Our services include surface preparation, priming, painting, cleanup, and final touch-ups. We also provide color consultation, material recommendations, and detailed project planning."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with a satisfaction guarantee and warranty coverage. We'll return to address any issues and ensure you're completely happy with the results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our painting services
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
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our friendly team is here to help with any questions about our painting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5551234567"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Call Us: (555) 123-4567
              </a>
              <a 
                href="/painting/contact"
                className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
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

export default PaintingFAQ;
