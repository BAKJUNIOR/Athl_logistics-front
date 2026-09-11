// Page de détail d'un service (une route générique /services/:slug pour les 4 prestations).
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { map } from 'rxjs';
import { RevealDirective } from '../../components/reveal.directive';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { getServices, findServiceBySlug, nextService } from '../../../infrastructure/data/services.data';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, RevealDirective, CtaBannerComponent, TranslocoPipe],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });

  readonly service = computed(() => {
    const lang = this.languageService.lang();
    return findServiceBySlug(this.slug(), lang) ?? getServices(lang)[0];
  });

  readonly next = computed(() => nextService(this.slug(), this.languageService.lang()));

  constructor() {
    effect(() => {
      if (!findServiceBySlug(this.slug(), this.languageService.lang())) {
        this.router.navigate(['/services']);
      }
    });
  }
}
