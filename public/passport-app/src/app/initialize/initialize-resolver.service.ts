import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { UserService } from "../shared/services/user.service";


@Injectable()
export class UserInitializeResolver implements Resolve<any> {

  constructor(private http: HttpClient,
              private authService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.authService.fetchUser(route.params.providerId);
  }

}

