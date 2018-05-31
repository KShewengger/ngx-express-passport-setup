import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { InitializeComponent } from "./initialize/initialize.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { UserService } from "./shared/user.service";

import { UserInitializeResolver } from "./initialize/initialize-resolver.service";

import { AppRouting } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InitializeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AppRouting
  ],
  providers: [
    UserService,
    UserInitializeResolver,
    { provide: "COMMON_BASE_URL", useValue: "http://localhost:3000" },
    { provide: "TWITTER_BASE_URL", useValue: "http://127.0.0.1:3000" }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
