import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { httpFile } from "../../../config.js";
import { MapPin, Clock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AreasSection = () => {
  const [locations, setLocations] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [UpcomingPage, setUpcomingPage] = useState("");
  const navigate = useNavigate(); // Added for button navigation

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "servicesAreas",
        });

        if (data.projectInfo && data.projectInfo.serviceType) {
          setProjectCategory(data.projectInfo.serviceType);
          setUpcomingPage(data.upcomingPage);
          setLocations(data.locations || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  const getNextPage = () => {
    if (UpcomingPage === "country") return "States";
    if (UpcomingPage === "state") return "Cities";
    if (UpcomingPage === "city") return "Local Areas";
    if (UpcomingPage === "local") return "whole areas";
    return "";
  };

  const handleLocationClick = (area) => {
    return `/${area.slug}`;
  };

  // Handler for "See Areas" button: Navigate with scroll state
  const handleSeeAreasClick = (area, e) => {
    e.preventDefault(); // Prevent any default link behavior if needed
    navigate(handleLocationClick(area), {
      state: {
        id: area.location_id,
        projectId,
        UpcomingPage,
        nextPage: getNextPage(),
        locationName: area.name,
        sortname: area.sortname,
        _id: area._id,
        scrollToAreas: true, // Flag to trigger scroll on target page
      },
    });
  };

  // Common state for outer Link (no scroll flag)
  const commonState = (area) => ({
    id: area.location_id,
    projectId,
    UpcomingPage,
    nextPage: getNextPage(),
    locationName: area.name,
    sortname: area.sortname,
    _id: area._id,
  });

  return (
    <section id="areas" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-foreground mb-8">Areas We Serve</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Professional {projectCategory} throughout Our availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {locations.map((area, index) => (
            <Link
              key={index}
              to={handleLocationClick(area)}
              state={commonState(area)} // Normal navigation from top
              className="group bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {area.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-card-foreground">
                    <Clock className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Response time: Extreme</span>
                  </div>
                  <div className="flex items-center justify-center text-card-foreground">
                    <Shield className="w-4 h-4 text-emerald-500 mr-2" />
                    <span className="text-sm">100% Original services</span>
                  </div>
                </div>
                {/* Button now uses navigate for scroll behavior */}
                <button
                  onClick={(e) => handleSeeAreasClick(area, e)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 w-full rounded-md inline-flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  See Areas
                </button>
              </CardContent>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;