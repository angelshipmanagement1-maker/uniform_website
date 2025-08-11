import React from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

const CategoriesPage: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Housekeeping Uniforms',
      description: 'Smart, functional, and comfortable uniforms designed for all-day wear in hospitality and corporate environments. Our housekeeping uniforms combine professional appearance with practical functionality.',
      image1: getImagePath('housekeeping-staff-uniform.jpg'),
      image2: getImagePath('HOUSEKEEPING2.jpg'),
      features: ['Lightweight, breathable fabric', 'Stain and wrinkle resistant', 'Multiple color options', 'Custom logo embroidery', 'Easy care and maintenance', 'Comfortable fit for long shifts'],
      industries: ['Hotels & Resorts', 'Corporate Offices', 'Hospitals', 'Educational Institutions']
    },
    {
      id: 2,
      title: 'Maintenance Workers Uniforms',
      description: 'Durable workwear engineered to withstand demanding conditions while maintaining professional appearance. Built for maintenance professionals who need reliable, long-lasting uniforms.',
      image1: getImagePath('maintence_worker_uniform2.avif'),
      image2: getImagePath('maintenceworkeruniform1.avif'),
      features: ['Heavy-duty fabric construction', 'Reinforced stitching at stress points', 'Multiple utility pockets', 'Tool loops and attachments', 'Oil and grease resistant', 'Available in safety colors'],
      industries: ['Manufacturing Plants', 'Facility Management', 'Construction Sites', 'Technical Services']
    },
    {
      id: 3,
      title: 'Safety Guide Uniforms',
      description: 'High-visibility protective wear designed for safety-critical environments. Our safety uniforms meet industry standards while ensuring maximum comfort and mobility for safety personnel.',
      image1: getImagePath('saftey_guide_uniuform1.jpg'),
      image2: getImagePath('saftey_guide_uniuform2.jpg'),
      features: ['High-visibility reflective strips', 'Compliance with safety standards', 'Weather-resistant materials', 'Breathable fabric technology', 'Adjustable fit options', 'Flame-retardant options available'],
      industries: ['Construction', 'Mining', 'Traffic Control', 'Industrial Safety']
    },
    {
      id: 4,
      title: 'Security Guard Uniforms',
      description: 'Authoritative and professional uniforms that project confidence and security. Designed for comfort during long shifts while maintaining a sharp, professional appearance that commands respect.',
      image1: getImagePath('security_guard_uniform1.avif'),
      image2: getImagePath('security_guard_uniform2.avif'),
      features: ['Smart, authoritative design', 'Durable fabric for daily wear', 'Professional tailoring', 'Badge and insignia placement', 'Multiple pocket configurations', 'Weather-appropriate options'],
      industries: ['Corporate Security', 'Residential Complexes', 'Shopping Malls', 'Event Security']
    },
    {
      id: 5,
      title: 'Customized Belts & Caps',
      description: 'Professional accessories that complete your teams uniform look. Custom-designed belts and caps with your company branding, available in various materials and styles to match your brand identity.',
      image1: getImagePath('workers_belts.webp'),
      image2: getImagePath('cap1.jpeg'),
      features: ['Custom logo embroidery/printing', 'Adjustable sizing options', 'Premium material choices', 'Color coordination with uniforms', 'Durable hardware', 'Professional finishing'],
      industries: ['All Industries', 'Corporate Branding', 'Promotional Items', 'Team Accessories']
    },
    {
      id: 6,
      title: 'Kitchen Staff Uniforms & Aprons',
      description: 'Heat-resistant, hygienic uniforms designed for culinary professionals. Our kitchen wear combines functionality with style, ensuring chefs and kitchen staff look professional while staying comfortable in demanding environments.',
      image1: getImagePath('chef_uniforms.jpg'),
      image2: getImagePath('waiter_uniform.webp'),
      features: ['Heat and stain resistant fabric', 'Easy-to-clean materials', 'Professional chef styling', 'Multiple apron styles', 'Breathable comfort design', 'Custom embroidery options'],
      industries: ['Restaurants', 'Hotels', 'Catering Services', 'Food Processing']
    }
  ];

  const handleWhatsAppClick = (category: string) => {
    window.open(`https://wa.me/919999999999?text=Hello! I would like to get detailed information and pricing for ${category} from UNIfactory.`, '_blank');
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Uniform Categories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional uniforms tailored for every industry. Quality materials, expert craftsmanship, 
            and attention to detail in every piece we create.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, index) => (
            <div key={category.id} className="mb-20 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img
                        src={category.image1}
                        alt={`${category.title} - Image 1`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <div className="pt-8">
                      <img
                        src={category.image2}
                        alt={`${category.title} - Image 2`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      Category {category.id}
                    </span>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Perfect for:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleWhatsAppClick(category.title)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Quote & Details</span>
                  </button>
                </div>
              </div>

              {/* Separator */}
              {index < categories.length - 1 && (
                <hr className="mt-20 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Order Your Uniforms?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for personalized quotes, fabric samples, and detailed consultation 
            on your uniform requirements.
          </p>
          <button
            onClick={() => handleWhatsAppClick('Uniform Categories')}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Discuss Your Requirements</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;