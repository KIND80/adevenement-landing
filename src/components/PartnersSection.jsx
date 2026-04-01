
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Nos{' '}
            <span className="text-gradient bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              Partenaires
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <a
            href="https://www.mariages.net/decoration-mariage/adevenement--e366507"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gold/20 hover:border-gold hover:scale-105">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo/Badge */}
                <div className="flex-shrink-0">
                  <img
                    src="/images/mariages.netimage.png"
                    alt="Mariages.net - Recommandé"
                    className="w-32 h-auto"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <h3 className="text-2xl font-display font-bold text-navy">
                      Recommandé sur Mariages.net
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-navy/70 text-lg leading-relaxed mb-4">
                    Découvrez les avis de nos clients satisfaits et explorez notre portfolio complet sur Mariages.net, le portail de référence pour les mariages en France.
                  </p>

                  <div className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                    Voir notre profil
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 pt-8 border-t border-gold/20">
                <p className="text-center text-navy/60 italic">
                  "La confiance de nos clients est notre plus belle récompense"
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
