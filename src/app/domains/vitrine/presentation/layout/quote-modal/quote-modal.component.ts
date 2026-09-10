// Modal "Demander un devis", ouvrable depuis n'importe quelle page via QuoteModalService.
import { Component, effect, inject, signal } from '@angular/core';
import { FileDropComponent } from '../../components/file-drop/file-drop.component';
import { QuoteModalService } from '../../services/quote-modal.service';

const FORM_ACTION = 'https://formsubmit.co/devis@athl.com';

@Component({
  selector: 'app-quote-modal',
  imports: [FileDropComponent],
  template: `
    <div class="modal" [class.is-open]="quoteModal.isOpen()" [hidden]="!quoteModal.isOpen()">
      <div class="modal__backdrop" (click)="quoteModal.close()"></div>
      <div class="modal__card" role="dialog" aria-modal="true" aria-labelledby="devis-title">
        <button class="modal__close" type="button" aria-label="Fermer" (click)="quoteModal.close()">&#215;</button>
        <div class="modal__head">
          <div class="modal__eyebrow">Devis gratuit</div>
          <h2 id="devis-title">Demander un devis</h2>
          <p>Quatre champs suffisent. Nous vous rappelons sous 48 h ouvrées.</p>
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
            <label for="m-service">Service concerné <span class="req">*</span></label>
            <select id="m-service" name="Service" required [value]="quoteModal.preselectedService()">
              <option value="">Choisir un service…</option>
              <option value="Réalisation de projets de construction">Réalisation de projets de construction</option>
              <option value="Rénovation &amp; aménagement">Rénovation &amp; aménagement</option>
              <option value="VTC, mobilité &amp; livraison">VTC, mobilité &amp; livraison</option>
              <option value="Importation de matériaux">Importation de matériaux de construction</option>
            </select>
          </div>

          <div class="field">
            <label for="m-nom">Nom et prénoms <span class="req">*</span></label>
            <input id="m-nom" name="Nom" type="text" required autocomplete="name" placeholder="Ex. Konan Yao" />
          </div>
          <div class="field">
            <label for="m-tel">Téléphone <span class="req">*</span></label>
            <input id="m-tel" name="Téléphone" type="tel" required autocomplete="tel" placeholder="+225 07 00 00 00 00" />
          </div>

          <div class="field field--full">
            <label for="m-desc">Votre projet <span class="req">*</span></label>
            <textarea id="m-desc" name="Description" rows="4" required placeholder="Nature des travaux, lieu, surface, délais souhaités…"></textarea>
          </div>

          <div class="field field--full">
            <label for="m-files">Plans ou photos <span class="opt">(facultatif)</span></label>
            <app-file-drop
              name="Documents"
              [multiple]="true"
              [compact]="true"
              hint="PDF, DOC, JPG, PNG ou ZIP — 5 Mo au total"
              browseLabel="parcourez"
            />
          </div>

          <div class="field field--full check">
            <input id="m-ok" name="Consentement" type="checkbox" value="Oui" required />
            <label for="m-ok">J’autorise ATHL à me contacter au sujet de cette demande. <span class="req">*</span></label>
          </div>

          <div class="field field--full form__foot">
            <button class="btn btn--light" type="submit">Envoyer ma demande</button>
            <a class="btn btn--ghost" href="tel:+2250778095858">Appeler : +225 07 78 09 58 58</a>
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
      this.status.set('Merci de renseigner les champs obligatoires (*).');
      this.isValid.set(false);
      missing[0].focus();
      return;
    }
    this.status.set('Envoi en cours…');
    this.isValid.set(true);
  }
}
