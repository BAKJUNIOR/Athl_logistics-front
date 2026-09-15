import { inject } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { ServiceApi, ServiceSummaryApi } from '../../domains/vitrine/infrastructure/api/service.api';
import { setServiceSummaries } from '../../domains/vitrine/infrastructure/data/services.data';
import { JobApi, JobOfferApi } from '../../domains/vitrine/infrastructure/api/job.api';
import { JobDomainApi, JobDomainDto } from '../../domains/vitrine/infrastructure/api/job-domain.api';
import { setJobDomains, setJobOffers } from '../../domains/vitrine/infrastructure/data/jobs.data';
import { TeamApi, TeamMemberApi } from '../../domains/vitrine/infrastructure/api/team.api';
import { setTeamMembers } from '../../domains/vitrine/infrastructure/data/team.data';


export function initializeServiceCatalog(): Promise<void> {
  const api = inject(ServiceApi);
  return firstValueFrom(api.list().pipe(catchError(() => of([] as ServiceSummaryApi[])))).then((list) => {
    setServiceSummaries(list);
  });
}

/** Même principe que initializeServiceCatalog(), pour les offres d'emploi (page Carrières). */
export function initializeJobCatalog(): Promise<void> {
  const api = inject(JobApi);
  return firstValueFrom(api.list().pipe(catchError(() => of([] as JobOfferApi[])))).then((list) => {
    setJobOffers(list);
  });
}


export function initializeJobDomainCatalog(): Promise<void> {
  const api = inject(JobDomainApi);
  return firstValueFrom(api.list().pipe(catchError(() => of([] as JobDomainDto[])))).then((list) => {
    setJobDomains(list);
  });
}

/** Même principe, pour l'équipe dirigeante (page Équipe). */
export function initializeTeamCatalog(): Promise<void> {
  const api = inject(TeamApi);
  return firstValueFrom(api.list().pipe(catchError(() => of([] as TeamMemberApi[])))).then((list) => {
    setTeamMembers(list);
  });
}
