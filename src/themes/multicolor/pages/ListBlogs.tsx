import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBreadcrumb from "../components/PageBreadcrumb";
import SEOHead from "../components/SEOHead";
import { httpFile } from "../../../config.js";

type BlogItem = { slug: string; url?: string };

const Blogs = () => {
  const breadcrumbItems = [{ label: "Blogs" }];
  const projectId = import.meta.env.VITE_PROJECT_ID as string | undefined;

  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ fixed double-slash
        const { data } = await httpFile.post("/webapp/v1/get_blog_slugs", {
          projectId,
          status: 1,
        });

        const raw = Array.isArray(data?.data) ? data.data : [];
        const normalized: BlogItem[] = raw
          .map((item: any) => {
            if (typeof item === "string") return { slug: item, url: `/blog/${item}` };
            const slug = String(item?.slug ?? "").trim();
            const url = String(item?.url ?? `/blog/${slug}`).trim();
            return slug ? { slug, url } : null;
          })
          .filter(Boolean) as BlogItem[];

        setBlogs(normalized);
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchBlogs();
    } else {
      setLoading(false);
      setError("Project ID is missing. Set VITE_PROJECT_ID.");
    }
  }, [projectId]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Blogs | Project Articles</title>
          <meta name="description" content="Browse the latest blog posts." />
          <meta name="keywords" content="blogs, articles, news" />
        </Helmet>

        <SEOHead
          title="Blogs | Project Articles"
          description="Browse the latest blog posts."
          canonical={`${window.location.origin}/blogs`}
        />
        <Header />
        <PageBreadcrumb items={breadcrumbItems} />

        <section id="blogs" className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Blogs & Articles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the latest blog posts from our platform.
              </p>
            </div>

            {loading && <p className="text-muted-foreground">Loading blogs…</p>}

            {error && !loading && (
              <p className="text-red-600 font-medium">{error}</p>
            )}

            {!loading && !error && blogs.length === 0 && (
              <p className="text-muted-foreground">No blogs found.</p>
            )}

            {!loading && !error && blogs.length > 0 && (
              <ol className="list-decimal list-inside space-y-2">
                {blogs.map((blog, index) => (
                  <li key={blog.slug}>
                    <Link
                      to={blog.url || `/blog/${blog.slug}`}
                      className="text-primary underline"
                    >
                      {blog.slug.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Blogs;
