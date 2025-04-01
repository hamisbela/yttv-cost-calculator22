import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Mail, Info, Home, FileText, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Youtube className="h-8 w-8 text-red-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">YouTube TV Calculator</span>
            </div>
            <p className="text-gray-600 mb-4">
              The most accurate YouTube TV cost calculator. Determine exactly what you'll pay for your YouTube TV subscription with add-ons and taxes.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} YouTube TV Calculator. All rights reserved.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-600 hover:text-blue-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;