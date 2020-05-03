import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormModel } from '@home/components/shared/interfaces/form-model';
import { formModels } from './login-form.data';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  models: FormModel[] = formModels;

  constructor() { }

  ngOnInit(): void {

  }

}
