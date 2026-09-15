// Source de données des coordonnées du site (footer + page Contact), branchée sur l'API backend.
// Chargée une fois au démarrage (voir core/initializers) et mise en cache dans un signal.
import { signal } from '@angular/core';
import { SiteContactApiDto } from '../api/site-contact.api';

const FALLBACK: SiteContactApiDto = {
  phone1: '+225 07 78 09 58 58',
  phone2: '+225 07 09 99 33 47',
  phone3: '+225 07 58 60 16 27',
  address: "Abidjan, Côte d'Ivoire",
  facebookUrl: null,
  youtubeUrl: null,
  instagramUrl: null,
  linkedinUrl: null,
};

const SITE_CONTACT = signal<SiteContactApiDto>(FALLBACK);

export function setSiteContact(contact: SiteContactApiDto | null): void {
  SITE_CONTACT.set(contact ?? FALLBACK);
}

export function getSiteContact(): SiteContactApiDto {
  return SITE_CONTACT();
}
