import { Route } from '@angular/router';
import { isLoggedInGuard } from '@core/guards/is-logged-in/is-logged-in.guard';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layout/auth/auth.layout').then((m) => m.AuthLayout),
    canActivate: [isLoggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./domain/auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
];
