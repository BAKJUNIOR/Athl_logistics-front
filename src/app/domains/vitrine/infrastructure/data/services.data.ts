// Source de données statique pour le domaine "Service", en français et en anglais.
// À remplacer par infrastructure/api/service.api.ts le jour où ces contenus seront pilotés par un back-office.
import { Service } from '../../domain/service.entity';
import { Lang } from '../../../../core/services/language.service';

const SERVICES_FR: Service[] = [
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

const SERVICES_EN: Service[] = [
  {
    slug: 'construction',
    number: '01',
    title: 'Construction project delivery',
    shortTitle: 'Construction project delivery',
    lead: 'From design to finishing: studies and costing, structural works, second fix, finishing and handover. One single point of contact from the first drawing to the keys.',
    image: 'images/svc-1.png',
    heroImage: 'images/svc-1.png',
    prestations: [
      { title: 'Studies & costing', description: 'Site surveys, feasibility, execution drawings and a detailed line-by-line quote.' },
      { title: 'Structural works', description: 'Foundations, reinforced concrete structure, elevations and slabs as per calculation notes.' },
      { title: 'Second fix', description: 'Partitions, plumbing, electrics, joinery and finishes.' },
      { title: 'Finishing & handover', description: 'Painting, fittings, final cleaning and snag list clearance.' },
    ],
    process: [
      { number: '01', title: 'Site visit & scoping', description: 'We visit the site to understand the brief and its constraints.' },
      { number: '02', title: 'Detailed quote', description: 'Line-by-line costing, with a provisional schedule and payment milestones.' },
      { number: '03', title: 'Supervised execution', description: 'A dedicated site manager, regular reporting and quality control at every phase.' },
      { number: '04', title: 'Handover', description: 'Joint inspection, snag list clearance and delivery of the as-built file.' },
    ],
    gallery: ['images/proj-1.png', 'images/proj-4.png', 'images/proj-2.png'],
  },
  {
    slug: 'renovation',
    number: '02',
    title: 'Renovation & fit-out',
    shortTitle: 'Renovation & fit-out',
    lead: 'Refurbishment of existing buildings, structural repairs, interior and exterior fit-out — organised to keep your business running.',
    image: 'images/svc-2.png',
    heroImage: 'images/svc-2.png',
    prestations: [
      { title: 'Diagnostics', description: 'Structural, utilities and moisture survey before any work starts.' },
      { title: 'Structural repairs', description: 'Reinforcement, openings in load-bearing walls, floor and roof frame repairs.' },
      { title: 'Interior fit-out', description: 'Space redistribution, kitchens, bathrooms, joinery and lighting.' },
      { title: 'Exteriors', description: 'Facades, terraces, fencing, pools and landscaping.' },
    ],
    process: [
      { number: '01', title: 'On-site diagnostics', description: 'We identify what can be kept and what needs to be redone.' },
      { number: '02', title: 'Costed scenarios', description: 'Several levels of intervention, costed so you can decide based on your budget.' },
      { number: '03', title: 'Phased works', description: 'We work zone by zone to keep your premises usable.' },
      { number: '04', title: 'Clean handover', description: 'Full clean-up and a warranty on the completed works.' },
    ],
    gallery: ['images/hero-2.png', 'images/team-group.png', 'images/proj-3.png'],
  },
  {
    slug: 'mobilite',
    number: '03',
    title: 'Ride-hailing, mobility & delivery',
    shortTitle: 'Ride-hailing, mobility & delivery',
    lead: 'Chauffeured transport, corporate shuttles and urban delivery. A tracked fleet and drivers trained in customer service.',
    image: 'images/svc-3.png',
    heroImage: 'images/svc-3.png',
    prestations: [
      { title: 'On-demand rides', description: 'One-off trips, airport transfers and hourly hire.' },
      { title: 'Corporate shuttles', description: 'Staff pick-up on fixed routes, with punctuality tracking.' },
      { title: 'Urban delivery', description: 'Parcels, documents and light materials within announced time slots.' },
      { title: 'Vehicle hire', description: 'Dedicated vehicle and driver by the day, week or month.' },
    ],
    process: [
      { number: '01', title: 'Your need', description: 'Routes, volumes, frequencies and time slots: we scope the expected service.' },
      { number: '02', title: 'Proposal', description: 'Per-trip, flat-rate or monthly contract pricing.' },
      { number: '03', title: 'Roll-out', description: 'Driver assignment, briefing and a trial on the first routes.' },
      { number: '04', title: 'Follow-up', description: 'Regular review of punctuality, incidents and route changes.' },
    ],
    gallery: ['images/hero-3.png', 'images/proj-5.png', 'images/svc-3.png'],
  },
  {
    slug: 'import',
    number: '04',
    title: 'Import of construction materials',
    shortTitle: 'Import of materials',
    lead: 'Sourcing and import from China, India and Turkey: tiling, marble, joinery, steel profiles. Quality control and delivery to the construction site.',
    image: 'images/svc-4.png',
    heroImage: 'images/svc-4.png',
    prestations: [
      { title: 'Sourcing', description: 'Identifying factories, samples and price negotiation at origin.' },
      { title: 'Quality control', description: 'Pre-shipment inspection: references, quantities, packaging.' },
      { title: 'Freight & customs', description: 'Documentation, incoterms, customs clearance and forwarder follow-up.' },
      { title: 'Site delivery', description: 'Port reception, storage if needed and delivery as the site requires.' },
    ],
    process: [
      { number: '01', title: 'Specification', description: 'References, quantities, expected quality and lead times.' },
      { number: '02', title: 'Delivered quote', description: 'One all-in price: goods, freight, customs and local transport.' },
      { number: '03', title: 'Production & control', description: 'Manufacturing follow-up and pre-shipment inspection.' },
      { number: '04', title: 'Reception', description: 'Customs clearance, arrival inspection and on-site delivery.' },
    ],
    gallery: ['images/proj-5.png', 'images/svc-4.png', 'images/proj-2.png'],
  },
];

const SERVICES_BY_LANG: Record<Lang, Service[]> = { fr: SERVICES_FR, en: SERVICES_EN };

export function getServices(lang: Lang): Service[] {
  return SERVICES_BY_LANG[lang];
}

export function findServiceBySlug(slug: string, lang: Lang): Service | undefined {
  return getServices(lang).find((service) => service.slug === slug);
}

export function nextService(slug: string, lang: Lang): Service {
  const services = getServices(lang);
  const index = services.findIndex((service) => service.slug === slug);
  return services[(index + 1) % services.length];
}
