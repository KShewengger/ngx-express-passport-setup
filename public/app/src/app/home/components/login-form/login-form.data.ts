import { FormModel } from '@home/components/shared/interfaces/form-model';
import { Validators  } from '@angular/forms';


const validators = [ Validators.required ];

export const formModels: FormModel[] = [
  {
    model: 'email',
    placeholder: 'Email Address',
    type: 'email',
    validators: [ ...validators, Validators.email ]
  },
  {
    model: 'password',
    placeholder: 'Password',
    type: 'password',
    validators
  },
];
