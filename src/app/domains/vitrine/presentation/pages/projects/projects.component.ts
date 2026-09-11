// Page "Projets" (galerie de réalisations) du site vitrine ATHL.
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { LanguageService, Lang } from '../../../../../core/services/language.service';

interface Shot {
  image: string;
  alt: string;
  title: string;
  caption: string;
  wide?: boolean;
}

const SHOTS: Record<Lang, Shot[]> = {
  fr: [
    { image: 'images/svc-1.png', alt: 'Villa contemporaine livrée', title: 'Villa contemporaine', caption: 'Construction neuve — Abidjan', wide: true },
    { image: 'images/proj-1.png', alt: 'Structure en cours', title: 'Structure & gros œuvre', caption: 'Chantier en cours' },
    { image: 'images/proj-2.png', alt: 'Chantier avec grue', title: 'Levage & coordination', caption: 'Chantier en cours' },
    { image: 'images/hero-2.png', alt: 'Rénovation avant / après', title: 'Rénovation intérieure', caption: 'Avant / après' },
    { image: 'images/team-group.png', alt: 'Aménagement extérieur avec piscine', title: 'Aménagement extérieur', caption: 'Livré' },
    { image: 'images/proj-4.png', alt: 'Chantier de grande hauteur', title: 'Chantier de grande hauteur', caption: 'Gros œuvre', wide: true },
    { image: 'images/svc-4.png', alt: 'Matériaux importés', title: 'Sourcing de matériaux', caption: 'Chine · Inde · Turquie' },
    { image: 'images/proj-5.png', alt: 'Terminal portuaire', title: 'Logistique portuaire', caption: 'Import & acheminement' },
  ],
  en: [
    { image: 'images/svc-1.png', alt: 'Contemporary villa, completed', title: 'Contemporary villa', caption: 'New build — Abidjan', wide: true },
    { image: 'images/proj-1.png', alt: 'Structure under construction', title: 'Structure & shell', caption: 'Site in progress' },
    { image: 'images/proj-2.png', alt: 'Site with a crane', title: 'Lifting & coordination', caption: 'Site in progress' },
    { image: 'images/hero-2.png', alt: 'Renovation before / after', title: 'Interior renovation', caption: 'Before / after' },
    { image: 'images/team-group.png', alt: 'Outdoor fit-out with pool', title: 'Outdoor fit-out', caption: 'Delivered' },
    { image: 'images/proj-4.png', alt: 'High-rise construction site', title: 'High-rise construction', caption: 'Shell & core', wide: true },
    { image: 'images/svc-4.png', alt: 'Imported materials', title: 'Material sourcing', caption: 'China · India · Turkey' },
    { image: 'images/proj-5.png', alt: 'Port terminal', title: 'Port logistics', caption: 'Import & delivery' },
  ],
};

@Component({
  selector: 'app-projects',
  imports: [RouterLink, RevealDirective, CtaBannerComponent, TranslocoPipe],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  private readonly languageService = inject(LanguageService);

  readonly shots = computed(() => SHOTS[this.languageService.lang()]);
}
