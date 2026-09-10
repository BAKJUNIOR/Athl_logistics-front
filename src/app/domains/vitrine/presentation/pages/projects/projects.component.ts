// Page "Projets" (galerie de réalisations) du site vitrine ATHL.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../components/reveal.directive';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

interface Shot {
  image: string;
  alt: string;
  title: string;
  caption: string;
  wide?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, RevealDirective, CtaBannerComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly shots: Shot[] = [
    { image: 'images/svc-1.png', alt: 'Villa contemporaine livrée', title: 'Villa contemporaine', caption: 'Construction neuve — Abidjan', wide: true },
    { image: 'images/proj-1.png', alt: 'Structure en cours', title: 'Structure & gros œuvre', caption: 'Chantier en cours' },
    { image: 'images/proj-2.png', alt: 'Chantier avec grue', title: 'Levage & coordination', caption: 'Chantier en cours' },
    { image: 'images/hero-2.png', alt: 'Rénovation avant / après', title: 'Rénovation intérieure', caption: 'Avant / après' },
    { image: 'images/team-group.png', alt: 'Aménagement extérieur avec piscine', title: 'Aménagement extérieur', caption: 'Livré' },
    { image: 'images/proj-4.png', alt: 'Chantier de grande hauteur', title: 'Chantier de grande hauteur', caption: 'Gros œuvre', wide: true },
    { image: 'images/svc-4.png', alt: 'Matériaux importés', title: 'Sourcing de matériaux', caption: 'Chine · Inde · Turquie' },
    { image: 'images/proj-5.png', alt: 'Terminal portuaire', title: 'Logistique portuaire', caption: 'Import & acheminement' },
  ];
}
