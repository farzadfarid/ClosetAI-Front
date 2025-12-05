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
  {
    path: 'outfit-girl',
    loadComponent: () => import('./pages/outfit-girl/outfit-girl.page').then( m => m.OutfitGirlPage)
  },
  {
    path: 'outfit-boy',
    loadComponent: () => import('./pages/outfit-boy/outfit-boy.page').then( m => m.OutfitBoyPage)
  },
  {
    path: 'atelier',
    loadComponent: () => import('./pages/atelier/atelier.page').then( m => m.AtelierPage)
  },

  {
    path: 'category/:id',
    loadComponent: () => import('./pages/category/category.page').then(m => m.CategoryPage)
  }


];
