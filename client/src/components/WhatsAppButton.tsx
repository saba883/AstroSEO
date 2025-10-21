import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '+966507688714';
  const message = 'Hello! I need help with business setup in Saudi Arabia.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
