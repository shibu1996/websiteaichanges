import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageSquare } from "lucide-react";
import { httpFile } from "../../../config.js";
import { Helmet } from "react-helmet-async";
import { generateFAQSchema } from "../../../hooks/schemaMarkup";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [faqs, setFaqs] = useState([]);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_faq_reviews", {
          projectId,
        });
        if (data) {
          setFaqs(data.faq || []);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchData();
  }, [projectId]);

  const faqSchema = generateFAQSchema(faqs);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <section className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here are the most common questions about our professional services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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
          </div>
        </div>


       
      </section>
    </>
  );
};

export default FAQSection;
