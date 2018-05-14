import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { HomeService } from "./home.service";


@Component({
  selector: "passport-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private homeService: HomeService) {}

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
  }

  signOut(): void {
    this.homeService.signOut().subscribe(response => {
      localStorage.removeItem("user");
      this.router.navigate([ "/" ]);
    });
  }

}
