import { platformBrowser } from '@angular/platform-browser';

import { RootModule } from './app/root.module';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { NgZone } from '@angular/core';

const ngVersion = require('../package.json').dependencies['@angular/core']; // better just take the major version 

(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform; 
}
platform.bootstrapModule(RootModule, {ngZone: (window as any).ngZone})
  .catch(err => console.error(err));
// bootstrap(RootModule, {
//   production: false, //environment.production,
//   appType: 'microfrontend',
//   platformSharing: false,
// });


// (async () => {
//   const app = await createApplication({
//     providers: [
//       provideRouter(REMOTE_ROUTES),
//       // To avoid error "Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature"
//       // just simply add "noImplicitAny": false to "compilerOptions" inside of tsconfig.json
//       globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
//     ],
//   });

//   const remoteRoot = createCustomElement(RootComponent, {
//     injector: app.injector,
//   });

//   customElements.define('remote-root', remoteRoot);
// })();
