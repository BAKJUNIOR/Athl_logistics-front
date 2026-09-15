// Source de données statique pour le domaine "Popup".
// À remplacer par infrastructure/api/popup.api.ts le jour où ces contenus seront pilotés par le back-office :
// le BO enregistrera ces mêmes champs (page cible, type, actif/inactif, contenu...), le front se contentera
// de lire "y a-t-il une popup active pour cette page ?" et de l'afficher telle quelle, sans aucun choix visiteur.
import { Popup } from '../../domain/popup.entity';

const POPUPS: Popup[] = [
  {
    id: 'newsletter-accueil',
    page: '',
    active: true,
    type: 'image_text',
    layout: 'image_left',
    frequency: 'once_per_visitor',
    delayMs: 1200,
    eyebrow: 'Nouveau chez ATHL',
    title: 'Soyez informé de nos nouveaux services',
    text: "Inscrivez-vous pour recevoir nos actualités, nos nouvelles offres et l'avancement de nos grands chantiers, directement par e-mail.",
    image: 'images/proj-1.png',
    collectEmail: true,
    ctaLabel: "S'inscrire",
    updatedAt: '2026-09-10T09:00:00Z',
  },
  // Ancienne campagne, aussi ciblée sur l'accueil et toujours marquée "active" — laissée volontairement en
  // exemple pour montrer que si 2 popups actives se chevauchent sur une même page, le front affiche la plus
  // récente (updatedAt) plutôt qu'un résultat imprévisible. Le BO devra normalement empêcher ce cas en amont.
  {
    id: 'offre-rentree-2025',
    page: '',
    active: true,
    type: 'image',
    layout: 'stacked',
    frequency: 'once_per_visitor',
    delayMs: 1200,
    title: 'Offre de rentrée — devis gratuit',
    image: 'images/proj-4.png',
    collectEmail: false,
    ctaLabel: 'Demander un devis',
    updatedAt: '2025-09-01T09:00:00Z',
  },
  // Exemple de popup existante mais désactivée depuis le BO : elle ne s'affichera nulle part tant que
  // "active" n'est pas repassé à true — c'est le cas "désactiver selon l'opportunité ou l'urgence" décrit par le client.
  {
    id: 'offre-services',
    page: 'services',
    active: false,
    type: 'image',
    layout: 'stacked',
    frequency: 'every_visit',
    delayMs: 800,
    title: 'Offre spéciale importation de matériaux',
    image: 'images/svc-4.png',
    collectEmail: false,
    ctaLabel: 'Demander un devis',
    updatedAt: '2026-09-05T09:00:00Z',
  },
  // Page Carrières : recrutement en cours, type vidéo.
  {
    id: 'recrutement-carrieres',
    page: 'carrieres',
    active: true,
    type: 'video',
    layout: 'stacked',
    frequency: 'once_per_visitor',
    delayMs: 1000,
    eyebrow: 'On recrute',
    title: 'Découvrez la vie chez ATHL en vidéo',
    image: 'images/team-lead.png',
    collectEmail: false,
    ctaLabel: 'Voir les offres',
    ctaUrl: '/carrieres',
    updatedAt: '2026-09-08T09:00:00Z',
  },
  // Page Projets : mise en avant d'une réalisation phare, type image seule (overlay).
  {
    id: 'chantier-phare-projets',
    page: 'projets',
    active: true,
    type: 'image',
    layout: 'stacked',
    frequency: 'every_visit',
    delayMs: 900,
    title: 'Notre plus grand chantier livré cette année',
    image: 'images/proj-5.png',
    collectEmail: false,
    ctaLabel: 'Voir nos réalisations',
    ctaUrl: '/projets',
    updatedAt: '2026-09-12T09:00:00Z',
  },
];

export function getPopupForPage(page: string): Popup | undefined {
  return POPUPS.filter((p) => p.page === page && p.active).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  )[0];
}
