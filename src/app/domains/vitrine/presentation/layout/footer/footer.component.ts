// Pied de page du site vitrine, identique sur toutes les pages.
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

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
          <div>+225 07 78 09 58 58</div>
          <div>+225 07 09 99 33 47</div>
          <div>+225 07 58 60 16 27</div>
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
            <a routerLink="/contact" aria-label="Facebook">f</a>
            <a routerLink="/contact" aria-label="YouTube">&#9658;</a>
            <a routerLink="/contact" aria-label="Instagram">&#9906;</a>
            <a routerLink="/contact" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      <div class="wordmark">ATHL</div>
    </footer>
  `,
})
export class FooterComponent {}
