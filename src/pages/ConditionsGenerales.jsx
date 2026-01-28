
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { seoConfig } from '@/data/seoData';
import Breadcrumbs from '@/components/Breadcrumbs';

const ConditionsGenerales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{seoConfig.legal.terms.title}</title>
        <meta name="description" content={seoConfig.legal.terms.description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.adevenement.fr/conditions-generales" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs className="mb-6" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-8 border-b pb-4">
              Conditions Générales d'Utilisation
            </h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">1. Présentation du site</h2>
                <p>
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site ADEVENEMENT l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                </p>
                <p className="mt-2">
                  <strong>Propriétaire :</strong> ADEVENEMENT - 14 rue Saint Olivier, 57000 Metz<br />
                  <strong>Contact :</strong> Contact@adevenement.fr
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">2. Conditions générales d’utilisation</h2>
                <p>
                  L’utilisation du site ADEVENEMENT implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">3. Description des services fournis</h2>
                <p>
                  Le site ADEVENEMENT a pour objet de fournir une information concernant l’ensemble des activités de la société. ADEVENEMENT s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">4. Propriété intellectuelle</h2>
                <p>
                  ADEVENEMENT est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">5. Limitations de responsabilité</h2>
                <p>
                  ADEVENEMENT ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site ADEVENEMENT.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">6. Gestion des données personnelles</h2>
                <p>
                  En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ConditionsGenerales;
