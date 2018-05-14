import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { AppService } from "../app.service";


@Injectable()
export class InitializeResolverService implements Resolve<any> {

  constructor(private http: HttpClient,
              private homeService: AppService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.homeService.fetchUser();
  }

}

