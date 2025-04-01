import React from 'react';

const SEOSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding YouTube TV Pricing</h2>
      
      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">How YouTube TV Pricing Works</h3>
        <p>
          YouTube TV operates on a subscription model with a base plan and optional add-ons. The base plan includes 
          over 100 channels covering live sports, news, entertainment, and more. Unlike traditional cable providers, 
          YouTube TV offers a straightforward pricing structure without hidden fees or equipment rental costs.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Base Plan and Regional Variations</h3>
        <p>
          The YouTube TV base plan starts at $72.99 per month and includes local channels (based on your location), 
          major networks, and popular cable channels. While the base price is consistent nationwide, your actual cost 
          may vary due to local taxes and the inclusion of regional sports networks in certain areas.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Add-On Packages and Premium Channels</h3>
        <p>
          To customize your viewing experience, YouTube TV offers various add-on packages:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li className="mb-2"><strong>4K Plus ($9.99/month):</strong> Enables 4K streaming for select content and allows unlimited streams on your home network.</li>
          <li className="mb-2"><strong>Sports Plus ($10.99/month):</strong> Adds NFL RedZone, Fox College Sports, Stadium, and more sports-focused channels.</li>
          <li className="mb-2"><strong>Spanish Plus ($14.99/month):</strong> Includes Spanish-language networks like Cinelatino, CNN Español, and Discovery en Español.</li>
          <li><strong>Entertainment Plus ($29.99/month):</strong> Bundles HBO Max, Showtime, and Starz at a discounted rate compared to adding each separately.</li>
        </ul>
        <p>
          Additionally, you can subscribe to individual premium channels like HBO Max, Showtime, Starz, and others for an extra monthly fee.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Tax Considerations</h3>
        <p>
          The final cost of your YouTube TV subscription will include applicable state and local taxes. 
          These vary significantly by location, with some states charging as little as 5% and others closer to 10%. 
          Our calculator takes these variations into account to provide you with the most accurate estimate.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">How Our YouTube TV Cost Calculator Works</h3>
        <p>
          Our calculator helps you determine exactly what you'll pay for YouTube TV with your preferred options:
        </p>
        <ol className="list-decimal pl-5 mb-6">
          <li className="mb-2">Select your billing cycle (monthly or yearly)</li>
          <li className="mb-2">Choose your state to apply the correct tax rate</li>
          <li className="mb-2">Add or remove add-on packages according to your preferences</li>
          <li>View a detailed breakdown of costs, including the base plan, add-ons, and taxes</li>
        </ol>
        <p>
          This transparent approach gives you a clear picture of your total YouTube TV cost before you sign up, 
          helping you make an informed decision about your streaming subscription.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">When to Use Our Calculator</h3>
        <p>
          Our YouTube TV cost calculator is especially useful when:
        </p>
        <ul className="list-disc pl-5">
          <li className="mb-2">You're considering switching from cable to YouTube TV</li>
          <li className="mb-2">You want to compare YouTube TV with other streaming services</li>
          <li className="mb-2">You're planning your entertainment budget</li>
          <li className="mb-2">You're curious about the impact of adding premium channels or packages</li>
          <li>You've moved to a new state and want to understand how taxes will affect your subscription cost</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOSection;