import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../shared/user.service";

import { Enum } from "../../../../../shared/-index";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isSigning: boolean = false;
  
  errorType: string;
  provider: string;
  
  email      = new FormControl("", [ Validators.required ]);
  password   = new FormControl("", [ Validators.required ]);
  
  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              @Inject("TWITTER_BASE_URL") public baseUrl: string) {}
  
  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(): void {
    const fields = {
      email     : this.email,
      password  : this.password
    };
    
    this.form = this.fb.group(fields);
  }
  
  signIn(evt: Event, user: any): void {
    evt.preventDefault();
    
    this.isSigning = true;
    
     this.userService
      .signIn(user)
      .subscribe(
        response => {
          this.provider = Enum.Strategy[response.providerId];
          
          if (this.provider === "Local") {
            localStorage.setItem("user", JSON.stringify(response));
            this.router.navigate([ "/home" ]);
          }
          else this.errorType = "invalidProvider";
        },
        err => this.errorType = "invalidUser",
        () => {
          this.isSigning = false;
          this.form.reset();
        });
  }
}
