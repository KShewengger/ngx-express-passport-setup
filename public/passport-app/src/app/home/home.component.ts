import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Interface, Enum } from "../../../../../shared/-index";

import { UserService } from "../shared/service/user.service";


@Component({
  selector: "passport-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent implements OnInit {

  user: Interface.User;
  provider: string;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private homeService: UserService) {}

  ngOnInit() {
    const userInfo  = localStorage.getItem("user");
    
    this.user     = JSON.parse(userInfo);
    this.provider = Enum.Strategy[this.user.providerId];
  }

  signOut(): void {
    this.homeService.signOut().subscribe(response => {
      localStorage.removeItem("user");
      this.router.navigate([ "/" ]);
    });
  }

}
