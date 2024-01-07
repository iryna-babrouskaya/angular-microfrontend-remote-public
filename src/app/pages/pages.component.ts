import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

const template = '<h2>Remote {{title}}</h2>';

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
  standalone: true,
  selector: 'remote-home',
  template: template
})
export class HomePageComponent extends BaseComponent {
  override title = 'Home w/o params';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  standalone: true,
  selector: 'remote-page',
  template: template
})
export class PageComponent extends BaseComponent {
  override title = 'Page with params';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  standalone: true,
  selector: 'remote-subpage',
  template: template
})
export class SubPageComponent extends BaseComponent {
  override title = 'SubPage';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}

@Component({
  standalone: true,
  selector: 'remote-error',
  template: template
})
export class ErrorComponent extends BaseComponent {
  override title = 'Error';
  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }
}
