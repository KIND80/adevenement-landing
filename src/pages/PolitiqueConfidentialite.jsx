
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { seoConfig } from '@/data/seoData';
import Breadcrumbs from '@/components/Breadcrumbs';

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{seoConfig.legal.privacy.title}</title>
        <meta name="description" content={seoConfig.legal.privacy.description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.adevenement.fr/politique-confidentialite" />
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
              Politique de Confidentialité
            </h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">1. Collecte de l'information</h2>
                <p>
                  Nous recueillons des informations lorsque vous utilisez notre formulaire de contact ou nous écrivez par email/WhatsApp. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone et les détails concernant votre événement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">2. Utilisation des informations</h2>
                <p>
                  Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Fournir un contenu publicitaire personnalisé</li>
                  <li>Améliorer notre site Web</li>
                  <li>Améliorer le service client et vos besoins de prise en charge</li>
                  <li>Vous contacter par e-mail ou téléphone concernant votre projet</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">3. Confidentialité des données</h2>
                <p>
                  Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">4. Protection des informations</h2>
                <p>
                  Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-3">5. Consentement</h2>
                <p>
                  En utilisant notre site, vous consentez à notre politique de confidentialité.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
