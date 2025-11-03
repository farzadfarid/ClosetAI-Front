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
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then( m => m.SettingsComponent)
  },
  {
    path: 'outfit',
    loadComponent: () => import('./pages/outfit/outfit.page').then( m => m.OutfitPage)
  },
  {
    path: 'outfit-women',
    loadComponent: () => import('./pages/outfit-women/outfit-women.page').then( m => m.OutfitWomenPage)
  },
];
