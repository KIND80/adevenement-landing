
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Cake, Baby, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: 'mariage',
      icon: Heart,
      title: 'Décoration Mariage',
      description: 'Décoratrice de mariage à Metz et Thionville. Arches florales, centres de table et scénographie complète pour votre cérémonie en Moselle.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 'anniversaire',
      icon: Cake,
      title: 'Décoration Anniversaire',
      description: 'Organisation d\'anniversaires inoubliables à Forbach et Metz. Murs de ballons, chiffres géants et thèmes personnalisés.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'bapteme',
      icon: Baby,
      title: 'Baptême & Baby Shower',
      description: 'Ambiance douce pour baptêmes et baby showers en Lorraine. Décoration pastel, candy bar et mise en scène raffinée.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      id: 'corporate',
      icon: Briefcase,
      title: 'Événements Entreprise',
      description: 'Décoration événementielle pour entreprises à Metz. Séminaires, galas, soirées de fin d\'année et lancements de produits.',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 will-change-transform"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Nos Services de{' '}
            <span className="text-gradient bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              Décoration en Lorraine
            </span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Des prestations haut de gamme à Metz, Thionville, Forbach et alentours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative will-change-transform"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-2 flex flex-col">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-navy mb-3 relative">
                  {service.title}
                </h3>
                <p className="text-navy/70 mb-6 relative leading-relaxed flex-grow text-sm">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  to={`/services/${service.id}`}
                  className={`relative inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all mt-auto`}
                  aria-label={`En savoir plus sur la ${service.title}`}
                >
                  En savoir plus
                  <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.gradient} text-transparent`} style={{ color: 'inherit' }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
