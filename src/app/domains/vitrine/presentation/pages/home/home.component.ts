// Page d'accueil du site vitrine ATHL.
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { TestimonialCarouselComponent } from '../../components/testimonial-carousel/testimonial-carousel.component';
import { SERVICES } from '../../../infrastructure/data/services.data';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, StatCounterComponent, CtaBannerComponent, TestimonialCarouselComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly quoteModal = inject(QuoteModalService);

  readonly services = SERVICES;

  openQuote(): void {
    this.quoteModal.open();
  }
}
