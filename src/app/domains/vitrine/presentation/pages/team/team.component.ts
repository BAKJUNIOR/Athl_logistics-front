// Page "Nos équipes" du site vitrine ATHL.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../components/reveal.directive';
import { StatCounterComponent } from '../../components/stat-counter/stat-counter.component';
import { TEAM_MEMBERS } from '../../../infrastructure/data/team.data';

@Component({
  selector: 'app-team',
  imports: [RouterLink, RevealDirective, StatCounterComponent],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  readonly members = TEAM_MEMBERS;
}
