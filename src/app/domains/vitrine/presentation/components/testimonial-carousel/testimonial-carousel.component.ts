// Carrousel de témoignages (2 cartes visibles, défilement circulaire) affiché sur la page d'accueil.
import { Component, computed, signal } from '@angular/core';
import { TESTIMONIALS } from '../../../infrastructure/data/testimonials.data';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [RevealDirective],
  template: `
    <div class="quotes__head" appReveal>
      <h2>La confiance des directeurs de projet</h2>
      <div class="arrows">
        <button class="arrow" type="button" aria-label="Témoignage précédent" (click)="previous()">&larr;</button>
        <button class="arrow arrow--solid" type="button" aria-label="Témoignage suivant" (click)="next()">&rarr;</button>
      </div>
    </div>

    <div class="quote-grid">
      @for (quote of visible(); track quote.name) {
        <article class="quote">
          <div class="quote__media"><img [src]="quote.photo" alt="" loading="lazy" /></div>
          <div class="quote__body">
            <p class="quote__text">{{ quote.text }}</p>
            <div class="quote__who">
              <div class="quote__avatar" aria-hidden="true">{{ quote.initials }}</div>
              <div>
                <div class="quote__name">{{ quote.name }}</div>
                <div class="quote__role">{{ quote.role }}</div>
              </div>
            </div>
          </div>
        </article>
      }
    </div>
  `,
  host: { class: 'quotes' },
})
export class TestimonialCarouselComponent {
  private readonly quotes = TESTIMONIALS;
  private readonly index = signal(0);

  readonly visible = computed(() => {
    const i = this.index();
    return [this.quotes[i % this.quotes.length], this.quotes[(i + 1) % this.quotes.length]];
  });

  previous(): void {
    this.index.update((i) => (i - 1 + this.quotes.length) % this.quotes.length);
  }

  next(): void {
    this.index.update((i) => (i + 1) % this.quotes.length);
  }
}
