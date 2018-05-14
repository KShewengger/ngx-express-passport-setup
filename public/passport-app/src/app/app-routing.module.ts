import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

import { UserResolver } from "./home/home-resolver.service";


const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    resolve: { user: UserResolver }
  }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
