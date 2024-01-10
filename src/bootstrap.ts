import { RootModule } from './app/root.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const ngVersion = require('../package.json').dependencies['@angular/core']; // better just take the major version 

(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform; 
}

platform.bootstrapModule(RootModule, {ngZone: (window as any).ngZone})
  .catch(err => console.error(err));
