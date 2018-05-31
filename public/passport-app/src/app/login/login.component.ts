import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {

  isSigning: boolean = false;

  constructor(private router: Router,
              @Inject("TWITTER_BASE_URL") public baseUrl: string) {}
  
  signIn(evt: Event): void {
    evt.preventDefault();

    this.isSigning = true;
    this.router.navigate([ "home" ]);
  }
}
