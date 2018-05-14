import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from "../app.service";


@Component({
  selector: "passport-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private homeService: AppService) {}

  ngOnInit() {
    const userInfo = localStorage.getItem("user");
    this.user = JSON.parse(userInfo);
  }

  signOut(): void {
    this.homeService.signOut().subscribe(response => {
      localStorage.removeItem("user");
      this.router.navigate([ "/" ]);
    });
  }

}
