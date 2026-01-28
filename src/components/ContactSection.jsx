
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare, MapPin, Send, Phone, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { getWhatsAppLink } from '@/utils/whatsappUtils';
import { businessInfo } from '@/data/seoData';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const services = [
    'Mariage',
    'Anniversaire',
    'Baptême',
    'Événement Corporatif',
    'Autre',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: '❌ Erreur',
        description: 'Veuillez remplir tous les champs obligatoires (Nom, Email, Message).',
        variant: 'destructive',
      });
      return;
    }

    const subject = `Demande d'événement - ${formData.service || 'Autre'} - ${formData.date || 'Date non spécifiée'}`;
    const body = `Bonjour Adeline,

Voici une nouvelle demande d'événement via le site internet :

--------------------------------------------------
📋 INFORMATIONS CLIENT
--------------------------------------------------
• Nom : ${formData.name}
• Email : ${formData.email}
• Téléphone : ${formData.phone || 'Non renseigné'}

--------------------------------------------------
🎉 DÉTAILS DE L'ÉVÉNEMENT
--------------------------------------------------
• Type d'événement : ${formData.service || 'Non spécifié'}
• Date souhaitée : ${formData.date || 'Non renseignée'}

--------------------------------------------------
✉️ MESSAGE
--------------------------------------------------
${formData.message}
`;

    const mailtoLink = `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: '✅ Client mail ouvert !',
      description: 'Votre logiciel de messagerie a été ouvert avec les informations pré-remplies.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: '',
    });
  };

  const handleWhatsApp = () => {
    const link = getWhatsAppLink(formData.service || 'événement', formData.date);
    window.open(link, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Contactez-
            <span className="text-gradient bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              nous
            </span>
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Basé à <span className="text-gold font-semibold">Metz</span>, nous intervenons à Forbach, Thionville et dans toute la région Lorraine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 will-change-transform"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-gold">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-cream mb-1">Email</div>
                    <div className="text-white/80">{businessInfo.email}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-cream mb-1">WhatsApp</div>
                    <div className="text-white/80">{businessInfo.phone}</div>
                  </div>
                </button>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-cream mb-1">Adresse Showroom</div>
                    <address className="text-white/80 not-italic">
                      {businessInfo.address.streetAddress}<br />
                      {businessInfo.address.postalCode} {businessInfo.address.addressLocality}<br />
                      <span className="text-sm opacity-75">{businessInfo.address.region}</span>
                    </address>
                    <div className="text-sm text-gold mt-2">
                      ⚠️ Sur RDV uniquement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="will-change-transform"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields remain the same */}
              <div>
                <label htmlFor="name" className="block text-cream mb-2 font-semibold">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/50"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-cream mb-2 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/50"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-cream mb-2 font-semibold">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/50"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-cream mb-2 font-semibold">
                    Type d'événement
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  >
                    <option value="" className="bg-navy">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-navy">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-cream mb-2 font-semibold">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-cream mb-2 font-semibold">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold transition-colors text-white placeholder-white/50 resize-none"
                  placeholder="Décrivez votre projet (lieu en Lorraine, nombre d'invités...)"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold hover:bg-amber-500 text-navy font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
