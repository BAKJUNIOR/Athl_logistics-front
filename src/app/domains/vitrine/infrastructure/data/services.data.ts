// Source de données statique pour le domaine "Service".
// À remplacer par infrastructure/api/service.api.ts le jour où ces contenus seront pilotés par un back-office.
import { Service } from '../../domain/service.entity';

export const SERVICES: Service[] = [
  {
    slug: 'construction',
    number: '01',
    title: 'Réalisation de projets de construction',
    shortTitle: 'Réalisation de projets de construction',
    lead: 'De l’étude à la finition : études et chiffrage, gros œuvre, second œuvre, finitions et réception. Un interlocuteur unique du premier plan à la remise des clés.',
    image: 'images/svc-1.png',
    heroImage: 'images/svc-1.png',
    prestations: [
      { title: 'Études & chiffrage', description: 'Relevés, faisabilité, plans d’exécution et devis détaillé poste par poste.' },
      { title: 'Gros œuvre', description: 'Fondations, structure béton armé, élévations et dalles selon notes de calcul.' },
      { title: 'Second œuvre', description: 'Cloisons, plomberie, électricité, menuiseries et revêtements.' },
      { title: 'Finitions & réception', description: 'Peinture, appareillages, nettoyage de livraison et lever des réserves.' },
    ],
    process: [
      { number: '01', title: 'Visite & cadrage', description: 'Nous nous déplaçons sur le terrain pour comprendre le programme et les contraintes.' },
      { number: '02', title: 'Devis détaillé', description: 'Un chiffrage poste par poste, avec planning prévisionnel et jalons de paiement.' },
      { number: '03', title: 'Exécution encadrée', description: 'Un chef de chantier dédié, un reporting régulier et un contrôle qualité à chaque phase.' },
      { number: '04', title: 'Réception', description: 'Visite contradictoire, lever des réserves et remise du dossier des ouvrages exécutés.' },
    ],
    gallery: ['images/proj-1.png', 'images/proj-4.png', 'images/proj-2.png'],
  },
  {
    slug: 'renovation',
    number: '02',
    title: 'Rénovation & aménagement',
    shortTitle: 'Rénovation & aménagement',
    lead: 'Réhabilitation de bâtiments existants, reprises structurelles, aménagement intérieur et extérieur — sans interrompre votre activité.',
    image: 'images/svc-2.png',
    heroImage: 'images/svc-2.png',
    prestations: [
      { title: 'Diagnostic', description: 'État des lieux structurel, réseaux et humidité avant toute intervention.' },
      { title: 'Reprises structurelles', description: 'Renforcement, ouvertures en murs porteurs, reprise de planchers et de charpentes.' },
      { title: 'Aménagement intérieur', description: 'Redistribution des espaces, cuisines, salles d’eau, menuiseries et éclairage.' },
      { title: 'Extérieurs', description: 'Façades, terrasses, clôtures, piscines et espaces verts.' },
    ],
    process: [
      { number: '01', title: 'Diagnostic sur site', description: 'Nous identifions ce qui peut être conservé et ce qui doit être repris.' },
      { number: '02', title: 'Scénarios chiffrés', description: 'Plusieurs niveaux d’intervention chiffrés pour arbitrer selon votre budget.' },
      { number: '03', title: 'Chantier par zones', description: 'Nous travaillons par phases pour maintenir vos locaux utilisables.' },
      { number: '04', title: 'Livraison propre', description: 'Remise en état, nettoyage complet et garantie sur les ouvrages réalisés.' },
    ],
    gallery: ['images/hero-2.png', 'images/team-group.png', 'images/proj-3.png'],
  },
  {
    slug: 'mobilite',
    number: '03',
    title: 'VTC, mobilité & livraison',
    shortTitle: 'VTC, mobilité & livraison',
    lead: 'Transport de personnes avec chauffeur, navettes d’entreprise et livraison urbaine. Une flotte suivie et des chauffeurs formés.',
    image: 'images/svc-3.png',
    heroImage: 'images/svc-3.png',
    prestations: [
      { title: 'VTC à la demande', description: 'Courses ponctuelles, transferts aéroport et mises à disposition à l’heure.' },
      { title: 'Navettes d’entreprise', description: 'Ramassage du personnel sur circuits fixes, avec suivi de ponctualité.' },
      { title: 'Livraison urbaine', description: 'Colis, plis et matériaux légers dans des créneaux annoncés.' },
      { title: 'Mise à disposition', description: 'Véhicule et chauffeur dédiés à la journée, à la semaine ou au mois.' },
    ],
    process: [
      { number: '01', title: 'Votre besoin', description: 'Trajets, volumes, fréquences et créneaux : nous cadrons le service attendu.' },
      { number: '02', title: 'Proposition', description: 'Tarification à la course, au forfait ou au contrat mensuel.' },
      { number: '03', title: 'Mise en route', description: 'Affectation des chauffeurs, briefing et test sur les premiers trajets.' },
      { number: '04', title: 'Suivi', description: 'Point régulier sur la ponctualité, les incidents et les évolutions de circuit.' },
    ],
    gallery: ['images/hero-3.png', 'images/proj-5.png', 'images/svc-3.png'],
  },
  {
    slug: 'import',
    number: '04',
    title: 'Importation de matériaux de construction',
    shortTitle: 'Importation de matériaux',
    lead: 'Sourcing et importation depuis la Chine, l’Inde et la Turquie : carrelage, marbre, menuiserie, profilés acier. Contrôle qualité et acheminement jusqu’au chantier.',
    image: 'images/svc-4.png',
    heroImage: 'images/svc-4.png',
    prestations: [
      { title: 'Sourcing', description: 'Identification des usines, échantillons et négociation des prix au départ.' },
      { title: 'Contrôle qualité', description: 'Vérification avant embarquement : références, quantités, conditionnement.' },
      { title: 'Transit & douane', description: 'Documentation, incoterms, dédouanement et suivi du transitaire.' },
      { title: 'Livraison chantier', description: 'Réception au port, stockage si besoin et acheminement au fur et à mesure des besoins.' },
    ],
    process: [
      { number: '01', title: 'Cahier des charges', description: 'Références, quantités, qualité attendue et délais de mise à disposition.' },
      { number: '02', title: 'Devis rendu chantier', description: 'Un prix tout compris : marchandise, fret, douane et transport local.' },
      { number: '03', title: 'Production & contrôle', description: 'Suivi de fabrication et contrôle avant embarquement.' },
      { number: '04', title: 'Réception', description: 'Dédouanement, contrôle à l’arrivée et livraison sur site.' },
    ],
    gallery: ['images/proj-5.png', 'images/svc-4.png', 'images/proj-2.png'],
  },
];

export function findServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function nextService(slug: string): Service {
  const index = SERVICES.findIndex((service) => service.slug === slug);
  return SERVICES[(index + 1) % SERVICES.length];
}
