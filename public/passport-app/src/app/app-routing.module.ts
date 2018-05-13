import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
