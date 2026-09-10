// Source de données statique pour le domaine "Testimonial".
import { Testimonial } from '../../domain/testimonial.entity';

export const TESTIMONIALS: Testimonial[] = [
  {
    photo: 'images/team-dg.jpg',
    initials: 'EN',
    text: '« De la première visite à la livraison, tout était documenté et dans le budget. Les équipes ont traité le chantier comme le leur. »',
    name: 'Emmanuel N’GUESSAN,',
    role: 'Directeur Général Group',
  },
  {
    photo: 'images/team-comm.jpg',
    initials: 'BC',
    text: '« L’équipe a dépassé nos attentes à chaque étape. Communication claire, planning respecté, et un bâtiment dont nos équipes sont fières. »',
    name: 'Beugré Alain Cédric,',
    role: 'Responsable Communication Group',
  },
  {
    photo: 'images/team-admin.jpg',
    initials: 'ET',
    text: '« ATHL a mené une rénovation complexe avec professionnalisme et précision. Leur souci du détail et leur culture sécurité font vraiment la différence. »',
    name: 'Elisabeth TUO,',
    role: 'Responsable Administrative et Comptable Group',
  },
  {
    photo: 'images/proj-4.png',
    initials: 'BO',
    text: '« Ils ont résolu des problèmes structurels que nous subissions depuis des années, sans jamais interrompre notre activité. Un partenaire rare. »',
    name: 'Ben Okafor,',
    role: 'Propriétaire',
  },
];
