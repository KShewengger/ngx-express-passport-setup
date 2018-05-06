import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "passport-app",
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = "app";
  apiUrl: string = `http://localhost:3000`;

  constructor(private http: HttpClient) {
  }

  signIn(): void {

  }
}
