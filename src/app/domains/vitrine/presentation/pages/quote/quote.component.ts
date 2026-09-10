// Page "Demander un devis" (formulaire complet, accessible directement via /devis).
import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../components/reveal.directive';
import { FileDropComponent } from '../../components/file-drop/file-drop.component';

const FORM_ACTION = 'https://formsubmit.co/devis@athl.com';

@Component({
  selector: 'app-quote',
  imports: [RevealDirective, FileDropComponent],
  templateUrl: './quote.component.html',
})
export class QuoteComponent {
  protected readonly formAction = FORM_ACTION;
  protected readonly status = signal('');
  protected readonly isValid = signal(false);

  onSubmit(event: Event, form: HTMLFormElement): void {
    const missing = Array.from(form.querySelectorAll<HTMLInputElement>('[required]')).filter((el) =>
      el.type === 'checkbox' ? !el.checked : !el.value,
    );
    if (missing.length) {
      event.preventDefault();
      this.status.set('Merci de renseigner les champs obligatoires (*).');
      this.isValid.set(false);
      missing[0].focus();
      return;
    }
    this.status.set('Envoi en cours…');
    this.isValid.set(true);
  }
}
