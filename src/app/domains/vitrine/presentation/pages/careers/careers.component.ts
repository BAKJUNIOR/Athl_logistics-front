// Page "Carrières" : liste des offres (recherche, filtres, accordéon, partage) + formulaire de candidature.
import { Component, ElementRef, ViewChild, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { JobDomain } from '../../../domain/enum/job-domain.enum';
import { JobOffer, deadlineStatus, daysUntilDeadline } from '../../../domain/job-offer.entity';
import { JOB_OFFERS } from '../../../infrastructure/data/jobs.data';
import { RevealDirective } from '../../components/reveal.directive';
import { FileDropComponent } from '../../components/file-drop/file-drop.component';

const APPLY_FORM_ACTION = 'https://formsubmit.co/recrutement@athl.com';

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

@Component({
  selector: 'app-careers',
  imports: [RevealDirective, FileDropComponent, DatePipe],
  templateUrl: './careers.component.html',
})
export class CareersComponent {
  readonly domains = Object.values(JobDomain);
  readonly jobs = JOB_OFFERS;
  readonly applyFormAction = APPLY_FORM_ACTION;

  readonly search = signal('');
  readonly activeTag = signal<JobDomain | ''>('');
  readonly expanded = signal<ReadonlySet<string>>(new Set());
  readonly sharedJobId = signal('');
  readonly preselectedPoste = signal('');

  readonly filteredJobs = computed(() => {
    const query = normalize(this.search().trim());
    const tag = this.activeTag();
    return this.jobs.filter((job) => {
      const matchesTag = !tag || job.domain === tag;
      const matchesQuery =
        !query ||
        normalize(`${job.title} ${job.description} ${job.meta} ${job.domain}`).includes(query);
      return matchesTag && matchesQuery;
    });
  });

  readonly jobCountLabel = computed(() => {
    const count = this.filteredJobs().length;
    return `${count} ${count > 1 ? 'offres' : 'offre'}`;
  });

  protected readonly status = signal('');
  protected readonly isValid = signal(false);

  @ViewChild('candidature') private candidatureSection?: ElementRef<HTMLElement>;

  isExpanded(job: JobOffer): boolean {
    return this.expanded().has(job.id);
  }

  toggle(job: JobOffer): void {
    const next = new Set(this.expanded());
    if (next.has(job.id)) {
      next.delete(job.id);
    } else {
      next.add(job.id);
    }
    this.expanded.set(next);
  }

  selectTag(tag: JobDomain | ''): void {
    this.activeTag.set(tag);
  }

  clearSearch(): void {
    this.search.set('');
  }

  deadlineStatus(job: JobOffer) {
    return deadlineStatus(job);
  }

  deadlineNote(job: JobOffer): string {
    const days = daysUntilDeadline(job);
    if (days < 0) return '';
    if (days === 0) return 'dernier jour';
    if (days <= 10) return `J-${days}`;
    return '';
  }

  applyTo(job: JobOffer): void {
    this.preselectedPoste.set(job.title);
    this.expanded.update((set) => new Set(set).add(job.id));
    setTimeout(() => {
      this.candidatureSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  share(job: JobOffer): void {
    const url = `${location.origin}${location.pathname}#${job.id}`;
    const payload = { title: `ATHL — ${job.title}`, text: `Offre d'emploi chez ATHL : ${job.title}`, url };

    if (navigator.share) {
      navigator.share(payload).catch(() => {});
      return;
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => this.flashShared(job.id))
        .catch(() => this.flashShared(job.id));
    }
  }

  private flashShared(jobId: string): void {
    this.sharedJobId.set(jobId);
    setTimeout(() => this.sharedJobId.set(''), 2200);
  }

  onApplySubmit(event: Event, form: HTMLFormElement): void {
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
