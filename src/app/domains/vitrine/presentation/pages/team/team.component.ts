// Page "Nos équipes" du site vitrine ATHL.
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { TeamMembersComponent } from '../../components/team-members/team-members.component';
import { getHomeStat } from '../../../infrastructure/data/home-stats.data';

@Component({
  selector: 'app-team',
  imports: [RouterLink, RevealDirective, StatCounterComponent, TeamMembersComponent, TranslocoPipe],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  readonly sitesDelivered = computed(() => getHomeStat('sites_delivered'));
  readonly projectValue = computed(() => getHomeStat('project_value'));
  readonly assetValue = computed(() => getHomeStat('asset_value'));

}
