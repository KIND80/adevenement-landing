import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { seoConfig } from "@/data/seoData";
import Breadcrumbs from "@/components/Breadcrumbs";

const ConditionsGenerales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Fallbacks pour éviter page blanche si seoConfig n'a pas la structure attendue
  const title =
    seoConfig?.legal?.terms?.title ??
    "Conditions Générales de Vente (CGV) - ADEVENEMENT";
  const description =
    seoConfig?.legal?.terms?.description ??
    "Consultez les conditions générales de vente d'ADEVENEMENT : devis, acompte, paiement, annulation, responsabilité, location de matériel et prestations.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <link
          rel="canonical"
          href="https://www.adevenement.fr/conditions-generales"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs className="mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
              Conditions Générales de Vente (CGV)
            </h1>

            <p className="text-gray-600 mb-8 border-b pb-6 leading-relaxed">
              Les présentes Conditions Générales de Vente (ci-après « CGV »)
              s’appliquent à toute commande de location de matériel et/ou
              prestation de décoration effectuée auprès de{" "}
              <strong>ADEVENEMENT</strong>. Elles complètent le devis et/ou le
              contrat signé. En cas de contradiction, les stipulations
              particulières du devis/contrat prévalent.
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* 1. Identité */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  1. Identité du Prestataire
                </h2>
                <p>
                  <strong>ADEVENEMENT</strong>
                  <br />
                  Adresse : 76 Sente à My, 57000 Metz, France
                  <br />
                  Contact : contact@adevenement.fr
                </p>
              </section>

              {/* 2. Objet */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">2. Objet</h2>
                <p>
                  Les CGV encadrent la location de matériel de décoration et/ou
                  les prestations de décoration (livraison, installation,
                  démontage, reprise) lorsque ces éléments sont inclus et
                  facturés au devis/contrat.
                </p>
              </section>

              {/* 3. Devis - validité - réservation */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  3. Devis, validité et réservation
                </h2>

                <p>
                  <strong>3.1 — Validité du devis :</strong> sauf mention
                  contraire, le devis est valable{" "}
                  <strong>7 jours calendaires</strong> à compter de sa date
                  d’émission. Passé ce délai, les prix, disponibilités et
                  conditions peuvent être modifiés.
                </p>

                <p className="mt-2">
                  <strong>3.2 — Réservation / disponibilité :</strong> la date,
                  la prestation et/ou les articles ne sont{" "}
                  <strong>pas réservés</strong> tant que la commande n’est pas
                  confirmée conformément à l’article 4 (signature + acompte /
                  paiement). Sans acompte/paiement, ADEVENEMENT ne garantit pas
                  la disponibilité de la date, des équipes, ni du matériel.
                </p>
              </section>

              {/* 4. Commande - formation du contrat */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  4. Commande et formation du contrat
                </h2>
                <p>La commande est ferme et définitive uniquement après :</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Signature du devis et/ou du contrat</li>
                  <li>
                    Versement de l’acompte (ou paiement total selon le montant)
                  </li>
                  <li>Le cas échéant, remise d’une caution (article 6)</li>
                </ul>
                <p className="mt-2">
                  ADEVENEMENT peut refuser une commande en cas de litige
                  antérieur, d’impayé, d’informations incomplètes, ou
                  d’impossibilité logistique.
                </p>
              </section>

              {/* 5. Prix - acompte - solde J-14 - défaut */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  5. Prix, acompte, solde et défaut de paiement
                </h2>

                <p>
                  <strong>5.1 — Prix :</strong> les prix sont indiqués sur le
                  devis/contrat (en euros TTC sauf mention contraire).
                </p>

                <p className="mt-2">
                  <strong>5.2 — Acompte à la signature :</strong> la signature
                  du devis doit être accompagnée du versement de l’acompte (ou
                  du paiement total) afin de{" "}
                  <strong>
                    garantir la disponibilité de la date, des équipes et/ou du
                    matériel
                  </strong>
                  . À défaut, la date et les articles peuvent être attribués à
                  un autre client.
                </p>

                <p className="mt-2">
                  <strong>5.3 — Solde obligatoire à J-14 :</strong> le{" "}
                  <strong>
                    solde de la facture doit être réglé au plus tard 14 jours
                    avant la date de l’événement
                  </strong>
                  . (Sauf accord écrit différent.)
                </p>

                <p className="mt-2">
                  <strong>5.4 — Défaut ou retard de paiement :</strong> en
                  l’absence de règlement intégral du solde à J-14, ADEVENEMENT
                  se réserve le droit, selon la situation :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>de suspendre la préparation et/ou la logistique</li>
                  <li>
                    de ne pas garantir la prestation et/ou la disponibilité du
                    matériel
                  </li>
                  <li>
                    d’annuler la commande aux torts du Client (conditions
                    d’annulation applicables)
                  </li>
                  <li>
                    d’appliquer des frais/pénalités raisonnables liés à la
                    réorganisation (logistique, stockage, personnel)
                  </li>
                </ul>

                <p className="mt-2">
                  <strong>5.5 — Modes de paiement :</strong> virement bancaire,
                  paiement en ligne (si proposé), ou tout autre mode précisé sur
                  la facture.
                </p>
              </section>

              {/* 6. Caution */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">6. Caution</h2>
                <p>
                  Une <strong>caution</strong> peut être demandée, notamment en
                  cas de location de matériel et/ou prestation incluant
                  décoration. Elle couvre les pertes, casses, dégradations,
                  vols, retards de restitution ou frais additionnels. La caution
                  est restituée après contrôle du matériel et règlement des
                  sommes éventuellement dues.
                </p>
              </section>

              {/* 7. Annulation - report */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  7. Annulation et report
                </h2>

                <p>
                  <strong>7.1 — Annulation par le Client :</strong> toute
                  annulation doit être notifiée par écrit (email) et confirmée
                  par ADEVENEMENT.
                </p>

                <p className="mt-2">
                  <strong>7.2 — Acompte / frais d’annulation / avoir :</strong>{" "}
                  l’acompte versé rémunère la réservation et la mobilisation
                  (date, planning, préparation, blocage du matériel). En cas
                  d’annulation, un avoir peut être proposé selon les conditions
                  prévues au devis/contrat et selon le délai restant avant
                  l’événement.
                </p>

                <p className="mt-2">
                  <strong>7.3 — Report :</strong> un report peut être accepté
                  selon disponibilités. Des frais de replanification peuvent
                  s’appliquer (logistique, stockage, indisponibilités).
                  Confirmation écrite obligatoire.
                </p>

                <p className="mt-2">
                  <strong>7.4 — Annulation pour défaut de paiement :</strong> si
                  le solde n’est pas réglé à J-14, ADEVENEMENT peut annuler la
                  prestation (article 5.4) et ne peut garantir un report.
                </p>
              </section>

              {/* 8. Exécution - obligations client */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  8. Exécution de la prestation et obligations du Client
                </h2>
                <p>
                  Le Client s’engage à fournir des informations exactes
                  (adresse, horaires, contraintes du lieu) et à garantir l’accès
                  au site pour la livraison/installation/démontage si inclus.
                  Tout empêchement, retard, ou contrainte non communiquée peut
                  entraîner une exécution partielle et/ou des frais
                  supplémentaires.
                </p>
              </section>

              {/* 9. Matériel - responsabilité */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  9. Matériel : état, responsabilité, casse/vol/dégradation
                </h2>

                <p>
                  Le matériel est remis en bon état. Le Client est responsable
                  du matériel pendant toute la durée de la location, y compris
                  en cas d’utilisation par des tiers.
                </p>

                <p className="mt-2">
                  En cas de perte, vol, casse ou dégradation, ADEVENEMENT pourra
                  facturer la réparation ou le remplacement à valeur de
                  remplacement, ainsi que les frais de nettoyage ou remise en
                  état.
                </p>
              </section>

              {/* 10. Restitution - pénalités */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  10. Restitution du matériel et pénalités
                </h2>
                <p>
                  Le matériel doit être restitué complet, propre et en bon état
                  à la date convenue. En cas de retard de restitution, des
                  pénalités peuvent s’appliquer (montant précisé au
                  devis/contrat ou, à défaut, facturation du préjudice réel +
                  frais de relogistique).
                </p>
              </section>

              {/* 11. Force majeure */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  11. Force majeure
                </h2>
                <p>
                  Aucune des parties ne pourra être tenue responsable en cas de
                  force majeure (intempéries, grève, interdiction d’accès,
                  sinistre, etc.). Les parties rechercheront une solution
                  amiable (report, avoir, adaptation) selon les circonstances.
                </p>
              </section>

              {/* 12. Responsabilité */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  12. Limitations de responsabilité
                </h2>
                <p>
                  ADEVENEMENT ne pourra être tenue responsable des dommages
                  indirects. La responsabilité d’ADEVENEMENT est limitée aux
                  sommes effectivement payées au titre de la commande, sauf
                  dispositions légales impératives.
                </p>
              </section>

              {/* 13. Données personnelles */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  13. Données personnelles (RGPD)
                </h2>
                <p>
                  Les données personnelles sont utilisées pour la gestion des
                  demandes, devis, commandes et facturation. Le Client dispose
                  de droits d’accès, rectification, suppression et opposition en
                  écrivant à <strong>contact@adevenement.fr</strong>.
                </p>
              </section>

              {/* 14. Droit applicable - litiges */}
              <section>
                <h2 className="text-xl font-bold text-navy mb-3">
                  14. Droit applicable et litiges
                </h2>
                <p>
                  Les CGV sont soumises au droit français. En cas de litige, les
                  parties rechercheront une solution amiable. À défaut, le
                  tribunal compétent sera celui du siège social d’ADEVENEMENT,
                  sauf dispositions légales impératives contraires.
                </p>
              </section>

              <section className="pt-2">
                <p className="text-sm text-gray-500">
                  Dernière mise à jour :{" "}
                  {new Date().toLocaleDateString("fr-FR")}
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
