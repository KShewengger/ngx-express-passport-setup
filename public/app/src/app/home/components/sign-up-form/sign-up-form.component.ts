import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormModel } from '@home/components/shared/interfaces/form-model';
import { formModels } from './sign-up-form.data';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  form: FormGroup;
  models: FormModel[] = formModels;

  constructor() { }

  ngOnInit(): void {

  }

}
