import { Routes } from '@angular/router';
import { endsWith } from '@angular-architects/module-federation-tools';

// |--home remote page without params in path (/home)
// |--remote page with params in path (/page/:id)
// |--remote subpage with params in path (/page/:id/subpage)
export const REMOTE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'remote-web-components/home', pathMatch: 'full'
    },
    {
        path: 'remote-web-components', redirectTo: 'remote-web-components/home', pathMatch: 'full'
    },
    {
        path: 'remote-web-components/home',
        loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    {
        path: 'remote-web-components/page/:id',
        loadComponent: () => import('./pages/pages.component').then(m => m.PageComponent)
    },
    {
        path: 'remote-web-components/page/:id/subpage',
        loadComponent: () => import('./pages/pages.component').then(m => m.SubPageComponent)
    },
    {
        path: 'remote-web-components/error',
        loadComponent: () => import('./pages/pages.component').then(m => m.ErrorComponent)
    },
    {
        matcher: endsWith('home'),
        loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    { path: '**', redirectTo: 'remote-web-components/error' }
];
