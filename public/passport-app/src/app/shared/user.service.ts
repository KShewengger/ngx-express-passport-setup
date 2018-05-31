import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Strategy } from "../../../../../shared/enums/strategy";


@Injectable()
export class UserService {
  
  baseUrl: string;

  constructor(private http: HttpClient,
              @Inject("COMMON_BASE_URL") private commonBaseUrl: string,
              @Inject("TWITTER_BASE_URL") private twitterBaseUrl: string) {}


  fetchUser(providerId: number): Observable<any> {
    this.baseUrl = providerId == Strategy.Twitter ? this.twitterBaseUrl : this.commonBaseUrl;
    
    return this.http.get(`${this.baseUrl}/user`, { withCredentials: true });
  }
  
  signOut(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/logout`, { withCredentials: true });
  }

}
