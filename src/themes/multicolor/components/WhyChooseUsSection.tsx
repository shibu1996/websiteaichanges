import React, { useState, useEffect } from 'react';
import { httpFile } from "../../../config.js";
// If you use a dynamic FontAwesome icon loader (like <DynamicFAIcon />), import it:
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';

const WhyChooseUsSection = () => {
  const [projectName, setProjectName] = useState("");
  const [projectWhyChooseUs, setProjectWhyChooseUs] = useState([]);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "Whychooseus"
        });

        if (data.projectInfo) {
          setProjectName(data.projectInfo.projectName || "Our Team");
          setProjectWhyChooseUs(data.projectInfo.whyChooseUsSection || []);
        }
      } catch (error) {
        console.error("Error fetching WhyChooseUs data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  return (
    <section className="py-20 bg-secondary transition-colors duration-300">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose {projectName}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When you choose us, you're choosing quality, reliability, and exceptional service that's backed by years of experience and thousands of satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectWhyChooseUs.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {feature.iconClass ? (
                  <DynamicFAIcon iconClass={feature.iconClass} className="text-primary text-3xl" />
                ) : null}
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
