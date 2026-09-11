import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';
import { TranslocoHttpLoader } from './core/services/transloco-loader';
import { resolveInitialLang } from './core/services/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['fr', 'en'],
        defaultLang: resolveInitialLang(),
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        fallbackLang: 'fr',
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
