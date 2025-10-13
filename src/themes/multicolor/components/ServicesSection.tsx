import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpFile } from '../../../config.js';
import { getProjectId } from '../../../hooks/getProjectId';

const ServicesSection = ({ formattedLocationName = "" }) => {
  const [projectServices, setProjectServices] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const id = getProjectId();
    setProjectId(id);
  }, []);

  const getTruncatedDescription = (text) => {
    if (!text) return '';
    const idx = text.indexOf('.');
    return idx !== -1 ? text.substring(0, idx + 1) : text;
  };

  const handleServiceClick = (service) => {
    const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');
    return `/services/${serviceName}`;
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_services", { projectId });
        if (data) {
          setProjectServices(data.services || []);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    const fetchCategory = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "servicesSection"
        });
        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    if (projectId) {
      fetchServices();
      fetchCategory();
    }
  }, [projectId]);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <h2>Our {projectCategory} Services {formattedLocationName}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
            Comprehensive {projectCategory} solutions delivered by experienced professionals. We ensure quality results for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectServices.map((service, index) => (
            <Link
              key={index}
              to={handleServiceClick(service)}
              state={{
                serviceId: service._id,
                serviceName: service.service_name,
                serviceDescription: service.service_description,
                serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
                serviceImage1: service.images[1]?.url,
                serviceImage2: service.images[2]?.url
              }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"}
                  alt={service.service_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div> */}
               
               
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
               
        
                <div className="absolute top-4 left-4 w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-lg">
                  <i className={`${service.fas_fa_icon} text-primary text-xl`}></i>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.service_name} {formattedLocationName}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {getTruncatedDescription(service.service_description)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
