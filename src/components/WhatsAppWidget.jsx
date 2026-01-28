
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/utils/whatsappUtils';

const WhatsAppWidget = () => {
  const handleClick = () => {
    const link = getWhatsAppLink();
    window.open(link, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green rounded-full shadow-2xl flex items-center justify-center group hover:shadow-green/50 transition-shadow"
      aria-label="Contactez-nous sur WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-20"></span>
      
      {/* Icon */}
      <MessageCircle className="w-8 h-8 text-white relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Discutez avec nous !
      </div>
    </motion.button>
  );
};

export default WhatsAppWidget;
