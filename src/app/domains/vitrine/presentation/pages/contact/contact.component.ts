// Page "Contact" du site vitrine ATHL.
import { Component, computed } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { getSiteContact } from '../../../infrastructure/data/site-contact.data';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, TranslocoPipe],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly contact = computed(() => getSiteContact());

  telHref(phone: string): string {
    return `tel:${phone.replace(/\s+/g, '')}`;
  }
}
