import React from 'react';

const ClientLogos: React.FC = () => {
  // Using placeholder industry logos - replace with actual client logos when available
  const clients = [
    { name: 'Hotel Chain', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Hotel+Chain' },
    { name: 'Manufacturing Co', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Manufacturing' },
    { name: 'Corporate Office', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Corporate' },
    { name: 'Restaurant Group', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Restaurant' },
    { name: 'Security Services', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Security' },
    { name: 'Healthcare', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Healthcare' },
    { name: 'Facility Management', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Facility+Mgmt' },
    { name: 'Retail Chain', logo: 'https://placehold.co/150x80/E5E7EB/6B7280?text=Retail+Chain' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-gray-600">
            We proudly serve clients across various industries with premium uniform solutions
          </p>
        </div>

        {/* Animated Carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-36 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-36 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">Quality Assured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span className="text-sm font-medium">Trusted Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;