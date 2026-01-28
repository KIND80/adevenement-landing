
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/utils/whatsappUtils';
import { useToast } from '@/components/ui/use-toast';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenContactPopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenContactPopup', 'true');
      }, 20000); // 20 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    const link = getWhatsAppLink('événement', eventDate);
    window.open(link, '_blank');
  };

  const handleContactForm = () => {
    setIsOpen(false);
    
    const subject = `Demande d'événement - Renseignement - ${eventDate || 'Date non spécifiée'}`;
    
    const body = `Bonjour Adeline,

J'aimerais avoir des renseignements pour un événement.

--------------------------------------------------
📋 INFORMATIONS CLIENT
--------------------------------------------------
• Nom : (à compléter)
• Email : (à compléter)
• Téléphone : (à compléter)

--------------------------------------------------
🎉 DÉTAILS DE L'ÉVÉNEMENT
--------------------------------------------------
• Type d'événement : (à compléter)
• Date souhaitée : ${eventDate || '(à compléter)'}

--------------------------------------------------
✉️ MESSAGE
--------------------------------------------------
(Votre message ici)
`;

    const mailtoLink = `mailto:Contact@adevenement.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: '✅ Client mail ouvert !',
      description: 'Votre logiciel de messagerie a été ouvert avec les informations pré-remplies.',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-navy mb-2">
                Besoin de conseils ?
              </h3>
              <p className="text-gray-600">
                Discutons de votre projet et créons ensemble l'événement de vos rêves.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  Date de l'événement (optionnel)
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-green hover:bg-green/90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-green/20"
              >
                <MessageCircle className="w-5 h-5" />
                Contacter via WhatsApp
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">ou</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <button
                onClick={handleContactForm}
                className="w-full py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-navy/20"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
