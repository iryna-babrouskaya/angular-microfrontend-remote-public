import { Component, ViewEncapsulation } from '@angular/core';
import { connectRouter } from './connect-routes';
import { Router } from '@angular/router';

@Component({
  selector: 'remote-root',
  templateUrl: './root.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RootComponent {
  public id: string = location.pathname.substring(1).split('/')[0];
  constructor(
    private router: Router
  ) {
    connectRouter();
  }

  goToShell(): void {
    const event = new Event('gotoshellevent');
    window.dispatchEvent(event);
  }
}
