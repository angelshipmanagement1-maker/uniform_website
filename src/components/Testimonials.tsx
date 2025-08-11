import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Mumbai Hotel Group',
      position: 'Operations Manager',
      content: 'UNIfactory has been our uniform supplier for over 3 years. The quality is exceptional, and their ability to customize designs according to our brand guidelines is impressive. Highly recommended for hospitality businesses.',
      rating: 5,
      image: '/security_guard_uniform1.avif'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Tech Solutions Pvt Ltd',
      position: 'HR Director',
      content: 'The bulk stationery and housekeeping supplies from UNIfactory have helped us reduce costs significantly. Their negotiation-based pricing model works perfectly for our budget planning. Great service and timely delivery.',
      rating: 5,
      image: '/security_guard_uniform2.avif'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Industrial Manufacturing Co.',
      position: 'Safety Officer',
      content: 'Safety is our priority, and UNIfactory understands this. Their safety uniforms meet all required standards while being comfortable for our workers. The durability of their products is outstanding.',
      rating: 5,
      image: '/chef_uniforms.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/4 w-96 h-96 border-2 border-white rounded-full"></div>
        <div className="absolute transform rotate-45 translate-x-1/2 translate-y-1/2 bottom-1/4 right-1/4 w-64 h-64 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses who trust UNIfactory for their uniform and supply needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-orange-400" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-orange-200"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-orange-600 font-semibold">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-orange-400 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;