import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { InitializeComponent } from "./initialize/initialize.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { UserInitializeResolver } from "./initialize/initialize-resolver.service";


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "initialize/:providerId",
    component: InitializeComponent,
    resolve: { user: UserInitializeResolver }
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
