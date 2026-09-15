// Fonctions d'initialisation exécutées au démarrage de l'app, avant le premier rendu (voir app.config.ts).
import { inject } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { ServiceApi, ServiceSummaryApi } from '../../domains/vitrine/infrastructure/api/service.api';
import { setServiceSummaries } from '../../domains/vitrine/infrastructure/data/services.data';

/**
 * Précharge le catalogue de services (résumé) avant le premier rendu, pour que getServices()
 * reste synchrone dans les pages qui l'utilisent déjà (accueil, page Services, recherche).
 * En cas d'erreur réseau/API indisponible, on démarre simplement avec un catalogue vide plutôt
 * que de bloquer l'app.
 */
export function initializeServiceCatalog(): Promise<void> {
  const api = inject(ServiceApi);
  return firstValueFrom(api.list().pipe(catchError(() => of([] as ServiceSummaryApi[])))).then((list) => {
    setServiceSummaries(list);
  });
}
