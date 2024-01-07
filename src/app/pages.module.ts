import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { REMOTE_ROUTES } from './remote-routes';
import { ErrorComponent, HomePageComponent, PageComponent, SubPageComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(REMOTE_ROUTES),
    HomePageComponent,
    PageComponent,
    SubPageComponent,
    ErrorComponent,
  ]
})
export class PagesModule {}