import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';

interface CTABlockProps {
  variant?: 'sidebar' | 'footer';
  className?: string;
}

const CTABlock: React.FC<CTABlockProps> = ({ variant = 'footer', className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-start">
        <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
          <Calculator size={variant === 'sidebar' ? 24 : 28} />
        </div>
        <div>
          <h3 className={`font-bold text-gray-900 ${variant === 'sidebar' ? 'text-lg' : 'text-xl'} mb-2`}>
            Calculate Your YouTube TV Costs
          </h3>
          <p className={`text-gray-600 mb-4 ${variant === 'sidebar' ? 'text-sm' : 'text-base'}`}>
            Use our interactive calculator to find the exact cost of your YouTube TV subscription with all add-ons and taxes.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try the Calculator <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTABlock;