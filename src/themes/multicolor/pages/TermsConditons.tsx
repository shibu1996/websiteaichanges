import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import SEOHead from '../components/SEOHead';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import { generateWebPageSchema } from '@/utils/schemaGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { httpFile } from "../../../config.js";
import DOMPurify from 'dompurify';

const TermsConditions = () => {
  const breadcrumbItems = [
    { label: 'Terms & Conditions' }
  ];

  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  // SEO and schema
  const pageSchema = generateWebPageSchema({
    name: 'Terms & Conditions - US Plumbers',
    description: 'Terms and Conditions for US Plumbers services. Learn about our service terms, policies, and user agreements.',
    url: `${window.location.origin}/terms-conditions`
  });
  useSchemaMarkup(pageSchema, 'terms-conditions-page');

  // Fetch Terms from API
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetchTnC_Au_Pp", { projectId });
        if (data.termsAndConditions) {
          // Parse and sanitize HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.termsAndConditions, "text/html");
          const bodyContent = doc.body.innerHTML;
          const cleanHTML = DOMPurify.sanitize(bodyContent);
          setTermsContent(cleanHTML);
        } else {
          setTermsContent("<p>No terms and conditions available.</p>");
        }
      } catch (err) {
        setError("Failed to load terms and conditions.");
        setTermsContent("");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [projectId]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions - US Plumbers | Service Terms & Policies"
        description="Terms and Conditions for US Plumbers. Learn about our service terms, policies, liability, and user agreements for plumbing services."
        canonical={`${window.location.origin}/terms-conditions`}
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
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {/* Optional: last updated info, or remove this line */}
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              By using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
            </AlertDescription>
          </Alert>

          {/* Dynamic content card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Service Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading && <p>Loading terms and conditions...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {!loading && !error && (
                <div
                  className="dynamic-content"
                  dangerouslySetInnerHTML={{ __html: termsContent }}
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

export default TermsConditions;
