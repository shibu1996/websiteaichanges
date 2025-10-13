import React, { useEffect, useState } from "react";
import { httpFile } from "../../../config.js";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from "react-helmet-async"; // ✅ import Helmet
import { generateFAQSchema } from "../../../hooks/schemaMarkup"; // ✅ import generateFAQSchema

const CleaningFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectFaqs, setprojectFaqs] = useState([]);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_faq_reviews", {
          projectId,
        });

        if (data) {
          setprojectFaqs(data.faq || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  // ✅ Generate schema
  const faqSchema = generateFAQSchema(projectFaqs);

  return (
    <>
      <Helmet>
        {/* Embed FAQ schema */}
        {projectFaqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

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
    </>
  );
};

export default CleaningFAQ;
