// Page "Services" (liste des 4 prestations) du site vitrine ATHL.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../components/reveal.directive';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SERVICES } from '../../../infrastructure/data/services.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, RevealDirective, CtaBannerComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly services = SERVICES;
}
