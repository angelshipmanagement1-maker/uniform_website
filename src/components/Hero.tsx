import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: getImagePath('chef_uniforms.jpg'),
      title: 'Premium Housekeeping Uniforms',
      subtitle: 'Professional uniforms for hospitality and corporate facilities'
    },
    {
      image: getImagePath('maintence_worker_uniform2.avif'),
      title: 'Security Guard Uniforms',
      subtitle: 'Authoritative and comfortable uniforms for security professionals'
    },
    {
      image: getImagePath('workers_belts.webp'),
      title: 'Kitchen Staff & Chef Uniforms',
      subtitle: 'Heat-resistant, professional kitchen wear and aprons'
    },
    {
      image: getImagePath('security_guard_uniform1.avif'),
      title: 'Industrial & Safety Uniforms',
      subtitle: 'Durable workwear for factory and industrial workers'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to inquire about UNIfactory uniforms and bulk supplies.', '_blank');
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            UNIfactory – Uniforms & Supplies That{' '}
            <span className="text-orange-400">Work as Hard as You Do</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium uniforms, custom accessories, and bulk workplace essentials — all in one place.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Contact on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;