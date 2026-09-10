// Coquille visuelle du site vitrine : halo décoratif, header, contenu de page, footer et modal devis globale.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';

@Component({
  selector: 'app-vitrine-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, QuoteModalComponent],
  template: `
    <div class="page">
      <div class="glow" aria-hidden="true"></div>
      <div class="hairline" aria-hidden="true"></div>

      <div class="wrap">
        <app-header />
        <router-outlet />
        <app-footer />
      </div>
    </div>

    <app-quote-modal />
  `,
})
export class VitrineLayoutComponent {}
