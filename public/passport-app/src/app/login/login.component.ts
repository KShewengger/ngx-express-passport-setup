import { Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  apiUrl: string = `http://localhost:3000`;

}
