import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { Youtube, Search } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogPreview from './components/BlogPreview';
import ScrollToTop from './components/ScrollToTop';
import Sitemap from './components/Sitemap';
import SearchBar from './components/SearchBar';
import siteConfig from './config/site';
import CTABlock from './components/CTABlock';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Home page components
import HomeHeroSection from './components/home/HomeHeroSection';
import HomeDescription from './components/home/HomeDescription';
import BillingToggle from './components/home/BillingToggle';
import BasePlanSection from './components/home/BasePlanSection';
import AddOnPackagesSection from './components/home/AddOnPackagesSection';
import CostSummary from './components/home/CostSummary';
import SEOSection from './components/home/SEOSection';

// Data
import { youtubeTVAddOns } from './data/youtubeTVAddOns';

function App() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedState, setSelectedState] = useState('California (7.25%)');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const BASE_PLAN_PRICE = 72.99;
  const TAX_RATE = 0.0725;

  return (
    <Router>
      <HelmetProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Helmet>
            <title>YouTube TV Cost Calculator - Calculate Your Exact Monthly Subscription Price</title>
            <meta name="description" content="Use our free YouTube TV cost calculator to determine exactly what you'll pay for YouTube TV, including add-ons, premium channels, and local taxes." />
            <meta property="og:title" content="YouTube TV Cost Calculator - Calculate Your Exact Monthly Subscription Price" />
            <meta property="og:description" content="Use our free YouTube TV cost calculator to determine exactly what you'll pay for YouTube TV, including add-ons, premium channels, and local taxes." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteConfig.siteUrl} />
            <link rel="canonical" href={siteConfig.siteUrl} />
          </Helmet>

          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link to="/" className="flex items-center">
                    <Youtube className="h-8 w-8 text-red-600 mr-2" />
                    <span className="font-bold text-xl">YouTube TV Cost Calculator</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block mr-4">
                    <SearchBar compact={true} />
                  </div>
                  <Link 
                    to="/blog" 
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/about" 
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-grow">
            <Routes>
              <Route path="/blog" element={<BlogList />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={
                <div className="py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <HomeHeroSection />
                    
                    {/* Description */}
                    <HomeDescription />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                          {/* Billing Toggle */}
                          <BillingToggle
                            billingCycle={billingCycle}
                            setBillingCycle={setBillingCycle}
                            selectedState={selectedState}
                            setSelectedState={setSelectedState}
                          />

                          {/* Base Plan Section */}
                          <BasePlanSection basePlanPrice={BASE_PLAN_PRICE} />

                          {/* Add-on Packages Section */}
                          <AddOnPackagesSection
                            addOnPackages={youtubeTVAddOns}
                            selectedAddOns={selectedAddOns}
                            setSelectedAddOns={setSelectedAddOns}
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        {/* Cost Summary */}
                        <CostSummary
                          basePlanPrice={BASE_PLAN_PRICE}
                          selectedAddOns={selectedAddOns}
                          addOnPackages={youtubeTVAddOns}
                          taxRate={TAX_RATE}
                        />
                      </div>
                    </div>

                    {/* SEO Section */}
                    <SEOSection />

                    {/* Blog Preview */}
                    <div className="mt-16">
                      <BlogPreview />
                    </div>
                  </div>
                </div>
              } />
              {/* This should be the last route for catching blog posts */}
              <Route path="/:slug" element={<BlogPostWrapper />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
}

// Wrapper for blog posts to handle proper routing
function BlogPostWrapper() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;
  
  // Exclude specific paths that have their own routes
  if (path === '/blog' || path === '/sitemap' || path === '/sitemap.xml' || path === '/about' || path === '/contact') {
    return <Navigate to={path} replace />;
  }
  
  // If there's a page parameter, likely it's a request for a paginated blog route
  if (searchParams.has('page') && path === '/') {
    return <Navigate to={`/blog?${searchParams.toString()}`} replace />;
  }
  
  return <BlogPost />;
}

export default App;