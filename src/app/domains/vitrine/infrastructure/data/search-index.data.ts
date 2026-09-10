// Index de recherche statique : agrège le contenu existant (pages, services, équipe, offres d'emploi)
// pour la recherche interne du site. À terme, pourra être remplacé par un vrai back-office indexé.
import { SearchResult } from '../../domain/search-result.entity';
import { SERVICES } from './services.data';
import { TEAM_MEMBERS } from './team.data';
import { JOB_OFFERS } from './jobs.data';

const STATIC_PAGES: SearchResult[] = [
  { title: 'Accueil', excerpt: "L'expertise qui bâtit, la logistique qui accélère.", url: '/', category: 'Page' },
  { title: 'À propos', excerpt: 'Africa Talent Habitat & Logistique : qui nous sommes, nos valeurs.', url: '/a-propos', category: 'Page' },
  { title: 'Nos équipes', excerpt: 'La direction et les équipes terrain ATHL.', url: '/equipe', category: 'Page' },
  { title: 'Projets', excerpt: 'Nos chantiers et réalisations à Abidjan et en Côte d’Ivoire.', url: '/projets', category: 'Page' },
  { title: 'Services', excerpt: 'Construction, rénovation, mobilité et importation de matériaux.', url: '/services', category: 'Page' },
  { title: 'Carrières', excerpt: 'Rejoindre les équipes ATHL : offres et candidature spontanée.', url: '/carrieres', category: 'Page' },
  { title: 'Demander un devis', excerpt: 'Quatre champs suffisent, réponse sous 48 h ouvrées.', url: '/devis', category: 'Page' },
  { title: 'Contact', excerpt: 'Téléphone, adresse et réseaux sociaux ATHL.', url: '/contact', category: 'Page' },
];

const SERVICE_RESULTS: SearchResult[] = SERVICES.map((service) => ({
  title: service.title,
  excerpt: service.lead,
  url: `/services/${service.slug}`,
  category: 'Service',
}));

const TEAM_RESULTS: SearchResult[] = TEAM_MEMBERS.map((member) => ({
  title: member.name,
  excerpt: member.role,
  url: '/equipe',
  category: 'Équipe',
}));

const JOB_RESULTS: SearchResult[] = JOB_OFFERS.map((job) => ({
  title: job.title,
  excerpt: job.description,
  url: '/carrieres',
  fragment: job.id,
  category: 'Emploi',
}));

export const SEARCH_INDEX: SearchResult[] = [
  ...STATIC_PAGES,
  ...SERVICE_RESULTS,
  ...TEAM_RESULTS,
  ...JOB_RESULTS,
];
