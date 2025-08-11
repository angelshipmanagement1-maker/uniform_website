import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Brush, Package } from 'lucide-react';

const BulkSupplies: React.FC = () => {
  const supplies = [
    {
      id: 1,
      title: 'Stationery Supplies',
      description: 'Bulk stationery for offices, hotels, and factories — pens, notepads, files, and more. Reliable quality to keep your workplace stocked and organized.',
      icon: FileText,
      image: '/chef_uniforms.jpg',
      items: ['Pens & Pencils', 'Notebooks & Files', 'Office Supplies', 'Printing Materials']
    },
    {
      id: 2,
      title: 'Housekeeping Equipment',
      description: 'Complete range of housekeeping tools, from mops and wipers to vacuum cleaners and buckets. Durable and efficient solutions for professional cleaning teams.',
      icon: Brush,
      image: '/workers_belts.webp',
      items: ['Mops & Buckets', 'Vacuum Cleaners', 'Cleaning Tools', 'Maintenance Equipment']
    },
    {
      id: 3,
      title: 'Cleaning Materials',
      description: 'Industrial-grade cleaning agents and disinfectants for floors, kitchens, and restrooms. Safe, effective, and available in bulk quantities for cost efficiency.',
      icon: Package,
      image: '/cap1.jpeg',
      items: ['Floor Cleaners', 'Disinfectants', 'Detergents', 'Sanitizers']
    }
  ];

  const handleWhatsAppClick = (category: string) => {
    window.open(`https://wa.me/919999999999?text=Hello! I would like to get a quote for ${category} from UNIfactory.`, '_blank');
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">More Than Just Uniforms</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete B2B solutions for all your workplace needs. From stationery to cleaning supplies, 
            we provide bulk quantities at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {supplies.map((supply) => (
            <div
              key={supply.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={supply.image}
                  alt={supply.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <supply.icon className="w-6 h-6 text-blue-900" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{supply.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{supply.description}</p>
                
                {/* Items List */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Includes:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {supply.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppClick(supply.title)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Your Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/bulk-supplies"
            className="inline-flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Package className="w-5 h-5" />
            <span>Explore All Bulk Supplies</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BulkSupplies;