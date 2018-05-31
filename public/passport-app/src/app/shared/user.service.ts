import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Enum, Interface } from "../../../../../shared/-index";


@Injectable()
export class UserService {
  
  baseUrl: string;

  constructor(private http: HttpClient,
              @Inject("COMMON_BASE_URL") private commonBaseUrl: string,
              @Inject("TWITTER_BASE_URL") private twitterBaseUrl: string) {}


  saveUser(user: Interface.User): Observable<any> {
    return this.http
    .post(`${this.commonBaseUrl}/user`, user, {observe: "response"})
    .map((response: any) => response);
  }
  
  fetchUser(providerId: number): Observable<any> {
    this.baseUrl = providerId == Enum.Strategy.Twitter ? this.twitterBaseUrl : this.commonBaseUrl;
    
    return this.http.get(`${this.baseUrl}/user`, { withCredentials: true });
  }
  
  signOut(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/logout`, { withCredentials: true });
  }

}
