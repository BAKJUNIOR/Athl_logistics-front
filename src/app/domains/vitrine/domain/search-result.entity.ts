// Entité métier "SearchResult" : une entrée indexée pour la recherche interne du site.

export type SearchCategory = 'Page' | 'Service' | 'Équipe' | 'Emploi';

export interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  fragment?: string;
  category: SearchCategory;
}
