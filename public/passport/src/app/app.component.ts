import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
  title = "app";
  apiUrl: string = `http://localhost:3000`;

  constructor(private http: HttpClient) {
  }

  signIn(): void {

  }
}
