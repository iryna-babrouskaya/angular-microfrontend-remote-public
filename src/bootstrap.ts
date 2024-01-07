import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgZone } from '@angular/core';

import { REMOTE_ROUTES } from './app/remote-routes';
import { RootComponent } from './app/root.component';

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter(REMOTE_ROUTES),
    // To avoid error "Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature"
    // just simply add "noImplicitAny": false to "compilerOptions" inside of tsconfig.json
    globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
  ]
})
.catch(err => console.error(err));
