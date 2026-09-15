// Pied de page du site vitrine, identique sur toutes les pages.
import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { getSiteContact } from '../../../infrastructure/data/site-contact.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, TranslocoPipe],
  template: `
    <footer class="footer">
      <div class="footer__top">
        <div>
          <nav class="footer__nav">
            <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">{{ 'common.nav.home' | transloco }}</a>
            <a routerLink="/services" routerLinkActive="is-active">{{ 'common.nav.services' | transloco }}</a>
            <a routerLink="/a-propos" routerLinkActive="is-active">{{ 'common.nav.about' | transloco }}</a>
          </nav>
          <p class="footer__about">{{ 'common.footerAbout' | transloco }}</p>
        </div>

        <div class="footer__contact">
          @if (contact().phone1) { <div>{{ contact().phone1 }}</div> }
          @if (contact().phone2) { <div>{{ contact().phone2 }}</div> }
          @if (contact().phone3) { <div>{{ contact().phone3 }}</div> }
          <div class="footer__handle">&#64;ATHL</div>
        </div>

        <div class="footer__right">
          <nav class="footer__nav">
            <a routerLink="/projets" routerLinkActive="is-active">{{ 'common.nav.projects' | transloco }}</a>
            <a routerLink="/carrieres" routerLinkActive="is-active">{{ 'common.nav.careers' | transloco }}</a>
            <a routerLink="/contact" routerLinkActive="is-active">{{ 'common.nav.contact' | transloco }}</a>
            <a routerLink="/devis" routerLinkActive="is-active">{{ 'common.nav.quote' | transloco }}</a>
          </nav>
          <div class="socials">
            @if (contact().facebookUrl) {
              <a [href]="contact().facebookUrl!" target="_blank" rel="noopener" aria-label="Facebook">f</a>
            } @else {
              <a routerLink="/contact" aria-label="Facebook">f</a>
            }
            @if (contact().youtubeUrl) {
              <a [href]="contact().youtubeUrl!" target="_blank" rel="noopener" aria-label="YouTube">&#9658;</a>
            } @else {
              <a routerLink="/contact" aria-label="YouTube">&#9658;</a>
            }
            @if (contact().instagramUrl) {
              <a [href]="contact().instagramUrl!" target="_blank" rel="noopener" aria-label="Instagram">&#9906;</a>
            } @else {
              <a routerLink="/contact" aria-label="Instagram">&#9906;</a>
            }
            @if (contact().linkedinUrl) {
              <a [href]="contact().linkedinUrl!" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            } @else {
              <a routerLink="/contact" aria-label="LinkedIn">in</a>
            }
          </div>
        </div>
      </div>

      <div class="wordmark">ATHL</div>
    </footer>
  `,
})
export class FooterComponent {
  readonly contact = computed(() => getSiteContact());
}
