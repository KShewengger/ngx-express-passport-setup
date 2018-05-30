import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { User } from "../../../../../shared/interfaces/-index";
import { Strategy } from "../../../../../shared/enums/strategy";


@Component({
  selector: "passport-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["../home/home.component.css"]
})
export class SignUpComponent implements OnInit {
  
  form: FormGroup;
  
  providerId = new FormControl(Strategy.Local, [ Validators.required ]);
  firstName  = new FormControl("", [ Validators.required ]);
  lastName   = new FormControl("", [ Validators.required ]);
  gender     = new FormControl("", [ Validators.required ]);
  email      = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z0-9.\._-]{1,}.(\\+(.*))?@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
  ]);
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(): void {
    const fields = {
      providerId : this.providerId,
      firstName  : this.firstName,
      lastName   : this.lastName,
      gender     : this.gender,
      email      : this.email
    };
    
    this.form = this.fb.group(fields);
  }

  register(user: User): void {
    console.log(user);
  }

}
