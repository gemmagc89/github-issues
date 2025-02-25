import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection(),
    provideTanStackQuery(
      new QueryClient(),
      withDevtools(() => ({
       // initialIsOpen: true,
      }))
    ),
    provideMarkdown(),
  ]
};
