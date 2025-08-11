import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to discuss my uniform and bulk supply requirements with UNIfactory.', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+912231494349', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:unifactory@gmail.com?subject=Inquiry about Uniforms and Bulk Supplies', '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%2040l40-40h-40v40zm40%200v-40h-40l40%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your uniform and supply needs today. Our team is ready to provide you with 
          customized solutions and competitive pricing based on your requirements.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-10">
          {/* WhatsApp - Primary CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full md:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Contact on WhatsApp Now</span>
          </button>

          {/* Phone */}
          <button
            onClick={handlePhoneClick}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full md:w-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </button>

          {/* Email */}
          <button
            onClick={handleEmailClick}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full md:w-auto"
          >
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </button>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-orange-100">+91 99999 99999</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-orange-100">022 31494349</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-orange-100">unifactory@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-orange-100 mt-6 text-sm">
          No fixed pricing on website - we offer customized quotes based on your requirements, 
          order quantity, and market conditions for the best value.
        </p>
      </div>
    </section>
  )
};

export default FinalCTA;