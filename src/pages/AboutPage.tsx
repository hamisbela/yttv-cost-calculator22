import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Info, Users, Target, ThumbsUp, Youtube } from 'lucide-react';
import siteConfig from '../config/site';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <Helmet>
        <title>About Us - {siteConfig.title}</title>
        <meta name="description" content="Learn about the YouTube TV Cost Calculator tool and our mission to help users understand their subscription costs." />
        <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
      </Helmet>

      <div className="flex items-center mb-8">
        <Info className="h-8 w-8 text-blue-600 mr-2" />
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 rounded-full p-6 inline-block">
            <Youtube className="h-16 w-16 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          The Most Accurate YouTube TV Cost Calculator
        </h2>

        <div className="prose max-w-none">
          <p className="text-lg">
            Welcome to the YouTube TV Cost Calculator, the most comprehensive and 
            accurate tool for calculating your YouTube TV subscription costs. Our mission 
            is to provide transparency and clarity in streaming service pricing, helping 
            you make informed decisions about your entertainment options.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
            <Target className="h-5 w-5 mr-2 text-blue-600" />
            Our Mission
          </h3>
          <p>
            In the ever-evolving landscape of streaming services, understanding the true cost 
            of your subscriptions can be challenging. Our mission is to simplify this process 
            by providing a user-friendly calculator that takes into account base subscription 
            costs, add-on packages, and location-specific taxes.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-600" />
            Who We Are
          </h3>
          <p>
            We are a team of streaming enthusiasts and tech experts who noticed a gap in 
            the market: while YouTube TV offers excellent transparency about its base pricing, 
            understanding the final cost after add-ons and taxes isn't always straightforward.
          </p>
          <p>
            Our team developed this calculator to help users across all 50 states accurately 
            predict their YouTube TV costs before signing up. We continuously update our tool 
            to reflect the latest pricing changes and add-on options.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
            <ThumbsUp className="h-5 w-5 mr-2 text-blue-600" />
            Why Use Our Calculator
          </h3>
          <ul>
            <li>Accurate tax calculations based on your state</li>
            <li>Up-to-date pricing for all YouTube TV packages and add-ons</li>
            <li>Simple interface that makes it easy to mix and match options</li>
            <li>Transparent breakdown of all costs</li>
            <li>No registration or personal information required</li>
          </ul>

          <p className="mt-8">
            We are not affiliated with YouTube TV or Google. Our calculator is an independent 
            tool designed to help consumers make informed choices about their streaming subscriptions.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Try Our Calculator
        </Link>
        <p className="mt-4 text-gray-600">
          Have questions or feedback? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;