import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

import { Subscription } from 'rxjs';

@Injectable()
abstract class BaseComponent {
  public title = 'Base';
  private subscriptions: Subscription[] = [];

  constructor(
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const parametersExists = (parameters: Params): boolean => {
      return Object.keys(parameters).length > 0;
    };

    this.subscriptions.push(
      this.activatedRoute.params.subscribe((parameters) => {
        if (parametersExists(parameters)) {
          this.title = `${this.title}; PARAMS: ${JSON.stringify(parameters)}`;
        }
      })
    );

    this.subscriptions.push(this.activatedRoute.queryParams.subscribe(queryParams => {
      if (parametersExists(queryParams)) {
        this.title = `${this.title}; QUERY PARAMS: ${JSON.stringify(queryParams)}`;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'remote-pages-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PagesRootComponent {}

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'remote-home',
  templateUrl: './page.component.html'
})
export class HomePageComponent extends BaseComponent {
  override title = 'Home w/o params';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'remote-page',
  templateUrl: './page.component.html'
})
export class PageComponent extends BaseComponent {
  override title = 'Page with params';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'remote-subpage',
  templateUrl: './page.component.html'
})
export class SubPageComponent extends BaseComponent {
  override title = 'SubPage';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'remote-error',
  templateUrl: './page.component.html'
})
export class ErrorComponent extends BaseComponent {
  override title = 'Error';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}
