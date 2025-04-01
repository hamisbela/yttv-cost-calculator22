import React from 'react';
import { Youtube } from 'lucide-react';
import SearchBar from '../SearchBar';

const HomeHeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <Youtube className="h-8 w-8 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">YouTube TV Cost Calculator | Calculate Your Total Subscription Price</h1>
      </div>
      <div className="hidden md:block">
        <SearchBar compact={true} />
      </div>
    </div>
  );
};

export default HomeHeroSection;