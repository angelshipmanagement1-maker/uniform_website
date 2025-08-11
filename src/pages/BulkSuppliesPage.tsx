import React from 'react';
import { MessageCircle, Package, FileText, Brush, Droplets, CheckCircle } from 'lucide-react';

const BulkSuppliesPage: React.FC = () => {
  const supplyCategories = [
    {
      id: 1,
      title: 'Stationery Supplies',
      icon: FileText,
      description: 'Complete range of office stationery and supplies for smooth business operations. From basic writing materials to specialized office equipment.',
      image: '/chef_uniforms.jpg',
      subcategories: [
        {
          name: 'Writing Materials',
          items: ['Pens (Ball, Gel, Marker)', 'Pencils & Erasers', 'Highlighters', 'Permanent Markers']
        },
        {
          name: 'Paper Products',
          items: ['A4 Copy Paper', 'Notebooks & Notepads', 'Sticky Notes', 'Letter Pads']
        },
        {
          name: 'Filing & Organization',
          items: ['Files & Folders', 'Binders & Clips', 'Document Trays', 'Storage Boxes']
        },
        {
          name: 'Office Accessories',
          items: ['Staplers & Pins', 'Scissors & Cutters', 'Calculators', 'Desk Organizers']
        }
      ]
    },
    {
      id: 2,
      title: 'Housekeeping Equipment',
      icon: Brush,
      description: 'Professional-grade cleaning tools and equipment for maintaining cleanliness and hygiene in commercial and residential spaces.',
      image: '/workers_belts.webp',
      subcategories: [
        {
          name: 'Cleaning Tools',
          items: ['Mops (Wet & Dry)', 'Brooms & Brushes', 'Squeegees', 'Dusters & Cloths']
        },
        {
          name: 'Equipment',
          items: ['Vacuum Cleaners', 'Floor Polishers', 'Pressure Washers', 'Steam Cleaners']
        },
        {
          name: 'Containers',
          items: ['Buckets & Basins', 'Trolleys & Carts', 'Waste Bins', 'Storage Containers']
        },
        {
          name: 'Accessories',
          items: ['Gloves & Aprons', 'Safety Gear', 'Replacement Parts', 'Maintenance Tools']
        }
      ]
    },
    {
      id: 3,
      title: 'Cleaning Materials',
      icon: Droplets,
      description: 'Industrial-strength cleaning agents and chemicals for effective sanitation and maintenance across various environments.',
      image: '/cap1.jpeg',
      subcategories: [
        {
          name: 'Floor Care',
          items: ['Floor Cleaners', 'Wax & Polish', 'Degreasers', 'Tile Cleaners']
        },
        {
          name: 'Sanitization',
          items: ['Disinfectants', 'Hand Sanitizers', 'Surface Cleaners', 'Antibacterial Sprays']
        },
        {
          name: 'Specialized Cleaners',
          items: ['Glass Cleaners', 'Carpet Cleaners', 'Metal Polish', 'Wood Care']
        },
        {
          name: 'Laundry',
          items: ['Detergents', 'Fabric Softeners', 'Stain Removers', 'Bleaching Agents']
        }
      ]
    }
  ];

  const benefits = [
    'Bulk pricing for cost savings',
    'Quality assured products',
    'Regular supply contracts available',
    'Customized product packages',
    'Pan-India delivery network',
    'Technical support & consultation'
  ];

  const handleWhatsAppClick = (category?: string) => {
    const message = category 
      ? `Hello! I would like to get a bulk quote for ${category} from UNIfactory.`
      : 'Hello! I would like to inquire about your bulk supplies and get pricing information.';
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bulk Supplies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Complete workplace supply solutions for businesses. From stationery to industrial cleaning equipment, 
            we provide everything you need at competitive bulk prices.
          </p>
          <button
            onClick={() => handleWhatsAppClick()}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Get Bulk Pricing</span>
          </button>
        </div>
      </section>

      {/* Why Choose Our Bulk Supplies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Bulk Supplies?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand business needs and provide comprehensive solutions for your workplace requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {supplyCategories.map((category, index) => (
            <div key={category.id} className="mb-20 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                      <category.icon className="w-8 h-8 text-blue-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-6">
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      Category {category.id}
                    </span>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  </div>

                  {/* Subcategories */}
                  <div className="space-y-6 mb-8">
                    {category.subcategories.map((subcategory, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">{subcategory.name}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {subcategory.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                              <span className="text-gray-600 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleWhatsAppClick(category.title)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get {category.title} Quote</span>
                  </button>
                </div>
              </div>

              {/* Separator */}
              {index < supplyCategories.length - 1 && (
                <hr className="mt-20 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Flexible Bulk Pricing</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our pricing structure is designed to give you the best value based on your specific requirements. 
            We consider order quantity, delivery schedule, and long-term partnership opportunities to provide 
            the most competitive rates in the market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Package className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Volume Discounts</h3>
              <p className="text-gray-600 text-sm">Better pricing for larger quantities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Contract Rates</h3>
              <p className="text-gray-600 text-sm">Special pricing for annual contracts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Negotiable Terms</h3>
              <p className="text-gray-600 text-sm">Flexible payment and delivery terms</p>
            </div>
          </div>

          <button
            onClick={() => handleWhatsAppClick()}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Discuss Your Bulk Requirements</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BulkSuppliesPage;