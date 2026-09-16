// Page "Nos équipes" du site vitrine ATHL.
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { getTeamMembers } from '../../../infrastructure/data/team.data';
import { getHomeStat } from '../../../infrastructure/data/home-stats.data';
import { LanguageService } from '../../../../../core/services/language.service';

// Nombre de membres affichés simultanément : au-delà, on défile par flèches plutôt que
// de laisser la grille grossir indéfiniment vers le bas à chaque ajout depuis le BO.
const WINDOW_SIZE = 4;

@Component({
  selector: 'app-team',
  imports: [RouterLink, RevealDirective, StatCounterComponent, TranslocoPipe],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  private readonly languageService = inject(LanguageService);

  readonly members = computed(() => getTeamMembers(this.languageService.lang()));
  private readonly index = signal(0);

  readonly showArrows = computed(() => this.members().length > WINDOW_SIZE);

  readonly visibleMembers = computed(() => {
    const list = this.members();
    if (list.length <= WINDOW_SIZE) return list;
    const start = this.index();
    return Array.from({ length: WINDOW_SIZE }, (_, k) => list[(start + k) % list.length]);
  });

  readonly sitesDelivered = computed(() => getHomeStat('sites_delivered'));
  readonly projectValue = computed(() => getHomeStat('project_value'));
  readonly assetValue = computed(() => getHomeStat('asset_value'));

  previous(): void {
    const length = this.members().length;
    this.index.update((i) => (i - 1 + length) % length);
  }

  next(): void {
    const length = this.members().length;
    this.index.update((i) => (i + 1) % length);
  }
}
