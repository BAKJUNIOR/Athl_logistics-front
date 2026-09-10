// Pied de page du site vitrine, identique sur toutes les pages.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer__top">
        <div>
          <nav class="footer__nav">
            <a routerLink="/">Accueil</a>
            <a routerLink="/services">Services</a>
            <a routerLink="/a-propos">À propos</a>
          </nav>
          <p class="footer__about">
            Africa Talent Habitat &amp; Logistique — construction, rénovation, mobilité et importation
            de matériaux, portées par des équipes qualifiées.
          </p>
        </div>

        <div class="footer__contact">
          <div>+225 07 78 09 58 58</div>
          <div>+225 07 09 99 33 47</div>
          <div>+225 07 58 60 16 27</div>
          <div class="footer__handle">&#64;ATHL</div>
        </div>

        <div class="footer__right">
          <nav class="footer__nav">
            <a routerLink="/projets">Projets</a>
            <a routerLink="/carrieres">Carrières</a>
            <a routerLink="/contact">Contact</a>
            <a routerLink="/devis">Devis</a>
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
