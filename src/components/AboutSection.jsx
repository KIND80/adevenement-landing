
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: '500+', label: 'Clients satisfaits en Lorraine' },
    { icon: Heart, value: '1000+', label: 'Événements organisés' },
    { icon: Award, value: '5+', label: 'Années d\'expertise locale' },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="will-change-transform"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6">
              Votre Expert en{' '}
              <span className="text-gradient bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
                Décoration Événementielle
              </span>{' '}
              à Metz
            </h2>
            <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
              <p>
                Depuis plus de 5 ans, ADEVENEMENT sublime vos moments précieux à <span className="font-semibold text-navy">Metz, Forbach, Thionville</span> et dans toute la région <span className="font-semibold text-navy">Lorraine</span>.
              </p>
              <p>
                Nous croyons que <span className="font-semibold text-gold">chaque événement est unique</span>. Notre mission est de transformer vos rêves en réalité grâce à une décoration sur-mesure, adaptée à vos envies et à votre lieu de réception en Moselle.
              </p>
              <h3 className="text-xl font-bold text-navy mt-4">Nos zones d'intervention</h3>
              <p>
                Basés au cœur de Metz (57000), nous intervenons pour la mise en place de décorations de mariage, anniversaires et événements d'entreprise sur tout le département de la Moselle et au Luxembourg frontalier.
              </p>
              <p className="font-semibold text-gold text-xl pt-2">
                Rejoignez nos 500+ clients satisfaits qui nous ont fait confiance pour leur décoration.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative will-change-transform"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1676751319212-a2bdd25395c3"
                alt="Décoration événementielle élégante à Metz par ADEVENEMENT"
                width="600"
                height="800"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
