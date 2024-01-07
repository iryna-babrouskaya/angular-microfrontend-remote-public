import { Routes } from '@angular/router';

// |--home remote page without params in path (/home)
// |--remote page with params in path (/page/:id)
// |--remote subpage with params in path (/page/:id/subpage)
export const REMOTE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    {
        path: 'page/:id',
        loadComponent: () => import('./pages/pages.component').then(m => m.PageComponent)
    },
    {
        path: 'page/:id/subpage',
        loadComponent: () => import('./pages/pages.component').then(m => m.SubPageComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./pages/pages.component').then(m => m.ErrorComponent)
    },
    { path: '**', redirectTo: 'error' }
];
