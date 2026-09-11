// Domaines métier utilisés pour filtrer les offres d'emploi (page Carrières).
// La valeur de l'enum sert d'identifiant stable (comparaisons, filtres) ; l'affichage est traduit séparément.
import type { Lang } from '../../../../core/services/language.service';

export enum JobDomain {
  Chantier = 'chantier',
  SecondOeuvre = 'second-oeuvre',
  Mobilite = 'mobilite',
  Logistique = 'logistique',
  Support = 'support',
}

const LABELS: Record<Lang, Record<JobDomain, string>> = {
  fr: {
    [JobDomain.Chantier]: 'Chantier',
    [JobDomain.SecondOeuvre]: 'Second œuvre',
    [JobDomain.Mobilite]: 'Mobilité',
    [JobDomain.Logistique]: 'Logistique',
    [JobDomain.Support]: 'Support',
  },
  en: {
    [JobDomain.Chantier]: 'Construction site',
    [JobDomain.SecondOeuvre]: 'Finishing works',
    [JobDomain.Mobilite]: 'Mobility',
    [JobDomain.Logistique]: 'Logistics',
    [JobDomain.Support]: 'Support',
  },
};

export function jobDomainLabel(domain: JobDomain, lang: Lang): string {
  return LABELS[lang][domain];
}
