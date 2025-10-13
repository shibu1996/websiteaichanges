import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import SEOHead from '../components/SEOHead';
import { useSchemaMarkup } from '../hooks/useSchemaMarkup';
import { generateWebPageSchema } from '../utils/schemaGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { httpFile } from "../../../config.js";
import DOMPurify from "dompurify";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy Policy' }
  ];

  const pageSchema = generateWebPageSchema({
    name: 'Privacy Policy - US Plumbers',
    description: 'Privacy Policy for US Plumbers - Learn how we collect, use, and protect your personal information.',
    url: `${window.location.origin}/privacy-policy`
  });

  useSchemaMarkup(pageSchema, 'privacy-policy-page');

  // ---- Dynamic content logic start ----
  const [privacyContent, setPrivacyContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetchTnC_Au_Pp", { projectId });
        if (data.privacyPolicy) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.privacyPolicy, "text/html");
          const bodyContent = doc.body.innerHTML;
          const cleanHTML = DOMPurify.sanitize(bodyContent);
          setPrivacyContent(cleanHTML);
        } else {
          setPrivacyContent("<p>No privacy policy available.</p>");
        }
      } catch (err) {
        setError("Failed to load privacy policy.");
        setPrivacyContent("");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [projectId]);
  // ---- Dynamic content logic end ----

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy - US Plumbers | Data Protection & Privacy"
        description="Privacy Policy for US Plumbers. Learn how we collect, use, and protect your personal information. We are committed to protecting your privacy."
        canonical={`${window.location.origin}/privacy-policy`}
      />

      <Header />
      <PageBreadcrumb items={breadcrumbItems} />

      
    {/* Add your style tag here! */}
    <style>
    {`
      .dynamic-content h1 {
        font-size: 2rem !important;
        font-weight: 700 !important;
        color: #212529 !important;
        margin-bottom: 1.2em !important;
        line-height: 1.1 !important;
      }
      .dynamic-content h2 {
        font-size: 1.35rem !important;
        font-weight: 600 !important;
        color: #2a2d34 !important;
        margin-top: 2em !important;
        margin-bottom: 1em !important;
        line-height: 1.2 !important;
      }
      .dynamic-content p {
        font-size: 1rem !important;
        color: #4b5563 !important;
        margin-bottom: 1em !important;
        line-height: 1.7 !important;
      }
    `}
    </style>

      <div className="container mx-auto px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Privacy Policy Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading && <p>Loading privacy policy...</p>}
              {error && <p className="text-red-500">{error}</p>}
              
              {!loading && !error && (
               <div
                className="dynamic-content"
                dangerouslySetInnerHTML={{ __html: privacyContent }}
              />
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
