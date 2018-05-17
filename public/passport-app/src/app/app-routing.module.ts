import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { InitializeComponent } from "./initialize/initialize.component";

import { UserInitializeResolver } from "./initialize/initialize-resolver.service";


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "initialize",
    component: InitializeComponent,
    resolve: { user: UserInitializeResolver }
  },
  {
    path: "home",
    component: HomeComponent
  }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
