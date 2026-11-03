import { useEffect } from "react";
import { Link } from "wouter";
import { company } from "../lib/company";
import { WhatsAppLink } from "../components/whatsapp-link";
export default function Legal() {
  const privacy = window.location.pathname === "/confidentialite";
  useEffect(() => {
    document.title = `${privacy ? "Confidentialité" : "Mentions légales"} — VOLTIGEN ENERGY GROUPE`;
    window.scrollTo(0, 0);
  }, [privacy]);
  return (
    <main className="container inner-page legal-page">
      <Link href="/" className="text-link">
        ← Retour à l’accueil
      </Link>
      <span className="eyebrow yellow">BROUILLON À COMPLÉTER AVANT PUBLICATION</span>
      <h1>{privacy ? "Confidentialité" : "Mentions légales"}</h1>
      <div className="draft-notice">
        Ces informations sont provisoires. Les données légales, la zone d’activité et les modalités
        de traitement doivent être validées par l’entreprise avant l’ouverture publique du site et
        de ses formulaires.
      </div>
      {privacy ? (
        <>
          <h2>Données enregistrées</h2>
          <p>
            Les formulaires enregistrent le nom, l’e-mail, l’entreprise si renseignée, l’objet, le
            message et la date d’envoi. Pour une demande de rendez-vous, la date, l’heure souhaitée
            et le fuseau horaire sont également enregistrés. La date du consentement est conservée.
          </p>
          <h2>Finalité et fonctionnement</h2>
          <p>
            Les informations sont destinées à préparer le traitement de la demande par VOLTIGEN
            ENERGY GROUPE. Dans cette version, elles sont sauvegardées dans la base du site ; aucune
            notification e-mail n’est configurée et aucun rendez-vous n’est automatiquement
            confirmé. Aucun accès public aux demandes n’est proposé.
          </p>
          <h2>Éléments à finaliser</h2>
          <p>
            L’identité du responsable de traitement, sa localisation, le contact pour l’exercice des
            droits, la base légale applicable, la durée de conservation, les destinataires, les
            sous-traitants et les éventuels transferts de données restent à préciser. N’envoyez
            aucune donnée sensible dans les formulaires de présentation.
          </p>
          <h2>Contact via WhatsApp</h2>
          <p>
            Les liens WhatsApp ouvrent un service externe après votre clic. Les conditions et la
            politique de confidentialité de WhatsApp s’appliquent à la conversation. Aucun widget
            WhatsApp ni suivi supplémentaire lié à ce service n’est intégré au site.
          </p>
          <h2>Mesure d’audience</h2>
          <p>
            Le site utilise l’intégration de mesure d’audience de la plateforme Runable. Ses
            modalités techniques et les obligations applicables en matière de consentement doivent
            être vérifiées avant publication. Aucune conformité juridique n’est garantie par ce
            brouillon.
          </p>
        </>
      ) : (
        <>
          <h2>Éditeur du site</h2>
          <p>
            Nom de présentation : VOLTIGEN ENERGY GROUPE. Activité déclarée : fabrication de
            batteries électriques d’accumulateurs. La raison sociale complète, la forme juridique,
            le capital, l’immatriculation, le siège, les autres coordonnées et le responsable de
            publication restent à compléter.
          </p>
          <p>Contact WhatsApp fourni : {company.whatsappDisplay}.</p>
          <WhatsAppLink />
          <h2>Hébergement</h2>
          <p>
            Le site est créé sur la plateforme Runable. L’identité légale, l’adresse et les
            coordonnées de l’hébergeur retenu au moment de la publication doivent être renseignées
            ici.
          </p>
          <h2>Contenus et visuels</h2>
          <p>
            Les éléments de marque de présentation et les visuels illustratifs ne prouvent ni une
            gamme de produits ni l’existence d’un site industriel réel. Les droits d’utilisation des
            contenus doivent être validés par l’entreprise.
          </p>
          <h2>Informations commerciales</h2>
          <p>
            Les domaines d’application et les articles sont des contenus de présentation à valider.
            Le portfolio ne contient pas encore de réalisations. Les demandes de rendez-vous sont
            des propositions de date, non des réservations confirmées.
          </p>
        </>
      )}
    </main>
  );
}
