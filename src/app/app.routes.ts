import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'carreras',
    loadComponent: () => import('./carreras/carreras.page').then( m => m.CarrerasPage)
  },
  {
    path: 'beneficios',
    loadComponent: () => import('./beneficios/beneficios.page').then( m => m.BeneficiosPage)
  },
];
