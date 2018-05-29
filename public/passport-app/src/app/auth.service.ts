import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) {}


  fetchUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/user`, { withCredentials: true });
  }


  signOut(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/logout`, { withCredentials: true });
  }

}
