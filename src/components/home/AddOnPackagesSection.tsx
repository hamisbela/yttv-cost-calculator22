import React, { useState } from 'react';
import { CategoryAddOnPackage, getAddOnCategories } from '../../data/youtubeTVAddOns';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AddOnCategoryProps {
  title: string;
  addOns: CategoryAddOnPackage[];
  selectedAddOns: string[];
  onToggleAddOn: (id: string) => void;
}

const AddOnCategory: React.FC<AddOnCategoryProps> = ({ title, addOns, selectedAddOns, onToggleAddOn }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-medium text-gray-800">{title} ({addOns.length})</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {addOns.map((addon) => (
            <div 
              key={addon.id}
              className="border rounded-lg p-3 hover:border-blue-500 cursor-pointer"
              onClick={() => onToggleAddOn(addon.id)}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => {}}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <h3 className="ml-2 font-medium">{addon.name}</h3>
                </div>
                <span className="font-semibold">${addon.price}/mo</span>
              </div>
              <p className="text-gray-600 text-sm ml-6">{addon.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface AddOnPackagesSectionProps {
  addOnPackages: CategoryAddOnPackage[];
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
}

const CATEGORY_NAMES: Record<string, string> = {
  'premium': 'Premium Services',
  'sports': 'Sports',
  'international': 'International',
  'entertainment': 'Entertainment',
  'movies': 'Movies & TV',
  'documentary': 'Documentaries & Education',
  'lifestyle': 'Lifestyle',
  'music': 'Music',
  'family': 'Family & Kids'
};

const AddOnPackagesSection: React.FC<AddOnPackagesSectionProps> = ({
  addOnPackages,
  selectedAddOns,
  setSelectedAddOns
}) => {
  const categories = getAddOnCategories();
  
  const handleToggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) 
        ? prev.filter(addOnId => addOnId !== id)
        : [...prev, id]
    );
  };
  
  // Find featured or popular add-ons
  const featuredAddOns = addOnPackages.filter(addon => 
    addon.id === '4k-plus' || 
    addon.id === 'entertainment-plus' || 
    addon.id === 'sports-plus' ||
    addon.id === 'spanish-plus'
  );
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add-on Packages</h2>
      
      {/* Featured Add-ons */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Popular Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredAddOns.map((pkg) => (
            <div 
              key={pkg.id}
              className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer"
              onClick={() => handleToggleAddOn(pkg.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(pkg.id)}
                    onChange={() => {}}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <h3 className="ml-2 text-lg font-medium">{pkg.name}</h3>
                </div>
                <span className="text-lg font-semibold">${pkg.price}/mo</span>
              </div>
              <p className="text-gray-600 ml-6">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* All Add-ons by Category */}
      <div>
        <h3 className="text-lg font-medium mb-3">All Available Add-ons</h3>
        <div className="space-y-2">
          {Object.entries(categories).map(([category, addOns]) => {
            if (addOns.length === 0) return null;
            
            return (
              <AddOnCategory
                key={category}
                title={CATEGORY_NAMES[category] || category}
                addOns={addOns}
                selectedAddOns={selectedAddOns}
                onToggleAddOn={handleToggleAddOn}
              />
            );
          })}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-600 text-sm">
          <strong>Note:</strong> YouTube TV frequently updates their add-on offerings and pricing. 
          We make every effort to keep this list current, but prices and availability may change.
        </p>
      </div>
    </div>
  );
};

export default AddOnPackagesSection;