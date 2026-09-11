// Source de données statique pour le domaine "TeamMember". Les noms ne sont pas traduits ; les fonctions le sont.
import { TeamMember } from '../../domain/team-member.entity';
import { Lang } from '../../../../core/services/language.service';

const TEAM_MEMBERS_FR: TeamMember[] = [
  { name: 'Emmanuel N’GUESSAN', role: 'Directeur Général Group', photo: 'images/team-dg.jpg' },
  { name: 'Elisabeth TUO', role: 'Responsable Administrative et Comptable Group', photo: 'images/team-admin.jpg' },
  { name: 'Beugré Alain Cédric', role: 'Responsable Communication Group', photo: 'images/team-comm.jpg' },
];

const TEAM_MEMBERS_EN: TeamMember[] = [
  { name: 'Emmanuel N’GUESSAN', role: 'Group Chief Executive Officer', photo: 'images/team-dg.jpg' },
  { name: 'Elisabeth TUO', role: 'Group Administration & Accounting Manager', photo: 'images/team-admin.jpg' },
  { name: 'Beugré Alain Cédric', role: 'Group Communications Manager', photo: 'images/team-comm.jpg' },
];

const TEAM_BY_LANG: Record<Lang, TeamMember[]> = { fr: TEAM_MEMBERS_FR, en: TEAM_MEMBERS_EN };

export function getTeamMembers(lang: Lang): TeamMember[] {
  return TEAM_BY_LANG[lang];
}
