import React from 'react';
import { Shirt, Palette, DollarSign, Truck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Shirt,
      title: 'Quality Materials',
      description: 'Long-lasting, premium fabrics and materials that withstand daily use while maintaining professional appearance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Branding, colors, and styles tailored to your company needs. Complete customization for perfect brand representation.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Negotiation-based pricing that considers order quantity and market trends. Best value for your investment.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Fast, reliable shipping nationwide. We ensure your orders reach you on time, anywhere in India.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose UNIfactory?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine quality, customization, and competitive pricing to deliver exceptional value for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                <reason.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-blue-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">500+</p>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">10+</p>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">50,000+</p>
              <p className="text-blue-100">Uniforms Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">100%</p>
              <p className="text-blue-100">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;