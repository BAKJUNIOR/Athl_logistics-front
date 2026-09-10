// En-tête du site vitrine : logo, navigation, bouton devis (ouvre la modal) et menu mobile.
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <a class="logo" routerLink="/">
        <img src="images/logo-athl.png" alt="ATHL — Africa Talent Habitat &amp; Logistique" />
      </a>

      <nav class="nav">
        <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
        <a routerLink="/equipe" routerLinkActive="is-active">Nos équipes</a>
        <a routerLink="/projets" routerLinkActive="is-active">Projets</a>
        <a routerLink="/services" routerLinkActive="is-active">Services</a>
        <a routerLink="/carrieres" routerLinkActive="is-active">Carrières</a>
        <a routerLink="/a-propos" routerLinkActive="is-active">À propos</a>
      </nav>

      <div class="header__actions">
        <a class="btn btn--light btn--sm" href="/devis" (click)="openQuote($event)">Demander un devis</a>
        <button
          class="burger"
          type="button"
          aria-label="Menu"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-menu"
          (click)="menuOpen.set(!menuOpen())"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <nav class="mobile-menu" id="mobile-menu" [hidden]="!menuOpen()" (click)="menuOpen.set(false)">
      <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
      <a routerLink="/equipe" routerLinkActive="is-active">Nos équipes</a>
      <a routerLink="/projets" routerLinkActive="is-active">Projets</a>
      <a routerLink="/services" routerLinkActive="is-active">Services</a>
      <a routerLink="/carrieres" routerLinkActive="is-active">Carrières</a>
      <a routerLink="/a-propos" routerLinkActive="is-active">À propos</a>
      <a routerLink="/contact">Contact</a>
      <a href="/devis" (click)="openQuote($event)">Demander un devis</a>
    </nav>
  `,
})
export class HeaderComponent {
  private readonly quoteModal = inject(QuoteModalService);

  readonly menuOpen = signal(false);

  openQuote(event: Event): void {
    event.preventDefault();
    this.quoteModal.open();
  }
}
