import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "18437320661";
  const message = "Hi, I'm interested in ordering some Off Stamp Vapes.";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 font-medium"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Chat with us</span>
    </button>
  );
}
