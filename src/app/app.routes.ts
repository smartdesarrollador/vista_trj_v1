import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';
export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./paginas/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'Iniciar sesión',
      },
      {
        path: 'register',
        //canActivate: [authGuard],
        loadComponent: () =>
          import('./paginas/auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Registrarse',
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import(
            './paginas/auth/forgot-password/forgot-password.component'
          ).then((m) => m.ForgotPasswordComponent),
        title: 'Recuperar contraseña',
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./paginas/auth/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          ),
        title: 'Restablecer contraseña',
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      /* {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      }, */
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./paginas/vista/vista.component').then((m) => m.VistaComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./paginas/vista/inicio/inicio.component').then(
            (m) => m.InicioComponent
          ),
        title: 'Tarjeta Digital - Inicio',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./paginas/vista/about/about.component').then(
            (m) => m.AboutComponent
          ),
        title: 'Acerca de - Tarjeta Digital',
      },
      {
        path: 'cuenta',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./paginas/vista/cuenta/cuenta.component').then(
            (m) => m.CuentaComponent
          ),
        title: 'Mi Cuenta - Tarjeta Digital',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./paginas/page-not-found/page-not-found.component').then(
            (m) => m.PageNotFoundComponent
          ),
        title: 'Página no encontrada',
      },
    ],
  },
];
