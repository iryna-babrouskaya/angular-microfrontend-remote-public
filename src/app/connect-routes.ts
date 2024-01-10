import { inject } from "@angular/core";
import { Router } from "@angular/router";

//https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/


export function connectRouter(router = inject(Router), useHash = false): void {
    let url: string;
    console.log(`${location.pathname.substring(1)}${location.search}`);
    if (!useHash) {
        url = `${location.pathname.substring(1)}${location.search}`;
        router.navigateByUrl(url);
        window.addEventListener('popstate', () => {
        router.navigateByUrl(url);
    });
    } else {
        url = `${location.hash.substring(1)}${location.search}`;
        router.navigateByUrl(url);
        window.addEventListener('hashchange', () => {
        router.navigateByUrl(url);
    });
    }
}