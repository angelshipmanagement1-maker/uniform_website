import React from 'react';
import { MessageCircle, Users, Shield, Target, Clock } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to know more about UNIfactory and your services.', '_blank');
  };

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes strict quality checks before delivery.'
    },
    {
      icon: Users,
      title: 'Customer Centric',
      description: 'Our clients success is our priority. We build long-term relationships based on trust and reliability.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously innovate our products and services to meet evolving industry demands.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and ensure prompt delivery across India.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to provide quality uniforms' },
    { year: '2016', title: 'First Major Client', description: 'Secured our first enterprise client in hospitality sector' },
    { year: '2018', title: 'Bulk Supplies Launch', description: 'Expanded to offer complete workplace supply solutions' },
    { year: '2020', title: 'Pan-India Operations', description: 'Extended delivery network across all major Indian cities' },
    { year: '2023', title: '500+ Clients', description: 'Achieved milestone of serving 500+ satisfied clients' },
    { year: '2025', title: 'Digital Transformation', description: 'Enhanced online presence and customer experience' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About UNIfactory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in premium uniforms and workplace essentials. 
            Over a decade of excellence in serving businesses across India.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                UNIfactory was founded in 2014 with a simple yet powerful vision: to provide high-quality, 
                affordable uniforms that help businesses maintain their professional image while ensuring 
                employee comfort and functionality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small uniform manufacturing business has grown into a comprehensive 
                workplace solutions provider. Today, we serve over 500 clients across various industries 
                including hospitality, healthcare, manufacturing, security, and corporate sectors.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, competitive pricing, and exceptional customer service has made 
                us the preferred choice for businesses looking for reliable uniform and supply solutions.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get in Touch</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/chef_uniforms.jpg"
                alt="Our team at work"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/maintence_worker_uniform2.avif"
                alt="Quality uniforms"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
              <img
                src="/workers_belts.webp"
                alt="Kitchen uniforms"
                className="w-full h-48 object-cover rounded-lg shadow-lg -mt-4"
              />
              <img
                src="/security_guard_uniform1.avif"
                alt="Industrial wear"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and help us deliver exceptional service to our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth from a startup to a trusted uniform supplier
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-blue-900 mb-3">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Pricing Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in transparent, negotiation-based pricing that considers multiple factors to ensure 
              you get the best value for your investment. Our pricing is determined by:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">#</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Order Quantity</h3>
                <p className="text-gray-600 text-sm">Bulk orders receive better pricing per unit</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Market Trends</h3>
                <p className="text-gray-600 text-sm">Pricing reflects current market conditions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Relationship</h3>
                <p className="text-gray-600 text-sm">Long-term partnerships receive special rates</p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discuss Your Requirements</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;