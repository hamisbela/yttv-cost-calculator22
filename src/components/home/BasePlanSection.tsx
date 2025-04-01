import React from 'react';

interface BasePlanSectionProps {
  basePlanPrice: number;
}

const BasePlanSection: React.FC<BasePlanSectionProps> = ({ basePlanPrice }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Base Plan</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">YouTube TV Base Plan</h3>
          <span className="text-lg font-semibold">${basePlanPrice}/month</span>
        </div>
        <p className="text-gray-600">
          Watch major broadcast and cable networks, plus unlimited DVR space.
        </p>
      </div>
    </div>
  );
};

export default BasePlanSection;