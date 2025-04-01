import React from 'react';

interface BillingToggleProps {
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  billingCycle,
  setBillingCycle,
  selectedState,
  setSelectedState
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            billingCycle === 'monthly' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            billingCycle === 'yearly' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">State:</span>
        <select
          className="form-select rounded-md border-gray-300"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>California (7.25%)</option>
          {/* Add more states as needed */}
        </select>
      </div>
    </div>
  );
};

export default BillingToggle;