
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Tous');

  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/3c1821ba8bac3989cd84bc13e2d1f2f8.png',
      category: 'Mariage',
      alt: 'Logo ADEVENEMENT Décoration Metz',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/0cb167beb58867412792beb613ea950e.jpg',
      category: 'Mariage',
      alt: 'Table de mariage élégante à Metz avec décoration florale blanche',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/7a1e80703fe3edfa0ebbf23fa909fe92.jpg',
      category: 'Mariage',
      alt: 'Décoration de table mariage Thionville, vaisselle dorée',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/94f75220a8186ea0aa46e923d792ca4d.jpg',
      category: 'Mariage',
      alt: 'Table d\'honneur mariage Forbach, décoration prestige',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/aa27c48ad19d6114caa2c1d47d0712ac.jpg',
      category: 'Mariage',
      alt: 'Composition florale mariage Metz, centre de table haut',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/4622a7f8435370f916664969f6f6fd06.jpg',
      category: 'Mariage',
      alt: 'Plan de table mariage original en Lorraine',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/f7af019884dbfd7b8a3e5e2e2210b078.jpg',
      category: 'Anniversaire',
      alt: 'Décoration anniversaire tropical Metz, arche ballons verte',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/c1c5966f9c702ded2ba03226a304082b.jpg',
      category: 'Événements',
      alt: 'Arche de cérémonie laïque verte à Thionville',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/cce910b9862d4ed671466cdd89c78489.jpg',
      category: 'Événements',
      alt: 'Arche florale blanche pour baptême à Forbach',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/daa46f55f64c7d008e8bf5e18406b331.jpg',
      category: 'Événements',
      alt: 'Arche de mariage romantique rose poudré Moselle',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/ea04b5b5f1e2d218cbbbb8c532db1d81.jpg',
      category: 'Événements',
      alt: 'Arche ronde élégante dorée pour photobooth Metz',
    },
    {
      url: 'https://horizons-cdn.hostinger.com/2dcc7d87-8ec9-4207-963e-c7d135acdbce/d2d01bc9af8b51e7a540aa1d8aeed683.jpg',
      category: 'Événements',
      alt: 'Décoration événementielle salle de réception Lorraine',
    },
  ];

  const categories = ['Tous', 'Mariage', 'Anniversaire', 'Événements'];

  const filteredImages = filter === 'Tous' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Notre{' '}
            <span className="text-gradient bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
              Galerie
            </span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto mb-8">
            Découvrez nos plus belles créations de décoration à Metz et en Lorraine
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gold text-white shadow-lg scale-105'
                    : 'bg-white text-navy hover:bg-gold/10 border border-gold/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl will-change-transform"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  width="400"
                  height="400"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8 text-white" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
