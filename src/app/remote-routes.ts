import { Routes } from '@angular/router';

// |--home remote page without params in path (/home)
// |--remote page with params in path (/page/:id)
// |--remote subpage with params in path (/page/:id/subpage)
export const REMOTE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'remote/home', pathMatch: 'full'
    },
    {
        path: 'remote', redirectTo: 'remote/home', pathMatch: 'full'
    },
    {
        path: 'remote/home',
        loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    {
        path: 'remote/page/:id',
        loadComponent: () => import('./pages/pages.component').then(m => m.PageComponent)
    },
    {
        path: 'remote/page/:id/subpage',
        loadComponent: () => import('./pages/pages.component').then(m => m.SubPageComponent)
    },
    {
        path: 'remote/error',
        loadComponent: () => import('./pages/pages.component').then(m => m.ErrorComponent)
    },
    { path: '**', redirectTo: 'remote/error' }
];
