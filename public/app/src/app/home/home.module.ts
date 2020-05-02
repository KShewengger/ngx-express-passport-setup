import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from '@home/home-routing.module';

import { HomeComponent } from '@home/container/home.component';
import { SignUpFormComponent } from '@home/components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from '@home/components/login-form/login-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    SignUpFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
