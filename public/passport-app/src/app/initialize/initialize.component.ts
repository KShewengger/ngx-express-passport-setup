import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: "passport-initialize",
  templateUrl: "./initialize.component.html",
  styleUrls: [ "./initialize.component.css" ]
})
export class InitializeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const user = this.route.snapshot.data.user;

    localStorage.setItem("user", JSON.stringify(user));

    setTimeout(() => this.router.navigate([ "/home" ]), 1000);
  }

}
