// Page "Demander un devis" (formulaire complet, accessible directement via /devis).
import { Component, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { RevealDirective } from '../../components/reveal.directive';
import { FileDropComponent } from '../../components/file-drop/file-drop.component';

const FORM_ACTION = 'https://formsubmit.co/devis@athl.com';

@Component({
  selector: 'app-quote',
  imports: [RevealDirective, FileDropComponent, TranslocoPipe],
  templateUrl: './quote.component.html',
})
export class QuoteComponent {
  private readonly transloco = inject(TranslocoService);

  protected readonly formAction = FORM_ACTION;
  protected readonly status = signal('');
  protected readonly isValid = signal(false);

  onSubmit(event: Event, form: HTMLFormElement): void {
    const missing = Array.from(form.querySelectorAll<HTMLInputElement>('[required]')).filter((el) =>
      el.type === 'checkbox' ? !el.checked : !el.value,
    );
    if (missing.length) {
      event.preventDefault();
      this.status.set(this.transloco.translate('common.form.missingRequired'));
      this.isValid.set(false);
      missing[0].focus();
      return;
    }
    this.status.set(this.transloco.translate('common.form.sending'));
    this.isValid.set(true);
  }
}
