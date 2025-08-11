import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    'Housekeeping Uniforms',
    'Maintenance Workers Uniforms',
    'Safety Guide Uniforms',
    'Security Guard Uniforms',
    'Customized Belts & Caps',
    'Kitchen Staff Uniforms & Aprons'
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to inquire about UNIfactory uniforms and bulk supplies.', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="font-bold text-2xl text-blue-900">UNIfactory</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About Us
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowCategoriesDropdown(true)}
              onMouseLeave={() => setShowCategoriesDropdown(false)}
            >
              <button className="text-gray-700 hover:text-blue-900 font-medium transition-colors flex items-center">
                Uniform Categories
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {showCategoriesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to="/categories"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/bulk-supplies" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Bulk Supplies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/categories"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Uniform Categories
              </Link>
              <Link
                to="/bulk-supplies"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bulk Supplies
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;