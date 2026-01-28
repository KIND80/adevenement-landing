
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - LCP Optimized */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586245021641-a6ef44a4a1ff"
          alt="Décoration Mariage Metz et Organisation Événement Lorraine"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center will-change-transform"
        >
          {/* Glassmorphism Container */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Décoration Mariage & Organisation Événement à{' '}
              <span className="text-gradient bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent block mt-2">
                 Metz, Forbach, Thionville
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-cream mb-8 font-light max-w-2xl mx-auto"
            >
              Votre partenaire privilégié pour une décoration sur-mesure en Moselle. Mariages, anniversaires et événements d'exception dans toute la Lorraine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToServices}
                className="group px-8 py-4 bg-gold hover:bg-amber-500 text-navy font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Découvrir nos services de décoration"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 border-2 border-white/40 backdrop-blur-sm hover:scale-105"
                aria-label="Prendre rendez-vous à Metz"
              >
                <Calendar className="w-5 h-5" />
                Prendre RDV
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
