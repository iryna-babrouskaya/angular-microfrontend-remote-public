import { Routes } from '@angular/router';
import { ErrorComponent, HomePageComponent, PageComponent, SubPageComponent } from './pages/pages.component';

// |--home remote page without params in path (/home)
// |--remote page with params in path (/page/:id)
// |--remote subpage with params in path (/page/:id/subpage)
export const REMOTE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        // loadComponent: () => import('./pages/pages.component').then(m => m.HomePageComponent)
    },
    {
        path: 'page/:id',
        component: PageComponent,
        // loadComponent: () => import('./pages/pages.component').then(m => m.PageComponent)
    },
    {
        path: 'page/:id/subpage',
        component: SubPageComponent,
        // loadComponent: () => import('./pages/pages.component').then(m => m.SubPageComponent)
    },
    {
        path: 'error',
        component: ErrorComponent,
        // loadComponent: () => import('./pages/pages.component').then(m => m.ErrorComponent)
    },
    { path: '**', redirectTo: 'error' }
];
