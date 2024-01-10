import { Component, ViewEncapsulation } from '@angular/core';
import { connectRouter } from './connect-routes';

@Component({
  selector: 'remote-root',
  templateUrl: './root.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RootComponent {
  constructor() {
    connectRouter();
  }
}
