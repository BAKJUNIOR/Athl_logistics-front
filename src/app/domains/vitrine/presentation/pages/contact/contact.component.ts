// Page "Contact" du site vitrine ATHL.
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, TranslocoPipe],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
