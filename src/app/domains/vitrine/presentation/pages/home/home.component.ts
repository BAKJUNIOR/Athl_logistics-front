// Page d'accueil du site vitrine ATHL.
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { TestimonialCarouselComponent } from '../../components/testimonial-carousel/testimonial-carousel.component';
import { getServices } from '../../../infrastructure/data/services.data';
import { QuoteModalService } from '../../services/quote-modal.service';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, StatCounterComponent, CtaBannerComponent, TestimonialCarouselComponent, TranslocoPipe],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly quoteModal = inject(QuoteModalService);
  private readonly languageService = inject(LanguageService);

  readonly services = computed(() => getServices(this.languageService.lang()));

  openQuote(): void {
    this.quoteModal.open();
  }
}
