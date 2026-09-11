// Modal "Demander un devis", ouvrable depuis n'importe quelle page via QuoteModalService.
import { Component, effect, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { FileDropComponent } from '../../components/file-drop/file-drop.component';
import { QuoteModalService } from '../../services/quote-modal.service';

const FORM_ACTION = 'https://formsubmit.co/devis@athl.com';

@Component({
  selector: 'app-quote-modal',
  imports: [FileDropComponent, TranslocoPipe],
  template: `
    <div class="modal" [class.is-open]="quoteModal.isOpen()" [hidden]="!quoteModal.isOpen()">
      <div class="modal__backdrop" (click)="quoteModal.close()"></div>
      <div class="modal__card" role="dialog" aria-modal="true" aria-labelledby="devis-title">
        <button class="modal__close" type="button" [attr.aria-label]="'common.close' | transloco" (click)="quoteModal.close()">&#215;</button>
        <div class="modal__head">
          <div class="modal__eyebrow">{{ 'quote.eyebrow' | transloco }}</div>
          <h2 id="devis-title">{{ 'quote.title' | transloco }}</h2>
          <p>{{ 'quote.subtitle' | transloco }}</p>
        </div>

        <form
          #form
          class="form form--modal"
          [action]="formAction"
          method="POST"
          enctype="multipart/form-data"
          novalidate
          (submit)="onSubmit($event, form)"
        >
          <input type="hidden" name="_subject" value="Demande de devis ATHL" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div class="field field--full">
            <label for="m-service">{{ 'quote.form.service' | transloco }} <span class="req">*</span></label>
            <select id="m-service" name="Service" required [value]="quoteModal.preselectedService()">
              <option value="">{{ 'quote.form.chooseService' | transloco }}</option>
              <option value="Réalisation de projets de construction">{{ 'common.services.construction' | transloco }}</option>
              <option value="Rénovation &amp; aménagement">{{ 'common.services.renovation' | transloco }}</option>
              <option value="VTC, mobilité &amp; livraison">{{ 'common.services.mobility' | transloco }}</option>
              <option value="Importation de matériaux">{{ 'common.services.import' | transloco }}</option>
            </select>
          </div>

          <div class="field">
            <label for="m-nom">{{ 'common.form.fullName' | transloco }} <span class="req">*</span></label>
            <input id="m-nom" name="Nom" type="text" required autocomplete="name" [placeholder]="'common.form.fullNamePlaceholder' | transloco" />
          </div>
          <div class="field">
            <label for="m-tel">{{ 'common.form.phone' | transloco }} <span class="req">*</span></label>
            <input id="m-tel" name="Téléphone" type="tel" required autocomplete="tel" placeholder="+225 07 00 00 00 00" />
          </div>

          <div class="field field--full">
            <label for="m-desc">{{ 'quote.form.project' | transloco }} <span class="req">*</span></label>
            <textarea id="m-desc" name="Description" rows="4" required [placeholder]="'quote.form.projectPlaceholder' | transloco"></textarea>
          </div>

          <div class="field field--full">
            <label for="m-files">{{ 'quote.form.files' | transloco }} <span class="opt">({{ 'common.form.optional' | transloco }})</span></label>
            <app-file-drop
              name="Documents"
              [multiple]="true"
              [compact]="true"
              [label]="'quote.form.dropLabel' | transloco"
              [browseLabel]="'quote.form.dropBrowseShort' | transloco"
              [hint]="'quote.form.dropHint' | transloco"
            />
          </div>

          <div class="field field--full check">
            <input id="m-ok" name="Consentement" type="checkbox" value="Oui" required />
            <label for="m-ok">{{ 'quote.form.consent' | transloco }} <span class="req">*</span></label>
          </div>

          <div class="field field--full form__foot">
            <button class="btn btn--light" type="submit">{{ 'quote.form.submit' | transloco }}</button>
            <a class="btn btn--ghost" href="tel:+2250778095858">{{ 'common.form.callUs' | transloco }} : +225 07 78 09 58 58</a>
          </div>

          @if (status(); as message) {
            <p class="form__status" [class.is-err]="!isValid()" [class.is-ok]="isValid()" role="status">{{ message }}</p>
          }
        </form>
      </div>
    </div>
  `,
})
export class QuoteModalComponent {
  protected readonly quoteModal = inject(QuoteModalService);
  protected readonly formAction = FORM_ACTION;
  private readonly transloco = inject(TranslocoService);

  protected readonly status = signal('');
  protected readonly isValid = signal(false);

  constructor() {
    effect(() => {
      document.body.classList.toggle('modal-lock', this.quoteModal.isOpen());
    });
  }

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
