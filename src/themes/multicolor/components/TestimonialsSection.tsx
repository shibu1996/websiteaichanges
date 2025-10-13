import React, { useEffect, useState } from "react";
import { Star, StarHalf, Quote } from "lucide-react";
import { httpFile } from "../../../config.js";
import { Helmet } from "react-helmet-async";
import { generateReviewSchema } from "../../../hooks/schemaMarkup"; // use your existing utility

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_faq_reviews", {
          projectId,
        });
        if (data) {
          // Normalize to always have an array
          setTestimonials(data.testimonials || []);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
  }, [projectId]);

  const reviewSchema = generateReviewSchema(testimonials);

  return (
    <>
      <Helmet>
        {testimonials.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema)}
          </script>
        )}
      </Helmet>
      <section className="py-20 bg-secondary transition-colors duration-300">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our plumbing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const rawRating = Number(testimonial.rating) || 0;
              const fullStars = Math.floor(rawRating);
              const hasHalf = rawRating - fullStars >= 0.5;
              const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

              return (
                <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(fullStars)].map((_, i) => (
                      <Star key={`full-${index}-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    {hasHalf && (
                      <StarHalf key={`half-${index}`} className="w-5 h-5 text-yellow-400 fill-current" />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <Star key={`empty-${index}-${i}`} className="w-5 h-5 text-gray-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.review_text || testimonial.text}"
                  </p>
                  <div className="flex items-center mt-auto">
                  
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.customer_name || testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
