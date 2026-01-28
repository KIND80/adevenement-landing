
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Mail, Calendar, CheckCircle2, Star } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { getWhatsAppLink } from '@/utils/whatsappUtils';
import { useToast } from '@/components/ui/use-toast';
import { seoConfig, businessInfo } from '@/data/seoData';
import Breadcrumbs from '@/components/Breadcrumbs';

const ServicePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const service = servicesData[type];
  const [eventDate, setEventDate] = useState('');
  const { toast } = useToast();
  
  // Get SEO config for current service
  const seo = seoConfig.services[type] || seoConfig.home;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Service non trouvé</h2>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const link = getWhatsAppLink(service.title, eventDate);
    window.open(link, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Demande d'événement - ${service.title} - ${eventDate || 'Date non spécifiée'}`;
    const body = `Bonjour Adeline,\n\nJ'aimerais avoir des renseignements concernant la prestation : ${service.title}.\n\n...`;
    const mailtoLink = `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: '✅ Client mail ouvert !',
      description: 'Votre logiciel de messagerie a été ouvert avec les informations pré-remplies.',
    });
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={`https://www.adevenement.fr/services/${type}`} />
        
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={service.image} />
        <meta property="og:type" content="service" />
        
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={service.image} />
        
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header Image */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} à Metz et Lorraine`}
            width="1920"
            height="800"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-center mb-4"
            >
              {service.title}
            </motion.h1>
            <p className="text-lg md:text-xl text-cream max-w-2xl text-center">
              {service.description}
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
            aria-label="Retour à l'accueil"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <Breadcrumbs className="-mt-16 mb-4 relative z-20 text-white/90" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6">
                  Nos Prestations {service.title} en Lorraine
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-1 bg-gold/10 rounded-full mt-1">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* ... (rest of the component logic for benefits and testimonials remains the same but wrapped for brevity) ... */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6">
                  Pourquoi choisir ADEVENEMENT Metz ?
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="p-4 bg-cream/30 rounded-xl border border-gold/10">
                      <h3 className="font-bold text-navy mb-2">{benefit}</h3>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Star className="w-32 h-32 fill-white" />
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic mb-4 font-light leading-relaxed">
                    "{service.testimonial.text}"
                  </blockquote>
                  <cite className="not-italic font-bold text-gold">
                    — {service.testimonial.author}
                  </cite>
                </div>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-xl sticky top-24"
              >
                <h3 className="text-xl font-bold text-navy mb-6">
                  Planifiez votre événement à Metz
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-3 bg-green hover:bg-green/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green/20 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Discuter sur WhatsApp
                  </button>

                  <div className="text-center text-sm text-gray-400">ou</div>

                  <button
                    onClick={handleEmailContact}
                    className="w-full py-3 bg-navy hover:bg-navy/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-navy/20 hover:-translate-y-0.5"
                  >
                    <Mail className="w-5 h-5" />
                    Demander un devis
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Réponse sous 24h garantie
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
