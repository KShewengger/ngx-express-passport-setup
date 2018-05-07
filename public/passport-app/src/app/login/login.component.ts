import { Component } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {

  apiUrl: string = `http://localhost:3000`;

  isSigning: boolean = false;

  constructor() {
  }


  signIn(evt: Event): void {
    evt.preventDefault();

    this.isSigning = true;
  }
}
