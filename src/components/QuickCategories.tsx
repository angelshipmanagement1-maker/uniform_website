import React from 'react';
import { MessageCircle } from 'lucide-react';

const QuickCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Housekeeping Uniforms',
      description: 'Smart, functional, and comfortable uniforms designed for all-day wear. Crafted from breathable fabrics with easy maintenance.',
      image1: '/housekeeping-staff-uniform.jpg',
      image2: '/HOUSEKEEPING2.jpg',
      features: ['Lightweight fabric', 'Stain-resistant', 'Customizable colors & logos']
    },
    {
      id: 2,
      title: 'Maintenance Workers Uniforms',
      description: 'Durable workwear built to handle tough jobs. Combines strength, safety, and comfort for professional maintenance teams.',
      image1: '/maintence_worker_uniform2.avif',
      image2: '/maintenceworkeruniform1.avif',
      features: ['Reinforced stitching', 'Multiple utility pockets', 'Customizable fits']
    },
    {
      id: 3,
      title: 'Safety Guide Uniforms',
      description: 'High-visibility and protective gear for safety-critical environments. Designed to meet safety standards while ensuring comfort.',
      image1: '/saftey_guide_uniuform1.jpg',
      image2: '/saftey_guide_uniuform2.jpg',
      features: ['Reflective strips', 'Breathable fabric', 'Weather-resistant options']
    },
    {
      id: 4,
      title: 'Security Guard Uniforms',
      description: 'Authoritative and comfortable uniforms made to project confidence and ensure mobility for security professionals.',
      image1: '/security_guard_uniform1.avif',
      image2: '/security_guard_uniform2.avif',
      features: ['Strong fabric', 'Crisp tailoring', 'Shoulder epaulettes & caps']
    },
    {
      id: 5,
      title: 'Customized Belts & Caps',
      description: 'Personalized accessories to complete your teams look. Customizable with company branding in various materials and styles.',
      image1: '/workers_belts.webp',
      image2: '/cap1.jpeg',
      features: ['Adjustable sizes', 'Embroidered or printed logos', 'Durable materials']
    },
    {
      id: 6,
      title: 'Kitchen Staff Uniforms & Aprons',
      description: 'Heat-resistant, easy-to-clean uniforms for chefs and kitchen staff. Designed to handle busy kitchens while maintaining professional look.',
      image1: '/chef_uniforms.jpg',
      image2: '/waiter_uniform.webp',
      features: ['Breathable fabric', 'Multiple pocket options', 'Apron customization']
    }
  ];

  const handleWhatsAppClick = (category: string) => {
    window.open(`https://wa.me/919999999999?text=Hello! I would like to inquire about ${category} from UNIfactory.`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Uniform Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional uniforms designed for every industry, crafted with quality materials and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image1}
                  alt={category.title}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={category.image2}
                  alt={`${category.title} detail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppClick(category.title)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;