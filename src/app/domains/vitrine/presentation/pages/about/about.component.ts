// Page "À propos" du site vitrine ATHL.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RevealDirective, StatCounterComponent, CtaBannerComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
