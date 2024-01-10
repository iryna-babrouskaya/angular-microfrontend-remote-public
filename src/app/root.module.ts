import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';
import { REMOTE_ROUTES } from './remote-routes';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(REMOTE_ROUTES)
  ],
  providers: [
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RootModule {
    constructor(private injector: Injector) {}
  
    ngDoBootstrap(): void {
      const webComponent = createCustomElement(RootComponent, {injector: this.injector});
      customElements.define('remote-root', webComponent);
    }
}
