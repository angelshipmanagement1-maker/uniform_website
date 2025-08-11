import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to inquire about UNIfactory services.', '_blank');
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="font-bold text-2xl">UNIfactory</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium uniforms and bulk workplace supplies. 
              Quality, customization, and competitive pricing for businesses across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">
                    Office No. 3, Punit Tower 2 Co-Op HSG Ltd,<br />
                    Near K Star Hotel, Sector 11,<br />
                    CBD Belapur, Navi Mumbai – 400614
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href="tel:+912231494349" className="text-blue-100 hover:text-white transition-colors">
                  022 31494349
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:unifactory@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  unifactory@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-blue-200 hover:text-white transition-colors">
                  Uniform Categories
                </Link>
              </li>
              <li>
                <Link to="/bulk-supplies" className="text-blue-200 hover:text-white transition-colors">
                  Bulk Supplies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-blue-200">
              <li>Housekeeping Uniforms</li>
              <li>Security Guard Uniforms</li>
              <li>Kitchen Staff Uniforms</li>
              <li>Safety & Industrial Wear</li>
              <li>Custom Belts & Caps</li>
              <li>Bulk Stationery Supplies</li>
              <li>Housekeeping Equipment</li>
              <li>Cleaning Materials</li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Need a Quote? Contact Us Instantly!</h3>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us Now</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; 2025 UNIfactory. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;