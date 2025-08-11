import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hello! I would like to inquire about UNIfactory uniforms and bulk supplies.', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+912231494349', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:unifactory@gmail.com?subject=Inquiry about Uniforms and Bulk Supplies', '_self');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Office+No.+3,+Punit+Tower+2+Co-Op+HSG+Ltd,+Near+K+Star+Hotel,+Sector+11,+CBD+Belapur,+Navi+Mumbai+400614', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91 99999 99999',
      secondary: 'Instant response',
      action: handleWhatsAppClick,
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      primary: '022 31494349',
      secondary: 'Business hours',
      action: handlePhoneClick,
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'unifactory@gmail.com',
      secondary: '24/7 response',
      action: handleEmailClick,
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact UNIfactory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your uniform and bulk supply needs? We're here to help you find the perfect solutions for your business.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred method to contact us. We're committed to responding quickly and helping you with all your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group transform hover:-translate-y-2"
              >
                <button
                  onClick={method.action}
                  className={`w-20 h-20 ${method.bgColor} ${method.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform group-hover:scale-110`}
                >
                  <method.icon className="w-10 h-10 text-white" />
                </button>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{method.title}</h3>
                <p className="text-lg text-gray-800 mb-2">{method.primary}</p>
                <p className="text-sm text-gray-500">{method.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Office</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Office No. 3, Punit Tower 2 Co-Op HSG Ltd,<br />
                      Near K Star Hotel, Sector 11,<br />
                      CBD Belapur, Navi Mumbai – 400614
                    </p>
                    <button
                      onClick={handleMapClick}
                      className="mt-3 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                    >
                      View on Google Maps →
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-green-600 mt-2">WhatsApp available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Meeting by Appointment</h3>
                    <p className="text-gray-600">
                      For detailed consultations and product demonstrations, 
                      please schedule an appointment via WhatsApp or phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Location Map</h2>
              <div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={handleMapClick}
              >
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">CBD Belapur, Navi Mumbai</h3>
                    <p className="text-blue-700 mb-4">Near K Star Hotel, Sector 11</p>
                    <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block">
                      Open in Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">How do you determine pricing?</h3>
              <p className="text-gray-600">
                Our pricing is based on order quantity, current market trends, and negotiation. We provide customized quotes to ensure you get the best value for your specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">What is the minimum order quantity?</h3>
              <p className="text-gray-600">
                Minimum order quantities vary by product type. For uniforms, we typically start from 50 pieces. For bulk supplies, quantities depend on the specific items. Contact us for detailed MOQ information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Do you provide samples before bulk orders?</h3>
              <p className="text-gray-600">
                Yes, we provide samples for fabric quality, design, and fit verification before confirming bulk orders. Sample costs may apply and will be adjusted against your final order.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">What is your delivery timeline?</h3>
              <p className="text-gray-600">
                Delivery timelines vary based on order size and customization requirements. Typically, uniform orders take 2-3 weeks, while bulk supplies can be delivered within 3-7 days depending on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Order?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get instant responses and personalized assistance through WhatsApp
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Start WhatsApp Chat</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;