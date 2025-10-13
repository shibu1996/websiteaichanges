import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import { 
  generateWebPageSchema, 
  generateBreadcrumbSchema, 
  generateLocalBusinessSchema,
  generateContactPageSchema,
  generateAboutPageSchema
} from '@/utils/schemaGenerator';

import React, { useEffect, useState } from 'react';
import { httpFile } from "../../../config.js";

interface PageSchemaMarkupProps {
  pageType: 'home' | 'about' | 'services' | 'contact' | 'areas' | 'service-detail' | 'area-detail';
  pageTitle: string;
  pageDescription: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  areaName?: string;
  serviceName?: string;
}

const PageSchemaMarkup = ({ 
  pageType, 
  pageTitle, 
  pageDescription, 
  breadcrumbs = [],
  areaName,
  serviceName 
}: PageSchemaMarkupProps) => {

  // NEW: minimal dynamic fields (same style as your SchemaMarkup example)
  const [projectCategory, setProjectCategory] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [mainLocation, setMainLocation] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const projectId = import.meta.env.VITE_PROJECT_ID;
  console.log(areaName,"areaName from pageschema markup")

  useEffect(() => {
    const fetchBasicProjectInfo = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/basic_project_info", { projectId });
        if (data) {
          setProjectCategory(data.serviceType || "");
          setProjectName(data.projectName || "");
          setProjectDescription(data.descriptions?.[0] || ""); // brief description
          setPhoneNumber(data.aboutUs?.phone || "");
          setMainLocation(data.aboutUs?.mainLocation || "");
        }
      } catch (err) {
        console.error("Error fetching basic project info:", err);
      }
    };

    if (projectId) fetchBasicProjectInfo();
  }, [projectId]);

  // WebPage Schema (unchanged)
  const webPageSchema = generateWebPageSchema({
    name: pageTitle,
    description: pageDescription,
    url: window.location.href
  });

  // Breadcrumb Schema (unchanged)
  const breadcrumbItems = [
    { name: 'Home', url: window.location.origin, position: 1 },
    ...breadcrumbs.map((item, index) => ({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${window.location.origin}${item.url}`,
      position: index + 2
    }))
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // LocalBusiness Schema for location-based pages — now dynamic
  let localBusinessSchema = null;
  if (pageType === 'area-detail' && areaName) {
    // Build a concise dynamic description for the area page
    const areaDesc =
      projectCategory
        ? `Professional ${projectCategory} services in ${areaName}. ${projectDescription || ""}`.trim()
        : `Professional services in ${areaName}. ${projectDescription || ""}`.trim();

    // Use dynamic business name and phone. Keep address simple using mainLocation.
    localBusinessSchema = generateLocalBusinessSchema({
      name: projectCategory
        ? `${projectCategory} - ${areaName}`
        : `${projectName || 'Our Services'} - ${areaName}`,
      description: areaDesc,
      telephone: phoneNumber || undefined,
      address: {
        streetAddress: mainLocation || "",
        addressLocality: areaName,          // the area being viewed
        addressRegion: mainLocation || "",
        postalCode: "",
        addressCountry: mainLocation || ""
      },
      openingHours: ["Mo-Su 00:00-23:59"],
      priceRange: "$$",
      serviceArea: [areaName, "Surrounding Areas"]
    });
  }

  // Contact Page Schema (unchanged)
 // PageSchemaMarkup.tsx (only the changed parts)

  // Contact Page Schema (now dynamic)
  let contactPageSchema = null;
  if (pageType === 'contact') {
    contactPageSchema = generateContactPageSchema({
      name: `Contact ${projectName || 'Us'}`,
      description: projectDescription
        ? `Contact ${projectName || 'us'} for ${projectCategory || 'our'} services. ${projectDescription}`
        : `Contact ${projectName || 'us'} for ${projectCategory || 'our'} services.`,
      url: `${window.location.origin}/contact`
    });
  }

  // About Page Schema (now dynamic)
  let aboutPageSchema = null;
  if (pageType === 'about') {
    aboutPageSchema = generateAboutPageSchema({
      name: `About ${projectName || 'Our Company'}`,
      description: projectDescription || `Learn about our ${projectCategory || 'professional'} services and team.`,
      url: `${window.location.origin}/about`
    });
  }


  // Apply schemas (unchanged)
  useSchemaMarkup(webPageSchema, `webpage-${pageType}`);
  useSchemaMarkup(breadcrumbSchema, `breadcrumb-${pageType}`);

  if (localBusinessSchema) {
    useSchemaMarkup(
      localBusinessSchema, 
      `local-business-${(areaName || '').toLowerCase().replace(/\s+/g, '-')}`
    );
  }

  if (contactPageSchema) {
    useSchemaMarkup(contactPageSchema, 'contact-page');
  }

  if (aboutPageSchema) {
    useSchemaMarkup(aboutPageSchema, 'about-page');
  }

  return null;
};

export default PageSchemaMarkup;
