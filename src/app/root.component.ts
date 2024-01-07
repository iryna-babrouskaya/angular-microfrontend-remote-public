import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'remote-root',
  standalone: true,
  templateUrl: './root.component.html'
})
export class RootComponent {}
