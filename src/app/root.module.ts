import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root.component';
import { PagesModule } from './pages.module';
import { RootStartPageComponent } from './root-start-page.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
            path: '',
            component: RootStartPageComponent,
            pathMatch: 'full',
        },
        {
            path: 'remote',
            loadChildren: () => import('./pages.module').then(m => m.PagesModule),
        }
    ])
  ],
  declarations: [
    RootComponent,
    RootStartPageComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule {}