import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { ThemeService } from '@shared/services/theme/theme.service';
import { AuthService } from '@domain/auth/services/auth.sevice';
import { provideEnvironmentNgxMask } from 'ngx-mask';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideNzI18n(pt_BR),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    provideAppInitializer(() => inject(ThemeService).loadTheme()),
    provideAppInitializer(() => inject(AuthService).load()),
  ],
};
