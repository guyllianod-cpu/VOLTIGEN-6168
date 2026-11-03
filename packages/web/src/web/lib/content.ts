type ArticleContent = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  icon: string;
  sections: { title: string; text: string }[];
  source?: string;
  sourceLabel?: string;
  applicationContent?: {
    paragraphs: string[];
    domains: { label: string; text: string }[];
    conclusion: string;
  };
};

export const articles: ArticleContent[] = [
  {
    slug: "batteries-plusieurs-applications",
    category: "NOS APPLICATIONS",
    title: "Des batteries conçues pour plusieurs applications",
    excerpt: "Une batterie ne répond pas aux mêmes exigences selon son utilisation.",
    time: "1 min",
    icon: "factory",
    sections: [],
    applicationContent: {
      paragraphs: [
        "Une batterie ne répond pas aux mêmes exigences selon son utilisation.",
        "Les besoins d’un véhicule automobile diffèrent de ceux d’une installation industrielle ou d’un système de stockage d’énergie renouvelable.",
        "VOLTIGEN ENERGY GROUPE développe son approche autour de plusieurs domaines :",
      ],
      domains: [
        {
          label: "🚗 Automobile",
          text: "alimentation et stockage pour différents types de véhicules.",
        },
        {
          label: "🏭 Industrie",
          text: "solutions destinées aux équipements et installations nécessitant une alimentation fiable.",
        },
        {
          label: "⚡ Stockage d’énergie",
          text: "solutions permettant de stocker l’électricité pour une utilisation ultérieure.",
        },
        {
          label: "🌱 Énergies renouvelables",
          text: "intégration des batteries aux systèmes solaires et autres sources d’énergie renouvelable.",
        },
      ],
      conclusion:
        "Cette diversité nous permet de concevoir nos solutions en fonction des contraintes propres à chaque application.",
    },
  },
  {
    slug: "comprendre-les-accumulateurs",
    category: "LES FONDAMENTAUX",
    title: "Batteries et accumulateurs : comprendre l’essentiel.",
    excerpt:
      "Stocker, restituer, recharger. Les principes qui se cachent derrière notre énergie du quotidien.",
    time: "3 min",
    icon: "battery",
    sections: [
      {
        title: "L’énergie, disponible autrement",
        text: "Une batterie stocke de l’énergie sous forme électrochimique. Elle permet de restituer de l’électricité lorsque l’équipement en a besoin. Un accumulateur est rechargeable : il peut être utilisé sur plusieurs cycles de charge et de décharge, selon sa technologie et ses conditions d’utilisation.",
      },
      {
        title: "Ne pas confondre énergie et puissance",
        text: "L’énergie décrit une quantité disponible ; la puissance décrit le rythme auquel elle est utilisée ou fournie. Pour comprendre une fiche technique, il faut donc regarder plusieurs caractéristiques ensemble, et non une seule valeur isolée.",
      },
      {
        title: "Une solution dépend de son usage",
        text: "Le choix dépend du fonctionnement de l’équipement, de son environnement, du système de charge et des exigences de sécurité. Les limites de température, les consignes de charge et les règles de manipulation doivent être vérifiées dans la documentation du fabricant.",
      },
      {
        title: "Penser aussi à la fin de vie",
        text: "Une batterie usagée ne doit pas être jetée avec les déchets ordinaires. Elle doit rejoindre une filière de collecte adaptée. Les modalités exactes dépendent du type de batterie et du pays concerné.",
      },
    ],
    source: "https://filieres-rep.ademe.fr/filieres-REP/filiere-BAT",
    sourceLabel: "ADEME — Filière batteries",
  },
  {
    slug: "preparer-son-projet-batterie",
    category: "GUIDE PRATIQUE",
    title: "Les bonnes questions avant de choisir une batterie.",
    excerpt:
      "Usage, autonomie, environnement : partez du besoin pour construire un cahier des charges clair.",
    time: "3 min",
    icon: "sun",
    sections: [
      {
        title: "Commencer par l’équipement",
        text: "Quel système doit être alimenté ? Quelle tension attend-il ? Fonctionne-t-il en continu ou par intermittence ? Réunissez la documentation et les contraintes de l’équipement avant de comparer des solutions.",
      },
      {
        title: "Décrire le besoin réel",
        text: "Précisez la durée de fonctionnement souhaitée, les périodes de recharge et les éventuels pics de demande. Un besoin de stockage doit être évalué dans son contexte : la capacité annoncée ne suffit pas à garantir une autonomie donnée.",
      },
      {
        title: "Documenter l’environnement",
        text: "Indiquez les températures prévues, l’espace disponible, les contraintes de poids et les conditions d’installation. La compatibilité avec le chargeur et les protections doit être vérifiée par une personne qualifiée.",
      },
      {
        title: "Préparer un échange technique",
        text: "Un dossier utile rassemble l’usage, les caractéristiques de l’équipement, les contraintes d’installation, les objectifs et les questions de maintenance. Ces informations facilitent une discussion sans présumer d’une gamme ou d’une performance particulière.",
      },
    ],
    source:
      "https://www.ademe.fr/presse/communique-national/lademe-publie-deux-avis-dexperts-la-flexibilite-du-systeme-electrique-et-le-stockage-dans-la-transition-energetique/",
    sourceLabel: "ADEME — Le stockage dans la transition énergétique",
  },
];
