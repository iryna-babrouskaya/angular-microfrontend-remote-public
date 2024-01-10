import { Routes } from '@angular/router';

// |--home remote page without params in path (/home)
// |--remote page with params in path (/page/:id)
// |--remote subpage with params in path (/page/:id/subpage)
export const REMOTE_ROUTES: Routes = [
    {
        path: ':shellId/remote-web-components/home',
        loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    {
        path: ':shellId/remote-web-components/page/:id',
        loadComponent: () => import('./pages/pages.component').then(m => m.PageComponent)
    },
    {
        path: ':shellId/remote-web-components/page/:id/subpage',
        loadComponent: () => import('./pages/pages.component').then(m => m.SubPageComponent)
    },
    // {
    //     path: ':id/remote-web-components/error',
    //     loadComponent: () => import('./pages/pages.component').then(m => m.ErrorComponent)
    // },
    // { path: '**', redirectTo: 'remote-web-components/error' }
    { path: '**', redirectTo: '/' }
];
