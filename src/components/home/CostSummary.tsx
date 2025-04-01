import React from 'react';
import { AddOnPackage } from '../../types/calculator';

interface CostSummaryProps {
  basePlanPrice: number;
  selectedAddOns: string[];
  addOnPackages: AddOnPackage[];
  taxRate: number;
}

const CostSummary: React.FC<CostSummaryProps> = ({
  basePlanPrice,
  selectedAddOns,
  addOnPackages,
  taxRate
}) => {
  const calculateSubtotal = () => {
    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOnPackages.find(pkg => pkg.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    return basePlanPrice + addOnsTotal;
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Find selected add-ons
  const selectedAddOnPackages = addOnPackages.filter(pkg => 
    selectedAddOns.includes(pkg.id)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Your Subscription</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Cost Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>YouTube TV Base Plan</span>
            <span>${basePlanPrice.toFixed(2)}</span>
          </div>
          
          {selectedAddOnPackages.length > 0 && (
            <div className="pt-2 pb-1">
              <h4 className="text-sm font-medium text-gray-500">ADD-ONS</h4>
            </div>
          )}
          
          {selectedAddOnPackages.map((addOn) => (
            <div key={addOn.id} className="flex justify-between text-sm">
              <span>{addOn.name}</span>
              <span>${addOn.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between pt-3 border-t">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax ({(taxRate * 100).toFixed(2)}%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t font-semibold text-lg">
            <span>Total</span>
            <span className="text-blue-600">${total.toFixed(2)}</span>
          </div>
          <div className="text-gray-500 text-sm text-right">
            per month
          </div>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium mb-2">Your Selected Add-ons:</h4>
            <div className="bg-gray-50 rounded p-3 text-sm">
              <ul className="list-disc pl-5 space-y-1">
                {selectedAddOnPackages.map(addOn => (
                  <li key={addOn.id}>{addOn.name} (${addOn.price.toFixed(2)}/mo)</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostSummary;