import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../shared/user.service";

import { Enum, Interface } from "../../../../../shared/-index";


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
  
  signIn(evt: Event, credentials: any): void {
    evt.preventDefault();
    
    this.isSigning = true;
  
    const validateUserProvider = (user: Interface.User) => {
      this.provider = Enum.Strategy[user.providerId];
  
      if (this.provider === "Local") this.storeLocalAndRedirect(user);
      else this.errorType = "invalidProvider";
    };
    
    const initializeErrorMessage = (err: any) => this.errorType = err.error;
    
    this.userService
      .signIn(credentials)
      .subscribe(validateUserProvider, initializeErrorMessage);
  
    this.resetForm();
  }
  
  storeLocalAndRedirect(user: Interface.User): void {
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate([ "/home" ]);
  }
  
  resetForm(): void {
    this.isSigning = false;
    this.form.reset();
  }
}
