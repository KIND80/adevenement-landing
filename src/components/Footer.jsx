
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { businessInfo } from '@/data/seoData';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate(`/#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              ADEVENEMENT
            </h3>
            <p className="text-cream/80 leading-relaxed">
              Créons ensemble l'événement de vos rêves. Décoration sur-mesure pour mariages, anniversaires et événements à Metz et dans toute la Lorraine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleHomeClick}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Services Décoration
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Contact & Devis
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              Contact Local
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream/80">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/80">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/80">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <address className="not-italic">
                  {businessInfo.address.streetAddress}<br />
                  {businessInfo.address.postalCode} {businessInfo.address.addressLocality}<br />
                  <span className="text-xs opacity-70">Zones: {businessInfo.serviceAreas.slice(0, 3).join(', ')}...</span>
                </address>
              </li>
            </ul>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              Suivez-nous
            </h4>
            <p className="text-cream/80 mb-4">
              Retrouvez nos avis clients
            </p>
            <a
              href="https://www.mariages.net/decoration-mariage/adevenement--e366507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-colors"
            >
              Décoration mariage Lorraine sur Mariages.net
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ADEVENEMENT Metz. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                to="/politique-confidentialite"
                className="text-cream/60 hover:text-gold text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/conditions-generales"
                className="text-cream/60 hover:text-gold text-sm transition-colors"
              >
                Conditions générales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
