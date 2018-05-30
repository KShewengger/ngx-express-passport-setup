import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Interface, Enum } from "../../../../../shared/-index";


@Component({
  selector: "passport-initialize",
  templateUrl: "./initialize.component.html",
  styleUrls: [ "./initialize.component.css" ]
})
export class InitializeComponent implements OnInit {

  provider: string;
  
  isInvalidAuthentication: boolean = false;
  
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkUserProviderId();
  }
  
  checkUserProviderId(): void {
    const snapshot    = this.route.snapshot;
    const user: Interface.User  = snapshot.data.user;
    const providerId: number = snapshot.params.providerId;
    
    this.provider = Enum.Strategy[user.providerId];
  
    if (providerId == user.providerId) {
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => this.router.navigate([ "/home" ]), 1000);
    }
    else this.isInvalidAuthentication = true;
  }

}
