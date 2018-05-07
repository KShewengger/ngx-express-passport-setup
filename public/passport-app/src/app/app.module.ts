import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { AppRouting } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AngularFontAwesomeModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
