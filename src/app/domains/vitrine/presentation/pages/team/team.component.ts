// Page "Nos équipes" du site vitrine ATHL.
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { getTeamMembers } from '../../../infrastructure/data/team.data';
import { getHomeStat } from '../../../infrastructure/data/home-stats.data';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-team',
  imports: [RouterLink, RevealDirective, StatCounterComponent, TranslocoPipe],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  private readonly languageService = inject(LanguageService);

  readonly members = computed(() => getTeamMembers(this.languageService.lang()));

  readonly sitesDelivered = computed(() => getHomeStat('sites_delivered'));
  readonly projectValue = computed(() => getHomeStat('project_value'));
  readonly assetValue = computed(() => getHomeStat('asset_value'));
}
