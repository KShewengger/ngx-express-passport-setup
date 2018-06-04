import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../shared/service/user.service";

import { Interface, Enum } from "../../../../../shared/-index";


@Component({
  selector: "passport-signup",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["../home/home.component.css"]
})
export class SignUpComponent implements OnInit {
  
  form: FormGroup;
  
  isSuccessful: boolean = false;
  errorMessage: string;
  
  providerId = new FormControl(Enum.Strategy.Local, [ Validators.required ]);
  firstName  = new FormControl("", [ Validators.required ]);
  lastName   = new FormControl("", [ Validators.required ]);
  gender     = new FormControl("", [ Validators.required ]);
  password   = new FormControl("", [ Validators.required, Validators.min(5) ]);
  email      = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z0-9.\._-]{1,}.(\\+(.*))?@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
  ]);
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }
  
  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(): void {
    const fields = {
      providerId : this.providerId,
      firstName  : this.firstName,
      lastName   : this.lastName,
      gender     : this.gender,
      email      : this.email,
      password   : this.password
    };
    
    this.form = this.fb.group(fields);
  }

  register(user: Interface.User): void {
    this.userService
      .saveUser(user)
      .subscribe(
      response => this.isSuccessful = true,
      err => {
        this.isSuccessful = false;
        this.errorMessage = err.error.message;
      });
  }

}
