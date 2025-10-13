
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-poppins">
      <SEOHead 
        title="Page Not Found - Emergency Plumbing Service"
        description="The page you're looking for doesn't exist. Return to our homepage for professional plumbing services."
        canonical="/404"
        noindex={true}
      />
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto px-16">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div className="space-y-4">
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Return to Home
            </a>
            <div className="text-sm text-gray-500">
              <p>Need help? Call us at <a href="tel:14676823822" className="text-blue-600 hover:underline">(467) 682-3822</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
