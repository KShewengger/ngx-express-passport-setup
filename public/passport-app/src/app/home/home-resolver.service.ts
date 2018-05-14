import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { HomeService } from "./home.service";


@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private http: HttpClient,
              private homeService: HomeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.homeService.fetchUser();
  }

}

