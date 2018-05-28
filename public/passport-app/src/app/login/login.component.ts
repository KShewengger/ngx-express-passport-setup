import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {

  baseUrl: string = "http://127.0.0.1:3000";

  isSigning: boolean = false;

  constructor(private router: Router) {}


  signIn(evt: Event): void {
    evt.preventDefault();

    this.isSigning = true;
    this.router.navigate([ "home" ]);
  }
}
