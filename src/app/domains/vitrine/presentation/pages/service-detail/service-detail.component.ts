// Page de détail d'un service (une route générique /services/:slug pour les 4 prestations).
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { RevealDirective } from '../../components/reveal.directive';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SERVICES, findServiceBySlug, nextService } from '../../../infrastructure/data/services.data';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, RevealDirective, CtaBannerComponent],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('slug') ?? '',
  });

  readonly service = computed(() => findServiceBySlug(this.slug()) ?? SERVICES[0]);
  readonly next = computed(() => nextService(this.slug()));

  constructor() {
    effect(() => {
      if (!findServiceBySlug(this.slug())) {
        this.router.navigate(['/services']);
      }
    });
  }
}
