import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Truck } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

const AboutPreview: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Truck, value: 'Pan-India', label: 'Delivery' },
    { icon: CheckCircle, value: '100%', label: 'Quality Assured' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={getImagePath('chef_uniforms.jpg')}
                  alt="Housekeeping uniforms"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={getImagePath('workers_belts.webp')}
                  alt="Kitchen staff uniforms"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={getImagePath('maintence_worker_uniform2.avif')}
                  alt="Security guard uniforms"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={getImagePath('security_guard_uniform1.avif')}
                  alt="Industrial uniforms"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">Quality</p>
              <p className="text-sm">Since 2014</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Your Uniform Partner for Every Industry
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At UNIfactory, we specialize in high-quality uniforms and accessories for every industry, 
              from hospitality to factories. With over a decade of experience, we understand the unique 
              needs of different businesses and deliver tailored solutions that combine durability, 
              comfort, and professional appearance.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our flexible pricing is based on order quantity, market trends, and negotiation, ensuring 
              you always get the best value. We believe in building long-term relationships with our 
              clients through quality products and exceptional service.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group"
            >
              <span>Read More About Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;