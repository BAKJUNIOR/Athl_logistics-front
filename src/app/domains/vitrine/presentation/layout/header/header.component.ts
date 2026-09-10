// En-tête du site vitrine : logo, navigation, recherche, bouton devis (ouvre la modal), thème clair/sombre et menu mobile.
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuoteModalService } from '../../services/quote-modal.service';
import { ThemeService } from '../../../../../core/services/theme.service';

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
        <a class="icon-btn" routerLink="/recherche" routerLinkActive="is-active" aria-label="Rechercher sur le site">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.2" y2="16.2" />
          </svg>
        </a>
        <button
          class="icon-btn"
          type="button"
          [attr.aria-label]="themeService.theme() === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'"
          (click)="themeService.toggle()"
        >
          @if (themeService.theme() === 'dark') {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
            </svg>
          }
        </button>
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

    <nav class="mobile-menu" id="mobile-menu" [hidden]="!menuOpen()">
      <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="menuOpen.set(false)">Accueil</a>
      <a routerLink="/equipe" routerLinkActive="is-active" (click)="menuOpen.set(false)">Nos équipes</a>
      <a routerLink="/projets" routerLinkActive="is-active" (click)="menuOpen.set(false)">Projets</a>
      <a routerLink="/services" routerLinkActive="is-active" (click)="menuOpen.set(false)">Services</a>
      <a routerLink="/carrieres" routerLinkActive="is-active" (click)="menuOpen.set(false)">Carrières</a>
      <a routerLink="/a-propos" routerLinkActive="is-active" (click)="menuOpen.set(false)">À propos</a>
      <a routerLink="/contact" (click)="menuOpen.set(false)">Contact</a>
      <a routerLink="/recherche" routerLinkActive="is-active" (click)="menuOpen.set(false)">Rechercher</a>
      <a href="/devis" (click)="openQuote($event); menuOpen.set(false)">Demander un devis</a>
      <div class="theme-toggle-row">
        <span>Thème {{ themeService.theme() === 'dark' ? 'sombre' : 'clair' }}</span>
        <button
          class="icon-btn"
          type="button"
          [attr.aria-label]="themeService.theme() === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'"
          (click)="themeService.toggle()"
        >
          @if (themeService.theme() === 'dark') {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
            </svg>
          }
        </button>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  private readonly quoteModal = inject(QuoteModalService);
  protected readonly themeService = inject(ThemeService);

  readonly menuOpen = signal(false);

  openQuote(event: Event): void {
    event.preventDefault();
    this.quoteModal.open();
  }
}
